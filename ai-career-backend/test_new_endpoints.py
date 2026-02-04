#!/usr/bin/env python3
"""Test new backend endpoints for authentication, demo, and pricing"""

import requests
import json

BASE_URL = 'http://localhost:5000'

def test_auth_endpoints():
    print("\n" + "="*60)
    print("TESTING AUTHENTICATION ENDPOINTS")
    print("="*60)
    
    # Test signup
    print("\n1. Testing /auth/signup")
    signup_data = {
        'email': 'user@example.com',
        'password': 'password123',
        'fullName': 'John Doe'
    }
    response = requests.post(f'{BASE_URL}/auth/signup', json=signup_data)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    
    # Test login
    print("\n2. Testing /auth/login")
    login_data = {
        'email': 'user@example.com',
        'password': 'password123'
    }
    response = requests.post(f'{BASE_URL}/auth/login', json=login_data)
    print(f"Status: {response.status_code}")
    result = response.json()
    print(f"Response: {json.dumps(result, indent=2)}")
    
    if 'user' in result:
        user_id = result['user']['id']
        return user_id
    return None

def test_demo_endpoints():
    print("\n" + "="*60)
    print("TESTING DEMO CONTENT ENDPOINTS")
    print("="*60)
    
    # Test videos
    print("\n1. Testing /demo/videos")
    response = requests.get(f'{BASE_URL}/demo/videos')
    print(f"Status: {response.status_code}")
    result = response.json()
    print(f"Videos available: {len(result.get('videos', []))}")
    for video in result.get('videos', []):
        print(f"  - {video['title']} ({video['duration']})")
    
    # Test testimonials
    print("\n2. Testing /demo/testimonials")
    response = requests.get(f'{BASE_URL}/demo/testimonials')
    print(f"Status: {response.status_code}")
    result = response.json()
    print(f"Testimonials available: {len(result.get('testimonials', []))}")
    for testimonial in result.get('testimonials', []):
        print(f"  - {testimonial['name']}: {testimonial['role']}")

def test_pricing_endpoints():
    print("\n" + "="*60)
    print("TESTING PRICING ENDPOINTS")
    print("="*60)
    
    # Test pricing plans
    print("\n1. Testing /pricing/plans")
    response = requests.get(f'{BASE_URL}/pricing/plans')
    print(f"Status: {response.status_code}")
    result = response.json()
    print(f"Pricing plans available: {len(result.get('plans', []))}")
    for plan in result.get('plans', []):
        print(f"  - {plan['name']}: ${plan['price']}/{plan['period']}")
        print(f"    Features: {len(plan['features'])}")
    
    # Test FAQ
    print("\n2. Testing /pricing/faq")
    response = requests.get(f'{BASE_URL}/pricing/faq')
    print(f"Status: {response.status_code}")
    result = response.json()
    print(f"FAQ items available: {len(result.get('faqs', []))}")
    for faq in result.get('faqs', []):
        print(f"  - {faq['question']}")

def test_user_endpoints(user_id):
    print("\n" + "="*60)
    print("TESTING USER ENDPOINTS")
    print("="*60)
    
    if not user_id:
        print("Skipping user tests - no user_id available")
        return
    
    # Test get profile
    print(f"\n1. Testing /user/profile/{user_id}")
    response = requests.get(f'{BASE_URL}/user/profile/{user_id}')
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    
    # Test upgrade plan
    print("\n2. Testing /user/upgrade")
    upgrade_data = {
        'email': 'user@example.com',
        'plan': 'pro'
    }
    response = requests.post(f'{BASE_URL}/user/upgrade', json=upgrade_data)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")

if __name__ == '__main__':
    print("\n" + "="*60)
    print("CAREERAPI BACKEND ENDPOINTS TEST SUITE")
    print("="*60)
    
    try:
        user_id = test_auth_endpoints()
        test_demo_endpoints()
        test_pricing_endpoints()
        test_user_endpoints(user_id)
        
        print("\n" + "="*60)
        print("ALL TESTS COMPLETED!")
        print("="*60 + "\n")
        
    except requests.exceptions.ConnectionError:
        print("\n❌ ERROR: Could not connect to backend!")
        print("Make sure the Flask server is running on http://localhost:5000")
    except Exception as e:
        print(f"\n❌ ERROR: {str(e)}")
