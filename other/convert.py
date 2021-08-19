import pandas as pd
workbook = pd.read_excel('items.xlsx')

f = open('items.json', 'w')
f.write(workbook.to_json(orient='records'))
f.close()
