import requests
url = 'http://localhost:5000/api'
# r = requests.post(url,json={'BHK_NO.':1,'POSTED_BY':0,'UNDER_CONSTRUCTION':0,'SQUARE_FT':1300.236407,'City':1})
r = requests.post(url,json={'UNDER_CONSTRUCTION':0,'BHK_NO.':2,'SQUARE_FT':1275,'City':'Bangalore'})
print(r.json())