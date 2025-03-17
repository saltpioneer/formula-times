from urllib.request import urlopen
import json
import pandas as pd

"""response = urlopen("https://api.openf1.org/v1/drivers?driver_number=44&session_key=latest")"""
response = urlopen("https://api.openf1.org/v1/drivers?session_key=latest")
data = json.loads(response.read().decode('utf-8'))
df = pd.DataFrame(data)
print(data)
print('_________________')
print(df)
print('_________________')
print('_________________')

def jprint(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)

jprint(data)
