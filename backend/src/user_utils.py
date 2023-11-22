from db_utils import *

# TODO: create more functions after calculating placement to insert that user data into according tables

# after an undergrad user creates a user profile, we also need to insert into student profile
def student_profile_trigger(student_id, hsc_percent, hsc_subject, ssc_percent, work_exp, undergrad_degree, gender, degree_percent):
    # student_id = user_id
    trigger_query = """ 
        CREATE TRIGGER UpdateAfterInsert
        AFTER INSERT ON User_Info
        FOR EACH ROW
        BEGIN 
            IF NOT EXISTS (SELECT 1 FROM Student_Profile WHERE StudentId = {0}) THEN
                INSERT INTO Student_Profile (StudentId, HSC_Percent, HSC_Subject, SSC_Percent, Sector_Pref, Work_Exp, Undergrad_Degree, Gender, Degree_Percent)
                VALUES ({1}, {2}, '{3}', {4}, NULL, '{5}', '{6}', '{7}', {8});
            END IF;
        END;
    """.format(student_id, student_id, hsc_percent, hsc_subject, ssc_percent, work_exp, undergrad_degree, gender, degree_percent)

    execute_query(trigger_query)
    return

# if a grad student creates a profile, we also need to insert into grad student
def grad_profile_trigger(student_id, grad_percent, grad_degree):
    # student_id = user_id
    trigger_query = """ 
        CREATE TRIGGER UpdateAfterInsertGrad
        AFTER INSERT ON User_Info
        FOR EACH ROW
        BEGIN 
            INSERT INTO Grad_Student (StudentId, Grad_Percent, Grad_Degree) 
            VALUES ({0}, {1}, '{2}');
        END;
    """.format(student_id, grad_percent, grad_degree)

    execute_query(trigger_query)
    return

def insert_user(user_id, password, email, name, hsc_percent, hsc_subject, ssc_percent, work_exp, undergrad_degree, gender, degree_percent, grad_percent, grad_degree):
    query = "INSERT INTO User_Info (UserId, Password, Email, Name) VALUES ({0}, '{1}', '{2}', '{3}');".format(user_id, password, email, name)
    
    student_profile_trigger(user_id, hsc_percent, hsc_subject, ssc_percent, work_exp, undergrad_degree, gender, degree_percent)
    
    if len(grad_degree) != 0:
        grad_profile_trigger(user_id, grad_percent, grad_degree)

    execute_query(query)
    execute_query("DROP TRIGGER UpdateAfterInsert")
    execute_query("DROP TRIGGER UpdateAfterInsertGrad")

    return

def delete_user(user_id):
    query1 = "DELETE FROM Grad_Student WHERE StudentId = {0}".format(user_id)
    query2 = "DELETE FROM Student_Profile WHERE StudentId = {0}".format(user_id)
    query3 = "DELETE FROM Placement WHERE StudentId = {0}".format(user_id)
    query4 = "DELETE FROM Predicted_User_Data WHERE StudentId = {0}".format(user_id)
    query5 = "DELETE FROM Final_Output WHERE StudentId = {0}".format(user_id)
    query6 = "DELETE FROM User_Info WHERE UserId = {0}".format(user_id)

    execute_query(query1)
    execute_query(query2)
    execute_query(query3)
    execute_query(query4)
    execute_query(query5)
    execute_query(query6)

    return

# insert_user(1000, "alskdfjlk", "johndoe@gmail.com", "John Doe", 47, "Engineering", 100, "TRUE", "Engineering", "M", 100, 100, "Engineering")
# print(execute_query("SELECT * FROM User_Info"))
# delete_user(1000)
