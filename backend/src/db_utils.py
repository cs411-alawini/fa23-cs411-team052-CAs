import mysql.connector
from google.cloud import secretmanager
import os
import pandas as pd

# set the path to service account key JSON file
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "../fa23-cs411-team052-cas-c5f200821605.json"

def get_db_connection():
    project_id = "fa23-cs411-team052-cas"
    secret_name = "db_connect"
    database_name = "recruitment"

    # secret manager client
    client = secretmanager.SecretManagerServiceClient()

    # access the secret
    name = f"projects/{project_id}/secrets/{secret_name}/versions/latest"
    response = client.access_secret_version(name=name)
    secret_payload = response.payload.data.decode("UTF-8")

    # parse the secret payload
    connection_params = secret_payload.split("\n")
    user = connection_params[0]
    password = connection_params[1]
    host = connection_params[2]

    # create a connection to Cloud SQL instance
    cnx = mysql.connector.connect(
        host = host,
        port = 3306,
        user = user,
        password = password,
        database = database_name
    )

    # return the connection
    return cnx

def execute_query(query):
    cnx = get_db_connection()
    cursor = cnx.cursor()
    cursor.execute(query)
    df = pd.DataFrame(cursor.fetchall())

    # close the cursor and cnx
    cursor.close()
    cnx.close()

    return df