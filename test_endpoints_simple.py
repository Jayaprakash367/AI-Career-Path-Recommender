#!/usr/bin/env python3
"""Simple test for new endpoints"""

import json
import urllib.request
import urllib.error

BASE_URL = 'http://127.0.0.1:5000'

def test_endpoint(method, path, data=None):
    """Test an endpoint"""
    url = f'{BASE_URL}{path}'
    print(f"\n📡 Testing: {method} {path}")
    print(f"URL: {url}")
    
    try:
        if method == 'POST':
            req = urllib.request.Request(
                url,
                data=json.dumps(data).encode('utf-8'),
                headers={'Content-Type': 'application/json'},
                method='POST'
            )
        else:
            req = urllib.request.Request(url, method='GET')
        
        with urllib.request.urlopen(req, timeout=5) as response:
            result = json.loads(response.read().decode())
            print(f"✅ Status: {response.status}")
            print(f"✅ Response: {json.dumps(result, indent=2)}")
            return result
    except urllib.error.URLError as e:
        print(f"❌ Error: {e}")
        return None
    except Exception as e:
        print(f"❌ Error: {type(e).__name__}: {e}")
        return None

# Test all endpoints
print("=" * 60)
print("🧪 TESTING NEW BACKEND ENDPOINTS")
print("=" * 60)

# Demo endpoints
print("\n\n" + "=" * 60)
print("📹 DEMO ENDPOINTS")
print("=" * 60)
test_endpoint('GET', '/demo/videos')
test_endpoint('GET', '/demo/testimonials')

# Pricing endpoints
print("\n\n" + "=" * 60)
print("💰 PRICING ENDPOINTS")
print("=" * 60)
test_endpoint('GET', '/pricing/plans')
test_endpoint('GET', '/pricing/faq')

# Auth endpoints
print("\n\n" + "=" * 60)
print("🔐 AUTHENTICATION ENDPOINTS")
print("=" * 60)

signup_result = test_endpoint('POST', '/auth/signup', {
    'email': 'test@example.com',
    'password': 'password123',
    'fullName': 'Test User'
})

if signup_result and 'userId' in signup_result:
    user_id = signup_result['userId']
    print(f"\n✅ Signup successful! User ID: {user_id}")
    
    # Test login
    test_endpoint('POST', '/auth/login', {
        'email': 'test@example.com',
        'password': 'password123'
    })
    
    # Test profile
    test_endpoint('GET', f'/user/profile/{user_id}')

# Upgrade
print("\n\n" + "=" * 60)
print("👤 USER ENDPOINTS")
print("=" * 60)
test_endpoint('POST', '/user/upgrade', {
    'email': 'test@example.com',
    'plan': 'pro'
})

print("\n\n✅ All tests completed!")
