import requests
from bs4 import BeautifulSoup

url = "https://www.basketball-reference.com/leagues/NBA_2023_per_game.html"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

players = soup.find_all(class_="full_table")
print(len(players))