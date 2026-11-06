import json

data_json = open('skaters.json')
data_dict = json.load(data_json)

for person in data_dict: 
    name = person.get("name")
    age = person.get("age")
    is_experienced = person.get("is_experienced")
    
    if age >= 13 and is_experienced:
        print(f"Hi {name}, welcome to the skate park!")