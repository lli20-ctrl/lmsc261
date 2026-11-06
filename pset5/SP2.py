import json

data_json = open('ramps.json')
data_dict = json.load(data_json)

for key, value in data_dict.items():
    print(f"{key}'s favorite ramp is {value}")