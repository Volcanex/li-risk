from flask import Flask, request
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"  # Replace with your MongoDB connection string
mongo = PyMongo(app)


@app.route('/')
def hello_world():
    return 'Flask server running!'


@app.route('/create-database', methods=['POST'])
def create_database():
    db_list = mongo.db.list_collection_names()
    if "svg_collection" in db_list:
        print("Database already exists")
    else:
        mongo.db.create_collection("svg_collection")
        print("Database created")

@app.route('/upload-svg', methods=['POST'])
def upload_svg():
    if 'file' in request.files:
        svg_file = request.files['file']
        svg_data = svg_file.read()
        mongo.db.svg_collection.insert_one({'svg_data': svg_data})
        return 'SVG file uploaded successfully'
    elif 'svg_data' in request.json:
        svg_data = request.json['svg_data']
        mongo.db.svg_collection.insert_one({'svg_data': svg_data})
        return 'SVG data uploaded successfully'
    else:
        return 'No SVG file or data found', 400


if __name__ == '__main__':
    app.run()
