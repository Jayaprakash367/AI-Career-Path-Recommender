AI Career Path Recommender - Backend

Setup (local):
1. Create a Python 3.10+ virtualenv
2. pip install -r requirements.txt
3. (Optional) Set MONGO_URI env var to use MongoDB Atlas
4. python model/train_model.py  # creates model
5. python app.py

Endpoints:
- GET / -> health
- POST /register -> save user info
- POST /predict -> returns recommendations JSON
- POST /feedback -> save feedback

Deployment: use Render or Heroku. Set MONGO_URI in environment variables. Use gunicorn via Procfile.
