from flask import Flask

try:
    from flask_pymongo import PyMongo
except ImportError:
    import os
    os.system("pip install Flask-PyMongo")
    from flask_pymongo import PyMongo


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase" # Replace with your MongoDB connection string
mongo = PyMongo()
mongo.init_app(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'
