import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'career_model.pkl')
CSV_PATH = os.path.join(BASE_DIR, 'data', 'careers.csv')
LOCAL_STORE = os.path.join(BASE_DIR, 'data', 'records.json')

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "OPTIONS"], "allow_headers": ["Content-Type"]}})
app.config['CORS_HEADERS'] = 'Content-Type'

# Helper: load or train model
def train_and_save_model(csv_path, model_path):
    df = pd.read_csv(csv_path)
    df = df.fillna(0)
    
    # Encode categorical features
    le_person = LabelEncoder()
    le_work = LabelEncoder()
    le_goal = LabelEncoder()
    
    df['personality_enc'] = le_person.fit_transform(df['personality'].astype(str))
    df['work_preference_enc'] = le_work.fit_transform(df['work_preference'].astype(str))
    df['career_goal_enc'] = le_goal.fit_transform(df['career_goal'].astype(str))
    
    # Define features
    feature_cols = [
        'interest_tech', 'interest_design', 'interest_business', 'interest_science', 'interest_arts',
        'communication', 'creativity', 'logic', 'problem_solving', 'teamwork', 'leadership',
        'programming', 'data_analysis', 'writing', 'public_speaking', 'marks',
        'personality_enc', 'work_preference_enc', 'career_goal_enc'
    ]
    
    X = df[feature_cols]
    y = df['career_label']
    model = DecisionTreeClassifier(max_depth=10, min_samples_split=2, random_state=42)
    model.fit(X, y)
    
    # Save model and encoders
    with open(model_path, 'wb') as f:
        pickle.dump({
            'model': model,
            'personality_le': le_person,
            'work_preference_le': le_work,
            'career_goal_le': le_goal,
            'feature_cols': feature_cols
        }, f)
    return model, le_person, le_work, le_goal, feature_cols

# Load or train at startup
if not os.path.exists(MODEL_PATH):
    print('Model not found, training a new model...')
    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
    model, personality_le, work_preference_le, career_goal_le, feature_cols = train_and_save_model(CSV_PATH, MODEL_PATH)
else:
    with open(MODEL_PATH, 'rb') as f:
        data = pickle.load(f)
        model = data['model']
        personality_le = data.get('personality_le')
        work_preference_le = data.get('work_preference_le')
        career_goal_le = data.get('career_goal_le')
        feature_cols = data.get('feature_cols', [])

# DB helper: use MongoDB if MONGO_URI is set, else local JSON
from pymongo import MongoClient
MONGO_URI = os.environ.get('MONGO_URI')
if MONGO_URI:
    client = MongoClient(MONGO_URI)
    db = client.get_default_database()
    users_col = db.get_collection('users')
    feedback_col = db.get_collection('feedback')
else:
    users_col = None
    feedback_col = None
    if not os.path.exists(LOCAL_STORE):
        with open(LOCAL_STORE, 'w') as f:
            json.dump({'users': [], 'feedback': []}, f)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json(silent=True) or {}
    entry = {
        'name': data.get('name'),
        'age': data.get('age'),
        'education': data.get('education'),
        'raw': data,
    }
    if users_col is not None:
        users_col.insert_one(entry)
    else:
        with open(LOCAL_STORE, 'r+') as f:
            store = json.load(f)
            store['users'].append(entry)
            f.seek(0)
            json.dump(store, f, indent=2)
    return jsonify({'status': 'ok'})

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.get_json(silent=True) or {}
    if feedback_col is not None:
        feedback_col.insert_one(data)
    else:
        with open(LOCAL_STORE, 'r+') as f:
            store = json.load(f)
            store['feedback'].append(data)
            f.seek(0)
            json.dump(store, f, indent=2)
    return jsonify({'status': 'ok'})

@app.route('/predict', methods=['POST'])
def predict():
    payload = request.get_json(silent=True) or {}
    try:
        # Extract all features from payload
        features = []
        
        # Interests (binary 0/1)
        features.append(int(bool(payload.get('interest_tech', 0))))
        features.append(int(bool(payload.get('interest_design', 0))))
        features.append(int(bool(payload.get('interest_business', 0))))
        features.append(int(bool(payload.get('interest_science', 0))))
        features.append(int(bool(payload.get('interest_arts', 0))))
        
        # Core skills (1-5)
        features.append(float(payload.get('communication', 3)))
        features.append(float(payload.get('creativity', 3)))
        features.append(float(payload.get('logic', 3)))
        features.append(float(payload.get('problem_solving', 3)))
        features.append(float(payload.get('teamwork', 3)))
        features.append(float(payload.get('leadership', 3)))
        
        # Technical skills (0-5)
        features.append(float(payload.get('programming', 0)))
        features.append(float(payload.get('data_analysis', 0)))
        features.append(float(payload.get('writing', 0)))
        features.append(float(payload.get('public_speaking', 0)))
        
        # Academic performance
        features.append(float(payload.get('marks', 70)))
        
        # Encode personality
        personality = payload.get('personality', 'analytical')
        if personality_le is not None:
            try:
                transformed = personality_le.transform([personality])
                p_enc = int(transformed[0])  # type: ignore
            except Exception:
                p_enc = 0
        else:
            p_enc = 0
        features.append(p_enc)
        
        # Encode work preference
        work_pref = payload.get('work_preference', 'team')
        if work_preference_le is not None:
            try:
                transformed = work_preference_le.transform([work_pref])
                w_enc = int(transformed[0])  # type: ignore
            except Exception:
                w_enc = 0
        else:
            w_enc = 0
        features.append(w_enc)
        
        # Encode career goal
        career_goal = payload.get('career_goal', 'growth')
        if career_goal_le is not None:
            try:
                transformed = career_goal_le.transform([career_goal])
                g_enc = int(transformed[0])  # type: ignore
            except Exception:
                g_enc = 0
        else:
            g_enc = 0
        features.append(g_enc)
        
        # Predict
        X = np.array(features).reshape(1, -1)
        probs = model.predict_proba(X)[0]
        classes = model.classes_
        pairs = list(zip(classes, probs))
        pairs_sorted = sorted(pairs, key=lambda x: x[1], reverse=True)
        
        recommendations = []
        for career, prob in pairs_sorted[:3]:
            recommendations.append({'career': career, 'confidence': round(float(prob), 2)})
        
        return jsonify({'recommendations': recommendations})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/')
def root():
    return jsonify({'status': 'AI Career Path Recommender backend running'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)), debug=False)
