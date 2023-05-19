from flask import Flask,  request, jsonify

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
    return 'Flask server running!'

@app.route('/upload-svg', methods=['POST'])
def upload_svg():
    svg_file = request.files['file']  # Assumes the file is uploaded with the key 'file'
    svg_data = svg_file.read()  # Read the SVG file data
    mongo.db.svg_collection.insert_one({'svg_data': svg_data})  # Store the SVG data in MongoDB
    return 'SVG file uploaded successfully'

@app.route('/get-svg/<svg_id>', methods=['GET'])
def get_svg(svg_id):
    svg = mongo.db.svg_collection.find_one({'_id': svg_id})
    if svg:
        return jsonify(svg['svg_data'])
    else:
        return 'SVG not found', 404