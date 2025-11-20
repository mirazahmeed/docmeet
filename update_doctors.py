import json
import random
import os

file_path = 'src/assets/DoctorsInfo.json'

try:
    with open(file_path, 'r') as f:
        data = json.load(f)

    for doctor in data:
        # Add experience field if it doesn't exist, or update it.
        # The user asked to "add experiance number", I'll use "experience" as the key.
        # Random number between 2 and 15 seems appropriate for years of experience.
        doctor['experience'] = random.randint(2, 15)

    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)
    
    print("Successfully updated DoctorsInfo.json with experience field.")

except Exception as e:
    print(f"Error: {e}")
