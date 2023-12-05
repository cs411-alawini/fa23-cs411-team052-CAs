import math
import pandas as pd
from src.db_utils import execute_query

def classifyAPointAndUpdateDB(hsc_percent, ssc_percent, degree_percent, grad_percent, k=10):
    # studentid = 1000, status = 'Placed', salary, employability_percent
    query = "SELECT HSC_Percent, SSC_Percent, Degree_Percent, Grad_Percent, Status, Salary, Emp_Percent FROM Student_Profile NATURAL JOIN Grad_Student NATURAL JOIN Predicted_User_Data"
    points = execute_query(query)
    distance = []

    for index, row in points.iterrows():
        # Calculate Euclidean distance
        if grad_percent != 0:
            euclidean_distance = math.sqrt(
                (row[0] - hsc_percent)**2 +
                (row[1] - ssc_percent)**2 +
                (row[2] - degree_percent)**2 +
                (row[3] - grad_percent)**2 
            )
        else:
            euclidean_distance = math.sqrt(
                (row[0] - hsc_percent)**2 +
                (row[1] - ssc_percent)**2 +
                (row[2] - degree_percent)**2
            )
        # Add a tuple of form (distance, status, salary, emp_percent) in the distance list
        distance.append((euclidean_distance, row[4], row[5], row[6]))

    # Sort the distance list in ascending order and select first k distances
    distance = sorted(distance)[:k]

    freq_status = {'Placed': 0, 'Not Placed': 0}
    total_salary = 0
    total_emp_percent = 0

    for d in distance:
        freq_status[d[1]] += 1
        total_salary += d[2]
        total_emp_percent += d[3]

    # Calculate the average salary
    avg_salary = total_salary / k

    # Calculate avg employability percent
    avg_emp_percent = total_emp_percent / k

    # Get the status - Placed/Not Placed
    status = max(freq_status, key=freq_status.get)

    # return the classified status, average salary, and average emp_percent
    return status, avg_salary, avg_emp_percent

# print(classifyAPointAndUpdateDB(91.0, 67.0, 58.0, 58.8, k=3))