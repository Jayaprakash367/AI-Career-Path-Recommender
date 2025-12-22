<div align="center">

# 🚀 AI Career Path Recommender

### *Your Intelligent Career Guidance Companion*

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/react-18.0+-61dafb.svg)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/flask-3.1+-black.svg)](https://flask.palletsprojects.com/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3.4+-38bdf8.svg)](https://tailwindcss.com/)

![AI Career Path Recommender Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=AI+Career+Path+Recommender)

*Discover your perfect career path with the power of AI and machine learning*

[Live Demo](#) • [Documentation](#-table-of-contents) • [Report Bug](https://github.com/Jayaprakash367/AI-Career-Path-Recommender/issues) • [Request Feature](https://github.com/Jayaprakash367/AI-Career-Path-Recommender/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 What Makes It Special](#-what-makes-it-special)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [💻 Tech Stack](#-tech-stack)
- [📊 How It Works](#-how-it-works)
- [🎨 Screenshots](#-screenshots)
- [📡 API Endpoints](#-api-endpoints)
- [🌐 Deployment](#-deployment)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Predictions** | Machine learning model trained on comprehensive career data |
| 📊 **Multi-Step Assessment** | 6-step detailed form collecting 25+ data points |
| 🎯 **Personalized Recommendations** | Get top 3 career matches with confidence scores |
| 📈 **Visual Analytics** | Interactive charts and confidence metrics |
| 🌓 **Modern UI/UX** | Beautiful glassmorphism design with smooth animations |
| 💾 **Data Persistence** | Optional MongoDB integration with local JSON fallback |
| 🔒 **Privacy Focused** | Your data stays secure and private |
| 📱 **Responsive Design** | Works seamlessly on desktop, tablet, and mobile |

</div>

---

## 🎯 What Makes It Special

### 🧠 **Intelligent Assessment**

Our AI analyzes:
- 🎨 **5 Interest Categories**: Technology, Design, Business, Science, Arts
- 💪 **6 Core Skills**: Communication, Creativity, Logic, Problem-solving, Teamwork, Leadership
- ⚙️ **4 Technical Skills**: Programming, Data Analysis, Writing, Public Speaking
- 🎓 **Academic Performance**: Grade percentages and educational background
- 🧬 **Personality Types**: Analytical, Creative, Social
- 💼 **Work Preferences**: Team collaboration, Independent work, or Mixed
- 🎯 **Career Goals**: Growth, Stability, Creativity, Impact, Income, Work-life balance

### 🎨 **Beautiful User Experience**

- ✨ Smooth page transitions with Framer Motion
- 🌟 Glassmorphism UI with gradient backgrounds
- 📊 Interactive data visualizations with Recharts
- 🎯 Progress tracking with visual indicators
- 💫 Animated result cards with ranking badges

### 🔬 **Machine Learning Model**

- 🌲 Random Forest Classifier with 100 decision trees
- 📚 Trained on 145+ diverse career paths
- 📈 27.6% accuracy (27x better than random)
- 🔄 Continuous learning capability

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                AI Career Path Recommender                    │
└─────────────────────────────────────────────────────────────┘
                          │
            ┌─────────────┴──────────────┐
            │                            │
      ┌─────▼──────┐             ┌─────▼──────┐
      │  Frontend   │             │   Backend   │
      │  (React)    │◄───────────►│   (Flask)   │
      └─────────────┘  REST API   └─────────────┘
      │                                  │
      │  • Vite Build                    │  • ML Model
      │  • Tailwind CSS                  │  • scikit-learn
      │  • Framer Motion                 │  • Pandas/NumPy
      │  • Recharts                      │  • CORS Enabled
      │  • React Router                  │
      │                                  │
      └──────────────────┬───────────────┘
                         │
               ┌─────────▼─────────┐
               │  Data Storage     │
               │ MongoDB / JSON    │
               └───────────────────┘
```

### 📁 Project Structure

```
career_path/
├── ai-career-backend/
│   ├── app.py                  # Flask REST API
│   ├── model/
│   │   ├── train_model.py      # ML training script
│   │   └── career_model.pkl    # Trained model
│   ├── data/
│   │   ├── careers.csv         # Training dataset (145+ samples)
│   │   └── records.json        # Local storage
│   ├── requirements.txt
│   ├── Procfile
│   └── README.md
│
└── ai-career-frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Form.jsx
    │   │   ├── ResultCard.jsx
    │   │   ├── Charts.jsx
    │   │   └── Footer.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── RecommendationForm.jsx
    │   │   └── Results.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Python 3.11+** - [Download](https://www.python.org/downloads/)
- **Node.js 18+** - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **MongoDB** (Optional) - [Download](https://www.mongodb.com/try/download/community)

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jayaprakash367/AI-Career-Path-Recommender.git
cd AI-Career-Path-Recommender
```

#### 2️⃣ Setup Backend

```bash
# Navigate to backend directory
cd ai-career-backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Train the model (runs automatically on first startup)
```

#### 3️⃣ Setup Frontend

```bash
# Open a new terminal and navigate to frontend
cd ai-career-frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:5000" > .env
```

### Running the Application

#### 🔧 Start Backend Server

```bash
# In ai-career-backend directory with activated virtual environment
python app.py
```

Backend will run on: **http://localhost:5000**

#### 🎨 Start Frontend Server

```bash
# In ai-career-frontend directory
npm run dev
```

Frontend will run on: **http://localhost:5173**

#### 🌐 Access the Application

Open your browser and visit:
```
http://localhost:5173
```

---

## 💻 Tech Stack

### Frontend

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18.3.1 |
| Vite | Build Tool | 5.4.21 |
| Tailwind CSS | Styling | 3.4.17 |
| Framer Motion | Animations | 10.12.16 |
| Recharts | Data Visualization | 2.5.0 |
| Axios | HTTP Client | 1.7.2 |

### Backend

| Technology | Purpose | Version |
|------------|---------|---------|
| Python | Language | 3.11+ |
| Flask | Web Framework | 3.1.0 |
| scikit-learn | ML Library | 1.5.2 |
| Pandas | Data Processing | 2.2.3 |
| NumPy | Numerical Computing | 2.1.3 |
| MongoDB | Database (Optional) | 4.10.1 |

---

## 📊 How It Works

### Step-by-Step Process

```
Step 1: Basic Information
  ├─ Name, Age, Education, Current Role
  │
Step 2: Interest Areas
  ├─ Technology, Design, Business, Science, Arts
  │
Step 3: Core Skills Rating
  ├─ Communication, Creativity, Logic, Problem-solving, Teamwork, Leadership
  │
Step 4: Technical Skills
  ├─ Programming, Data Analysis, Writing, Public Speaking
  │
Step 5: Academic & Preferences
  ├─ Marks, Personality Type, Work Preference, Career Goals
  │
Step 6: Submit & Get Recommendations
  └─ View Top 3 Careers with Confidence Scores
```

### Feature Engineering

The ML model processes **19 key features**:
- Binary interests (5)
- Skill ratings (10)
- Academic score (1)
- Encoded preferences (3)

### Prediction Engine

- **Algorithm**: Random Forest Classifier (100 trees)
- **Accuracy**: 27.6% (27x better than random)
- **Output**: Top 3 career matches with confidence scores

---

## 🎨 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](https://via.placeholder.com/800x500/6366f1/ffffff?text=Beautiful+Landing+Page)

*Stunning hero section with gradient backgrounds and smooth animations*

### 📝 Multi-Step Form
![Assessment Form](https://via.placeholder.com/800x500/8b5cf6/ffffff?text=Interactive+6-Step+Assessment)

*Intuitive form with progress tracking and real-time validation*

### 📊 Results Dashboard
![Results Page](https://via.placeholder.com/800x500/06b6d4/ffffff?text=AI-Powered+Career+Recommendations)

*Comprehensive results with visual analytics and detailed insights*

</div>

---

## 📡 API Endpoints

### 1. Health Check

```http
GET /
```

Response:
```json
{
  "status": "AI Career Path Recommender backend running"
}
```

### 2. Register User

```http
POST /register
Content-Type: application/json
```

Request:
```json
{
  "name": "John Doe",
  "age": 22,
  "education": "Bachelor's"
}
```

Response:
```json
{
  "status": "ok"
}
```

### 3. Get Career Recommendations

```http
POST /predict
Content-Type: application/json
```

Request (19 features):
```json
{
  "interest_tech": 1,
  "interest_design": 0,
  "interest_business": 0,
  "interest_science": 1,
  "interest_arts": 0,
  "communication": 4,
  "creativity": 3,
  "logic": 5,
  "problem_solving": 5,
  "teamwork": 4,
  "leadership": 3,
  "programming": 4,
  "data_analysis": 5,
  "writing": 3,
  "public_speaking": 2,
  "marks": 85,
  "personality": "analytical",
  "work_preference": "team",
  "career_goal": "growth"
}
```

Response:
```json
{
  "recommendations": [
    {
      "career": "Data Scientist",
      "confidence": 0.92
    },
    {
      "career": "Software Engineer",
      "confidence": 0.85
    },
    {
      "career": "Machine Learning Engineer",
      "confidence": 0.78
    }
  ]
}
```

### 4. Submit Feedback

```http
POST /feedback
Content-Type: application/json
```

Request:
```json
{
  "rating": 5,
  "comment": "Great recommendations!"
}
```

Response:
```json
{
  "status": "ok"
}
```

### 5. Get Model Information ⭐

```http
GET /model-info
```

Response:
```json
{
  "status": "Model loaded successfully",
  "model_type": "Random Forest Classifier",
  "accuracy": {
    "test_accuracy": 27.59,
    "cv_mean": 26.19,
    "cv_std": 3.80,
    "cv_scores": [28.6, 29.2, 20.8]
  },
  "training_info": {
    "training_samples": 145,
    "num_careers": 104,
    "features_used": 19
  }
}
```

---

## 🌐 Deployment

### Deploy Backend to Render

1. Create new **Web Service** on [Render](https://render.com)
2. Connect your GitHub repository
3. Set build command:
   ```
   pip install -r requirements.txt && python model/train_model.py
   ```
4. Set start command:
   ```
   gunicorn app:app
   ```
5. Add environment variable (optional):
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

### Deploy Frontend to Vercel/Netlify

1. Build the frontend:
   ```bash
   cd ai-career-frontend
   npm run build
   ```

2. **For Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

3. **For Netlify**:
   - Drag and drop the `dist` folder to Netlify
   - Set environment variable: `VITE_API_URL=https://your-backend.onrender.com`

### Deploy to Heroku

```bash
# Backend
heroku create your-app-backend
heroku config:set MONGO_URI=your_mongodb_uri
git push heroku main

# Frontend (use Vercel/Netlify instead for better static hosting)
```

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Core ML model (Random Forest)
- [x] 6-step assessment form
- [x] Beautiful glassmorphism UI
- [x] Visual analytics with charts
- [x] MongoDB integration
- [x] Responsive design
- [x] Model evaluation metrics

### 🚧 In Progress
- [ ] User authentication system
- [ ] PDF report generation
- [ ] Email notifications

### 🔮 Future Enhancements

**Advanced Features**
- [ ] Career path comparison tool
- [ ] Industry salary insights dashboard
- [ ] Real-time job market trends
- [ ] LinkedIn profile integration
- [ ] AI resume analysis

**ML Improvements**
- [ ] Deep learning models (Neural Networks)
- [ ] Natural Language Processing
- [ ] Collaborative filtering
- [ ] Continuous model retraining

**User Experience**
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Voice-guided assessment
- [ ] Mobile app (React Native)
- [ ] Career counselor AI chatbot

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

### Steps

1. **Fork the Repository**
   ```bash
   git clone https://github.com/Jayaprakash367/AI-Career-Path-Recommender.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Changes & Commit**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open Pull Request**

### Guidelines

- Follow existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation
- Be respectful and constructive

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

```
Copyright (c) 2025 Jayaprakash K

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Author

<div align="center">

### **Jayaprakash K**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jayaprakash367)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/jayaprakash367)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jayaprakash.k@example.com)

</div>

---

## 🌟 Acknowledgments

Special thanks to:

- [React](https://reactjs.org/) - UI library
- [Flask](https://flask.palletsprojects.com/) - Web framework
- [scikit-learn](https://scikit-learn.org/) - ML library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Recharts](https://recharts.org/) - Data visualization

---

## 📞 Support

Need help? Here are your options:

- 📧 **Email**: jayaprakash.k@example.com
- 🐛 **[Report Bug](https://github.com/Jayaprakash367/AI-Career-Path-Recommender/issues)**
- 💡 **[Request Feature](https://github.com/Jayaprakash367/AI-Career-Path-Recommender/issues)**
- ⭐ **Star this repo** if you find it helpful!

---

<div align="center">

### 🎯 Find Your Perfect Career Path Today!

Made with ❤️ by [Jayaprakash K](https://github.com/Jayaprakash367)

⭐ **Star this repository if you found it helpful!** ⭐

**[⬆ Back to Top](#-ai-career-path-recommender)**

</div>
Run backend
cd "c:\Users\jayaprakash.k\OneDrive\Documents\career_path\ai-career-backend" && python app.py

 Run frontend
cd "c:\Users\jayaprakash.k\OneDrive\Documents\career_path\ai-career-frontend" && npm run dev