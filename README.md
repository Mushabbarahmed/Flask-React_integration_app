# Flask-React_integration_app
An integrated  Sample web application utilizing Flask and React for machine learning predictions and file download.

![image](https://github.com/user-attachments/assets/622a9470-9e3f-4152-95fb-d3af92397cc1)


![image](https://github.com/user-attachments/assets/0e1e59c6-d13b-4b91-bea3-153b91a2326b)

![image](https://github.com/user-attachments/assets/afedfd9a-77b8-4fad-ab67-080d04b0ec90)

Prerequisites
1.	Node.js and npm: Ensure you have Node.js and npm installed.
2.	Python: Ensure you have Python installed.


**Steps to Run the Application
Frontend (React)
1.Navigate to the Project Directory: Create and navigate to your project directory.
  >mkdir FlaskReactIntelligence
  >cd FlaskReactIntelligence
2.Create React App: Initialize a new React app.
  >npx create-react-app frontend
3.Replace the src Directory: Replace the src directory in frontend with your src
  >rm -rf frontend/src
  >cp -r path/to/your/src frontend/
4.Navigate to the Frontend Directory: Navigate to the frontend directory.
  >cd frontend
5.Install Dependencies: Install the necessary npm packages.
  >npm install
6.Start the React App: Start the React development server.
  >npm start


Backend (Flask)
1.Navigate to the Backend Directory: Navigate back to the project root and create a backend directory.
  >cd ..
  >mkdir backend
  >cd backend
2.Create and Activate a Virtual Environment: Set up a virtual environment.
  >python -m venv venv
  >source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
3.Install Dependencies: Install the required Python packages.
  >pip install flask flask-cors joblib scikit-learn
4.Add Your Flask App Files: Add your Flask application code (app.py, model.pkl, etc.) to the backend directory.
5*Run the Flask App: Start the Flask server.
  >>python app.py**
