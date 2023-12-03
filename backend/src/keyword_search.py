from src.db_utils import *

def keyword_search(keyword, table):
    keyword = keyword.lower()

    columns_query = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'recruitment' AND TABLE_NAME = '{0}'".format(table)
    df = execute_query(columns_query)

    columns = []
    for index, row in df.iterrows():
        columns.append(row[0])

    query = "SELECT * FROM {0} WHERE ".format(table)
    for i in range(len(columns)):
        if (i == len(columns) - 1):
            query_to_add = "LOWER({0}) LIKE '%{1}%'".format(columns[i], keyword) 
        else:
            query_to_add = "LOWER({0}) LIKE '%{1}%' OR ".format(columns[i], keyword) 
        query = query + query_to_add 
    
    return_df = execute_query(query)
    # print(return_df)
    return return_df

# keyword_search("Mkt&Fin", "Grad_Student")