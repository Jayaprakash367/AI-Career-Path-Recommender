import requests
import json

BASE_URL = "http://localhost:5000"

def test_health():
    print("Testing health endpoint...")
    response = requests.get(f"{BASE_URL}/")
    print(f"✓ Status: {response.status_code}")
    print(f"✓ Response: {response.json()}\n")

def test_predict():
    print("Testing prediction endpoint...")
    payload = {
        "interest_tech": 1,
        "interest_design": 0,
        "communication": 3,
        "creativity": 2,
        "logic": 5,
        "marks": 85,
        "personality": "analytical"
    }
    response = requests.post(f"{BASE_URL}/predict", json=payload)
    print(f"✓ Status: {response.status_code}")
    print(f"✓ Recommendations:")
    data = response.json()
    for rec in data.get('recommendations', []):
        print(f"  - {rec['career']}: {rec['confidence']*100:.0f}% confidence")
    print()

def test_register():
    print("Testing register endpoint...")
    payload = {
        "name": "Test User",
        "age": 22,
        "education": "Bachelor's"
    }
    response = requests.post(f"{BASE_URL}/register", json=payload)
    print(f"✓ Status: {response.status_code}")
    print(f"✓ Response: {response.json()}\n")

if __name__ == "__main__":
    print("=" * 50)
    print("AI Career Path API Test Suite")
    print("=" * 50 + "\n")
    
    try:
        test_health()
        test_predict()
        test_register()
        print("✅ All tests passed!")
    except Exception as e:
        print(f"❌ Error: {e}")
