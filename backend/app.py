import os
from flask import Flask, request, jsonify
import flask
import json
from flask_cors import CORS
from src.db_utils import *
from src.keyword_search import *
import numpy as np
from src.placement import *
from src.user_utils import *

app = Flask(__name__, static_url_path='')
CORS(app)
port = int(os.getenv('PORT', 8000))

@app.route('/placement', methods = ['POST'])
def get_placement():
    json_data = request.get_json()
    try:
        PASSWORD = json_data['password']
        EMAIL = json_data['email']
        NAME = json_data['name']
        HSC_PERCENT = json_data['hsc_percent']
        HSC_SUBJECT = json_data['hsc_subject']
        SSC_PERCENT = json_data['ssc_percent']
        WORK_EXP = json_data['work_exp']
        UNDERGRAD_DEGREE = json_data['undergrad_degree']
        GENDER = json_data['gender']
        DEGREE_PERCENT = json_data['degree_percent']
        GRAD_PERCENT = json_data['grad_percent']
        GRAD_DEGREE = json_data['grad_degree']
    except Exception as e:
        return flask.Response("KeyError: {0} does not exist. Make sure you have all required fields.".format(e), status = 500)
    
    # calculate user_id for user
    USER_ID = calculate_user_id(EMAIL)
    
    # insert user into User_Profile, Student_Profile, and Grad_Student (if applicable)
    if (user_exists(USER_ID) == False):
        insert_user(USER_ID, PASSWORD, EMAIL, NAME, HSC_PERCENT, HSC_SUBJECT, SSC_PERCENT, WORK_EXP, UNDERGRAD_DEGREE, GENDER, DEGREE_PERCENT, GRAD_PERCENT, GRAD_DEGREE)

    if (len(GRAD_DEGREE) != 0): # pass in grad percent
        tuple = classifyAPointAndUpdateDB(float(HSC_PERCENT), float(SSC_PERCENT), float(DEGREE_PERCENT), float(GRAD_PERCENT))
    else: # pass in grad percent as 0
        tuple = classifyAPointAndUpdateDB(float(HSC_PERCENT), float(SSC_PERCENT), float(DEGREE_PERCENT), 0.0)

    # insert calculated user placement data into database
    update_placement_info(USER_ID, tuple)

    # return calculated user placement data to display on frontend
    json_data = json.dumps(tuple)
    return json_data, 200

# keyword search endpoint
@app.route('/search', methods = ['POST'])
def get_keyword_search():
    json_data = request.get_json()
    try:
        KEYWORD = json_data['keyword']
        TABLE = json_data['table']
    except Exception as e:
        return flask.Response("KeyError: {0} does not exist. Make sure you have all required fields.".format(e), status = 500)
    
    df = keyword_search(KEYWORD, TABLE)
    rows = df.to_dict(orient='records')
        
    return jsonify({'rows': rows}), 200

@app.route('/delete', methods = ['POST'])
def delete_user_profile():
    json_data = request.get_json()
    try:
        USER_ID = json_data['user_id']
    except Exception as e:
        return flask.Response("KeyError: {0} does not exist. Make sure you have all required fields.".format(e), status = 500)
    
    delete_user(USER_ID)
    return {"status": "delete user {0} successful".format(USER_ID)}, 200
    
####################################################################################
@app.route('/test/db', methods = ['POST'])
def test_db_connection():
    CURRENT_DATE = execute_query("SELECT CURDATE()")[0][0]
    return  {"status": "success", "current date": CURRENT_DATE}, 200

@app.route('/test/server', methods = ['GET'])
def test_server():
    return "Hello World!", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)