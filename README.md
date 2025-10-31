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

- 🌲 Decision Tree Classifier with optimized hyperparameters
- 📚 Trained on 40+ diverse career paths
- 🎯 High prediction accuracy
- 🔄 Continuous learning capability

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     AI Career Path Recommender               │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴──────────────┐
                │                            │
         ┌──────▼──────┐             ┌──────▼──────┐
         │   Frontend   │             │   Backend    │
         │   (React)    │◄───────────►│   (Flask)    │
         └──────────────┘   REST API  └──────────────┘
         │                                    │
         │  • Vite Build                      │  • ML Model
         │  • Tailwind CSS                    │  • scikit-learn
         │  • Framer Motion                   │  • Pandas/NumPy
         │  • Recharts                        │  • CORS Enabled
         │  • React Router                    │
         │                                    │
         └────────────────────┬───────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   Data Storage    │
                    │  MongoDB / JSON   │
                    └───────────────────┘
```

### 📁 Project Structure

```
career_path/
├── ai-career-backend/          # Flask REST API + ML Model
│   ├── app.py                  # Main Flask app with endpoints
│   ├── model/
│   │   ├── train_model.py      # ML training script
│   │   └── career_model.pkl    # Trained Decision Tree model
│   ├── data/
│   │   ├── careers.csv         # Training dataset (40+ samples)
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

## � Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

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

# The model will be automatically trained on first run
```

#### 3️⃣ Setup Frontend

```bash
# Open a new terminal and navigate to frontend directory
cd ai-career-frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:5000" > .env
```

### Running the Application

#### 🔧 Start Backend Server

```bash
# In the ai-career-backend directory with activated virtual environment
python app.py
```

The backend will start on **http://localhost:5000**

#### 🎨 Start Frontend Server

```bash
# In the ai-career-frontend directory
npm run dev
```

The frontend will start on **http://localhost:5173**

#### 🌐 Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

---

## � Tech Stack

### Frontend

| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | UI Framework | 18.3.1 |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool | 5.4.21 |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Styling | 3.4.17 |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Animations | 10.12.16 |
| ![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat) | Data Visualization | 2.5.0 |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) | HTTP Client | 1.7.2 |

### Backend

| Technology | Purpose | Version |
|------------|---------|---------|
| ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) | Language | 3.11+ |
| ![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white) | Web Framework | 3.1.0 |
| ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white) | ML Library | 1.5.2 |
| ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white) | Data Processing | 2.2.3 |
| ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white) | Numerical Computing | 2.1.3 |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | Database (Optional) | 4.10.1 |

---

## 📊 How It Works

### 1. Data Collection
Users complete a comprehensive 6-step assessment form:

```
Step 1: Basic Information (Name, Age, Education, Current Role)
   ↓
Step 2: Interest Areas (5 categories)
   ↓
Step 3: Core Skills Rating (6 skills, 1-5 scale)
   ↓
Step 4: Technical Skills (4 skills, 0-5 scale)
   ↓
Step 5: Academic & Preferences (Marks, Personality, Goals)
   ↓
Step 6: Additional Details (Experience, Industry, Location)
```

### 2. Feature Engineering
The ML model processes 19 key features:
- Binary interests (5)
- Skill ratings (10)
- Academic score (1)
- Encoded preferences (3)

### 3. Prediction
Decision Tree Classifier analyzes the feature vector and returns:
- **Top 3 career matches**
- **Confidence scores** (0.00 - 1.00)
- **Detailed career information**

### 4. Results Display
Users receive:
- 📊 Visual confidence charts
- 🎯 Ranked career recommendations
- 👤 Personal profile summary
- 💼 Career details with salary ranges, growth potential, and requirements

---

## 🎨 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](https://via.placeholder.com/800x500/6366f1/ffffff?text=Beautiful+Landing+Page)

*Stunning hero section with gradient backgrounds and smooth animations*

---

### 📝 Multi-Step Form
![Assessment Form](https://via.placeholder.com/800x500/8b5cf6/ffffff?text=Interactive+6-Step+Assessment)

*Intuitive form with progress tracking and real-time validation*

---

### 📊 Results Dashboard
![Results Page](https://via.placeholder.com/800x500/06b6d4/ffffff?text=AI-Powered+Career+Recommendations)

*Comprehensive results with visual analytics and detailed insights*

</div>

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
Get career recommendations (19 features)
```json
// Request
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

// Response
{
  "recommendations": [
    {"career": "Data Scientist", "confidence": 0.92},
    {"career": "Software Engineer", "confidence": 0.85},
    {"career": "Machine Learning Engineer", "confidence": 0.78}
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

---

## �️ Roadmap

### ✅ Completed
- [x] Core ML model implementation
- [x] 6-step assessment form
- [x] Beautiful UI with glassmorphism design
- [x] Visual analytics with charts
- [x] MongoDB integration
- [x] Responsive design

### 🚧 In Progress
- [ ] User authentication system
- [ ] PDF report generation
- [ ] Email notifications

### 🔮 Future Enhancements
- [ ] **Advanced Features**
  - [ ] Career path comparison tool
  - [ ] Industry salary insights
  - [ ] Job market trends integration
  - [ ] LinkedIn profile integration
  - [ ] Resume analysis and suggestions
  
- [ ] **ML Improvements**
  - [ ] Deep learning model (Neural Networks)
  - [ ] Natural Language Processing for resume analysis
  - [ ] Collaborative filtering for better recommendations
  - [ ] Real-time model retraining

- [ ] **User Experience**
  - [ ] Dark/Light mode toggle
  - [ ] Multi-language support
  - [ ] Voice-guided assessment
  - [ ] Mobile app (React Native)
  - [ ] Career counselor chat bot

- [ ] **Analytics & Insights**
  - [ ] Admin dashboard
  - [ ] User analytics and trends
  - [ ] A/B testing framework
  - [ ] Feedback collection system

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   git clone https://github.com/Jayaprakash367/AI-Career-Path-Recommender.git
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive in discussions

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

```
MIT License

Copyright (c) 2025 Jayaprakash K

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
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

- [React](https://reactjs.org/) - For the amazing UI library
- [Flask](https://flask.palletsprojects.com/) - For the lightweight web framework
- [scikit-learn](https://scikit-learn.org/) - For powerful ML tools
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For beautiful animations
- [Recharts](https://recharts.org/) - For elegant data visualizations
- All contributors and users of this project

---

## 📞 Support

If you have any questions or need help, please:

- 📧 Email: jayaprakash.k@example.com
- 🐛 [Report a Bug](https://github.com/Jayaprakash367/AI-Career-Path-Recommender/issues)
- 💡 [Request a Feature](https://github.com/Jayaprakash367/AI-Career-Path-Recommender/issues)
- ⭐ Star this repository if you find it helpful!

---

<div align="center">

### 🎯 Find Your Perfect Career Path Today!

Made with ❤️ by [Jayaprakash K](https://github.com/Jayaprakash367)

⭐ **Star this repository if you found it helpful!** ⭐

**[⬆ Back to Top](#-ai-career-path-recommender)**

</div>

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

#   A I - C a r e e r - P a t h - R e c o m m e n d e r 
 
 