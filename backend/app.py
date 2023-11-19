import os
from flask import Flask, request, stream_with_context
import flask
import json
from flask_cors import CORS

app = Flask(__name__, static_url_path='')
CORS(app)
port = int(os.getenv('PORT', 8000))

@app.route('/placement', methods = ['POST'])
def get_placement():
    json_data = request.get_json()
    try:
        GPA = json_data['gpa']
    except Exception as e:
        return flask.Response("KeyError: {0} does not exist. Make sure you have all required fields.".format(e), status = 500)
    
    return {"GPA": GPA, "status": "this will retreive the form info and return the calculated placement of the user + put it in the db"}, 200

@app.route('/test/db', methods = ['POST'])
def test_db_connection():
    json_data = request.get_json()
    try:
        GPA = json_data['gpa']
    except Exception as e:
        return flask.Response("KeyError: {0} does not exist. Make sure you have all required fields.".format(e), status = 500)
    
    return {"GPA": GPA, "status": "this will test the database connection"}, 200

@app.route('/test/server', methods = ['GET'])
def test_server():
    return "Hello World!", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)