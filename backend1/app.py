from flask import Flask, request, jsonify,send_file,render_template
from flask_cors import CORS
import joblib
import os
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
model = joblib.load('model.pkl')
from sklearn.datasets import load_iris
iris_data=load_iris()
iris_target_names = iris_data['target_names']
# @app.route('/download')
@app.route('/download', methods=['GET'])
def download_file():
    file_path = 'example.txt'
    try:
        return send_file(file_path, as_attachment=True)
    except FileNotFoundError:
        return jsonify({'error': 'File not found.'}), 404
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    if data and 'features' in data:
        features = data['features']
        try:
            prediction = model.predict([features])[0]
            flower_name = iris_data.target_names[prediction]
            return jsonify({'prediction': flower_name})
        except ValueError:
            return jsonify({'error': 'Invalid input data. Please provide valid features.'}), 400
    else:
        return jsonify({'error': 'Invalid request. Please provide features in JSON format.'}), 400
@app.route('/add', methods=['POST'])
def predict1():
    data = request.json
    if data and 'add' in data:
        features = data['add']

        try:
            result=eval(features)
            return jsonify({'addResult': result})
        except ValueError:
            return jsonify({'error': 'Invalid input data. Please provide valid features.'}), 400
    else:
        return jsonify({'error': 'Invalid request. Please provide features in JSON format.'}), 400
if __name__ == '__main__':
    app.run(debug=True)





