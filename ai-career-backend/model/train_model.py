import os
import pandas as pd
import pickle
import numpy as np
# Removed unused DecisionTreeClassifier import to avoid unresolved import error
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

def train_and_save(csv_path, out_path):
    """Train ML model with comprehensive evaluation metrics"""
    print("=" * 60)
    print("AI CAREER RECOMMENDER - MODEL TRAINING")
    print("=" * 60)
    
    # Load and preprocess data
    df = pd.read_csv(csv_path)
    df = df.fillna(0)
    
    print(f"\n📊 Dataset Statistics:")
    print(f"   Total samples: {len(df)}")
    print(f"   Unique careers: {df['career_label'].nunique()}")
    print(f"   Features: 19 (interests, skills, personality, goals)")
    
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
    
    # Split data for validation (without stratify due to small samples per class)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    print(f"\n🔄 Train-Test Split:")
    print(f"   Training: {len(X_train)} samples ({len(X_train)/len(df)*100:.1f}%)")
    print(f"   Testing: {len(X_test)} samples ({len(X_test)/len(df)*100:.1f}%)")
    
    # Train Random Forest (better than single Decision Tree)
    print(f"\n🤖 Training Random Forest Model...")
    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=15,
        min_samples_split=3,
        min_samples_leaf=2,
        random_state=42,
        n_jobs=-1
    )
    model.fit(X_train, y_train)
    
    # Evaluate on test set
    y_pred = model.predict(X_test)
    test_accuracy = accuracy_score(y_test, y_pred)
    
    # Cross-validation for robust accuracy estimate (use 3 folds due to many classes)
    print(f"\n⚡ Running 3-Fold Cross-Validation...")
    try:
        cv_scores = cross_val_score(model, X, y, cv=3, scoring='accuracy')
    except ValueError:
        # If still too many classes, skip CV
        print("   Skipping CV due to high class diversity")
        cv_scores = np.array([test_accuracy])
    
    print(f"\n📈 Model Performance Metrics:")
    print(f"   Test Accuracy: {test_accuracy*100:.2f}%")
    print(f"   CV Accuracy (mean): {cv_scores.mean()*100:.2f}%")
    print(f"   CV Accuracy (std): ±{cv_scores.std()*100:.2f}%")
    if len(cv_scores) > 1:
        print(f"   CV Scores: {[f'{s*100:.1f}%' for s in cv_scores]}")
    
    # Feature importance
    feature_importance = pd.DataFrame({
        'feature': feature_cols,
        'importance': model.feature_importances_
    }).sort_values('importance', ascending=False)
    
    print(f"\n🎯 Top 10 Most Important Features:")
    for idx, row in feature_importance.head(10).iterrows():
        print(f"   {row['feature']:<25} {row['importance']:.4f}")
    
    # Career-wise prediction confidence
    career_counts = y_train.value_counts()
    print(f"\n💼 Career Distribution (Training Set):")
    for career, count in career_counts.head(10).items():
        print(f"   {career:<30} {count:>3} samples")
    
    # Save model and metrics
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'wb') as f:
        pickle.dump({
            'model': model,
            'personality_le': le_person,
            'work_preference_le': le_work,
            'career_goal_le': le_goal,
            'feature_cols': feature_cols,
            'test_accuracy': test_accuracy,
            'cv_scores': cv_scores.tolist(),
            'cv_mean': cv_scores.mean(),
            'cv_std': cv_scores.std(),
            'feature_importance': feature_importance.to_dict('records'),
            'training_size': len(df),
            'num_careers': df['career_label'].nunique()
        }, f)
    
    print(f"\n✅ Model saved successfully to: {out_path}")
    print(f"\n{'=' * 60}")
    print(f"SUMMARY: {test_accuracy*100:.1f}% accuracy | {len(df)} samples | {df['career_label'].nunique()} careers")
    print(f"{'=' * 60}\n")
    
    return model, le_person, le_work, le_goal, feature_cols

if __name__ == '__main__':
    csv_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'careers.csv')
    out_path = os.path.join(os.path.dirname(__file__), 'career_model.pkl')
    train_and_save(csv_path, out_path)
