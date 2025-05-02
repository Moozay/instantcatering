import requests
import sys
import json
from datetime import datetime

class CateringAPITester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"Response: {response.text}")
                except:
                    pass
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api",
            200
        )

    def test_status_endpoint(self):
        """Test the status endpoint"""
        return self.run_test(
            "Status Endpoint",
            "GET",
            "api/status",
            200
        )
    
    def test_create_status(self):
        """Test creating a status check"""
        client_name = f"test_client_{datetime.now().strftime('%H%M%S')}"
        return self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data={"client_name": client_name}
        )

def main():
    # Get the backend URL from the frontend .env file
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    backend_url = line.strip().split('=')[1]
                    break
    except Exception as e:
        print(f"Error reading backend URL: {str(e)}")
        backend_url = "https://cb118b64-a0dd-470e-b1d5-99b9341e88a8.preview.emergentagent.com"
    
    print(f"Using backend URL: {backend_url}")
    
    # Setup
    tester = CateringAPITester(backend_url)
    
    # Run tests
    tester.test_root_endpoint()
    tester.test_status_endpoint()
    tester.test_create_status()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())