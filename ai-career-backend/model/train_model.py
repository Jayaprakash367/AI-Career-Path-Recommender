import os
import pandas as pd
import pickle
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import LabelEncoder

def train_and_save(csv_path, out_path):
    df = pd.read_csv(csv_path)
    df = df.fillna(0)
    
    # Encode categorical features
    le_person = LabelEncoder()
    le_work = LabelEncoder()
    le_goal = LabelEncoder()
    
    df['personality_enc'] = le_person.fit_transform(df['personality'].astype(str))
    df['work_preference_enc'] = le_work.fit_transform(df['work_preference'].astype(str))
    df['career_goal_enc'] = le_goal.fit_transform(df['career_goal'].astype(str))
    
    # Define feature columns
    feature_cols = [
        'interest_tech', 'interest_design', 'interest_business', 'interest_science', 'interest_arts',
        'communication', 'creativity', 'logic', 'problem_solving', 'teamwork', 'leadership',
        'programming', 'data_analysis', 'writing', 'public_speaking', 'marks',
        'personality_enc', 'work_preference_enc', 'career_goal_enc'
    ]
    
    X = df[feature_cols]
    y = df['career_label']
    
    # Train model with better parameters
    model = DecisionTreeClassifier(max_depth=10, min_samples_split=2, random_state=42)
    model.fit(X, y)
    
    # Save model and encoders
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'wb') as f:
        pickle.dump({
            'model': model,
            'personality_le': le_person,
            'work_preference_le': le_work,
            'career_goal_le': le_goal,
            'feature_cols': feature_cols
        }, f)
    print(f'✓ Saved model to {out_path}')
    print(f'✓ Training samples: {len(df)}')
    print(f'✓ Unique careers: {len(y.unique())}')

if __name__ == '__main__':
    csv_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'careers.csv')
    out_path = os.path.join(os.path.dirname(__file__), 'career_model.pkl')
    train_and_save(csv_path, out_path)
