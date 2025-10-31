# AI Career Path Recommender 🚀

A modern, AI-powered career recommendation platform built with **React**, **Tailwind CSS**, **Framer Motion**, **Flask**, and **Scikit-learn**.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![Flask](https://img.shields.io/badge/Flask-3.1-green) ![Python](https://img.shields.io/badge/Python-3.11-yellow) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

---

## 🎯 Features

- **AI-Powered Recommendations**: Decision Tree Classifier predicts top 3 career paths based on user input
- **Multi-Step Form**: Smooth animated form collecting interests, skills, grades, and personality
- **Interactive Results**: Confidence scores, pie charts (Recharts), and career detail modals
- **Responsive Design**: Glassmorphism UI with dark theme, optimized for mobile/tablet/desktop
- **Real-time Animations**: Framer Motion transitions and hover effects
- **Database Support**: MongoDB Atlas or local JSON storage for user data and feedback
- **Deployment Ready**: Heroku/Render compatible with Procfile and environment variable support

---

## 📁 Project Structure

```
career_path/
├── ai-career-backend/          # Flask REST API + ML Model
│   ├── app.py                  # Main Flask app with endpoints
│   ├── model/
│   │   ├── train_model.py      # ML training script
│   │   └── career_model.pkl    # Trained Decision Tree model
│   ├── data/
│   │   ├── careers.csv         # Mock training dataset
│   │   └── records.json        # Local storage (if no MongoDB)
│   ├── requirements.txt        # Python dependencies
│   ├── Procfile                # Heroku/Render config
│   └── README.md
│
└── ai-career-frontend/         # React + Vite + Tailwind
    ├── src/
    │   ├── components/         # Navbar, Hero, Form, ResultCard, Charts, Footer
    │   ├── pages/              # Home, RecommendationForm, Results
    │   ├── App.jsx             # Main app router
    │   ├── main.jsx            # Entry point
    │   └── index.css           # Tailwind + custom styles
    ├── package.json            # npm dependencies
    ├── vite.config.js          # Vite config
    ├── tailwind.config.js      # Tailwind config
    └── README.md
```

---

## 🛠️ Local Setup

### Prerequisites
- **Python 3.10+** (with pip)
- **Node.js 18+** (with npm)
- **Git**
- (Optional) MongoDB Atlas account for cloud database

---

### Backend Setup

1. **Navigate to backend directory**
   ```cmd
   cd ai-career-backend
   ```

2. **Create virtual environment (optional but recommended)**
   ```cmd
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Install dependencies**
   ```cmd
   pip install -r requirements.txt
   ```

4. **Train the ML model**
   ```cmd
   python model\train_model.py
   ```
   This creates `model/career_model.pkl`

5. **(Optional) Configure MongoDB**
   - Set environment variable:
     ```cmd
     set MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/career_db
     ```
   - Without MongoDB, data will be stored in `data/records.json`

6. **Run Flask server**
   ```cmd
   python app.py
   ```
   Server runs at: **http://localhost:5000**

---

### Frontend Setup

1. **Navigate to frontend directory**
   ```cmd
   cd ai-career-frontend
   ```

2. **Install dependencies**
   ```cmd
   npm install
   ```

3. **(Optional) Configure API URL**
   - Create `.env` file:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     ```
   - Or frontend will default to `http://localhost:5000`

4. **Run development server**
   ```cmd
   npm run dev
   ```
   Server runs at: **http://localhost:5173**

---

## 🚀 Usage

1. Open **http://localhost:5173** in your browser
2. Click **"Get Started"** on the homepage
3. Fill out the multi-step recommendation form:
   - **Step 1**: Name, age, education
   - **Step 2**: Interests (tech/design), skills (communication, creativity, logic)
   - **Step 3**: Grades and personality type
4. Click **"Submit"** to get AI recommendations
5. View top 3 career paths with confidence scores and charts
6. Click **"Learn More"** on any career card for details

---

## 🧠 How It Works

### Machine Learning Pipeline

1. **Dataset**: Mock CSV with features:
   - `interest_tech`, `interest_design` (binary)
   - `communication`, `creativity`, `logic` (1-5 scale)
   - `marks` (0-100)
   - `personality` (analytical/creative/social)
   - `career_label` (target: Software Engineer, Data Scientist, UI/UX Designer, etc.)

2. **Model**: Scikit-learn `DecisionTreeClassifier`
   - Max depth: 6
   - Trained on preprocessed features
   - Outputs probability distribution over career classes

3. **Prediction**: User input → Feature vector → Model inference → Top 3 careers with confidence

---

## 📡 API Endpoints

### `GET /`
Health check
```json
{"status": "AI Career Path Recommender backend running"}
```

### `POST /register`
Save user information (name, age, education)
```json
{
  "name": "John Doe",
  "age": 22,
  "education": "Bachelor's"
}
```

### `POST /predict`
Get career recommendations
```json
// Request
{
  "interest_tech": 1,
  "interest_design": 0,
  "communication": 3,
  "creativity": 2,
  "logic": 5,
  "marks": 85,
  "personality": "analytical"
}

// Response
{
  "recommendations": [
    {"career": "Data Scientist", "confidence": 0.92},
    {"career": "Software Engineer", "confidence": 0.85},
    {"career": "AI Engineer", "confidence": 0.78}
  ]
}
```

### `POST /feedback`
Submit user feedback
```json
{
  "rating": 5,
  "comment": "Great recommendations!"
}
```

---

## 🌐 Deployment

### Deploy to Render (Recommended)

#### Backend
1. Create new **Web Service** on Render
2. Connect your GitHub repo
3. Set build command: `pip install -r requirements.txt && python model/train_model.py`
4. Set start command: `gunicorn app:app`
5. Add environment variable: `MONGO_URI` (if using MongoDB)

#### Frontend
1. Create new **Static Site** on Render
2. Set build command: `npm install && npm run build`
3. Set publish directory: `dist`
4. Add environment variable: `REACT_APP_API_URL=https://your-backend.onrender.com`

### Deploy to Heroku

#### Backend
```cmd
heroku create your-app-backend
heroku config:set MONGO_URI=your_mongodb_uri
git push heroku main
```

#### Frontend
```cmd
cd ai-career-frontend
npm run build
# Deploy dist/ folder to Heroku, Netlify, or Vercel
```

---

## 🎨 Customization

### Expand Dataset
Edit `ai-career-backend/data/careers.csv` to add more training samples:
```csv
interest_tech,interest_design,communication,creativity,logic,marks,personality,career_label
1,0,4,3,5,90,analytical,Machine Learning Engineer
```

Then retrain:
```cmd
python model\train_model.py
```

### Add New Career Details
Update the modal content in `src/pages/Results.jsx`:
```jsx
const careerDetails = {
  "Data Scientist": {
    description: "Analyze data to extract insights...",
    skills: ["Python", "Statistics", "SQL"],
    salary: "$100k - $150k"
  }
}
```

### Styling
Modify `tailwind.config.js` for theme changes:
```js
theme: {
  extend: {
    colors: {
      primary: '#6366F1',
      secondary: '#06B6D4'
    }
  }
}
```

---

## 🧪 Testing

### Backend
```cmd
# Test prediction endpoint
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{"interest_tech":1,"interest_design":0,"communication":3,"creativity":2,"logic":5,"marks":85,"personality":"analytical"}'
```

### Frontend
- Open browser DevTools
- Check network tab for API calls
- Verify form submission and results rendering

---

## 📦 Dependencies

### Backend
- `flask` - Web framework
- `flask-cors` - CORS support
- `scikit-learn` - ML library
- `pandas` - Data processing
- `pymongo` - MongoDB driver
- `gunicorn` - Production server

### Frontend
- `react` - UI library
- `react-router-dom` - Routing
- `tailwindcss` - Styling
- `framer-motion` - Animations
- `recharts` - Charts
- `axios` - HTTP client
- `vite` - Build tool

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🙋 Support

For issues or questions:
- Open an issue on GitHub
- Contact: your-email@example.com

---

## 🎓 Future Enhancements

- [ ] Add PDF career report generation
- [ ] Implement admin dashboard with Flask-Admin
- [ ] Add career insights from external APIs
- [ ] Multi-language support
- [ ] User authentication with JWT
- [ ] A/B testing for model improvements
- [ ] Integration with LinkedIn API
- [ ] Real-time chat support

---

**Built with ❤️ by Jayaprakash**

#   A I - C a r e e r - P a t h - R e c o m m e n d e r  
 