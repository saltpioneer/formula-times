from urllib.request import urlopen
import json
import pandas as pd

#INITIALIZING LIVE DATA DICTIONARY
live_data = {}

#API FETCHES
driver_response = urlopen("https://api.openf1.org/v1/drivers?session_key=latest")
driver_data = json.loads(driver_response.read().decode('utf-8'))

car_response = urlopen("https://api.openf1.org/v1/car_data?&session_key=latest&speed%3E=300")
car_data = json.loads(car_response.read().decode('utf-8'))

position_response = urlopen("https://api.openf1.org/v1/position?session_key=latest")
position_data = json.loads(position_response.read().decode('utf-8'))

lap_response = urlopen("https://api.openf1.org/v1/laps?session_key=latest")
lap_data = json.loads(lap_response.read().decode('utf-8'))

interval_response = urlopen("https://api.openf1.org/v1/intervals?session_key=latest")
interval_data = json.loads(interval_response.read().decode('utf-8'))

df = pd.DataFrame(driver_data)

        # def jprint(obj):
        #     text = json.dumps(obj, sort_keys=True, indent=4)
        #     print(text)

#DRIVER DATA
for i in range(len(driver_data)):
    name = driver_data[i]['full_name']
    constructor = driver_data[i]['team_name']
    driver_headshot = driver_data[i]['headshot_url']
    driver_number = int(driver_data[i]['driver_number'])
    driver_country = driver_data[i]['country_code']

    live_data.update({
        driver_number:{
            'name':name,
            'constructor':constructor,
            'driver_headshot':driver_headshot,
            'driver_country':driver_country,
            'driver_number':driver_number
        }
    })


#CAR DATA
for i in range(len(car_data)):
    driver_number = car_data[i]['driver_number']
    drs = car_data[i]['drs']
    speed = car_data[i]['speed']
    car_information = {'drs':drs, 'speed':speed}

    for j in live_data:
        if live_data[j]['driver_number'] == driver_number:
            live_data[j].update(car_information)


#POSITION DATA
for i in range(len(position_data)):
    driver_number = position_data[i]['driver_number']
    position = position_data[i]['position']
    position_information = {'position':int(position)}

    for j in live_data:
        if live_data[j]['driver_number'] == driver_number:
            live_data[j].update(position_information)


#LAP DATA
for i in range(len(lap_data)):
    driver_number = lap_data[i]['driver_number']
    lap = lap_data[i]['lap_number']
    lap_information = {'lap':int(lap)}

    for j in live_data:
        if live_data[j]['driver_number'] == driver_number:
            live_data[j].update(lap_information)

#INTERVAL DATA
for i in range(len(interval_data)):
    driver_number = interval_data[i]['driver_number']
    interval = interval_data[i]['interval']
    interval_information = {'interval':interval}

    for j in live_data:
        if live_data[j]['driver_number'] == driver_number:
            live_data[j].update(interval_information)

# Sort the live_data dictionary based on driver position
sorted_live_data_items = sorted(live_data.items(), key=lambda item: item[1]['position'])

# Convert the sorted list of items back to a dictionary to maintain structure, but ordered for output
sorted_live_data = dict(sorted_live_data_items)

for i in sorted_live_data:
  print (f"the key name is {i} and its value is {live_data[i]}")
  print(" ")
  print(type(i))
