# backend/train_model.py
import joblib
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
# Load data
iris = load_iris()
X, y = iris.data, iris.target
# Train model
model = RandomForestClassifier()
model.fit(X, y)
# Save model
joblib.dump(model, 'model.pkl')
