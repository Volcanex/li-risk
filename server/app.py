from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase" # Replace with your MongoDB connection string
mongo = PyMongo(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'
