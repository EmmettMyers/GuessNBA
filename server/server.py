from flask import Flask
import requests
from bs4 import BeautifulSoup
from random import *

app = Flask(__name__, static_url_path='', static_folder='client/build')

@app.route('/easy')
def getEasyPlayer():
    url = "https://www.basketball-reference.com/leagues/NBA_2023_per_game.html"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    selectedPlayers = []
    allPlayers = soup.find_all(class_="full_table")
    for player in allPlayers:
        if float(player.find(attrs={"data-stat" : "pts_per_g"}).text) >= 20:
            selectedPlayers.append(player)
    player = selectedPlayers[randint(0, len(selectedPlayers) - 1)]

    name = player.find(attrs={"data-stat" : "player"}).text
    age = player.find(attrs={"data-stat" : "age"}).text
    pos = player.find(attrs={"data-stat" : "pos"}).text
    team = player.find(attrs={"data-stat" : "team_id"}).text
    ppg = player.find(attrs={"data-stat" : "pts_per_g"}).text
    rpg = player.find(attrs={"data-stat" : "trb_per_g"}).text
    apg = player.find(attrs={"data-stat" : "ast_per_g"}).text

    return [["PPG:",ppg], 
            ["RPG:",rpg], 
            ["APG:",apg], 
            ["POS:",pos], 
            ["Age:",age],
            ["Team:",team],
            ["Name:",name]]

@app.route('/medium')
def getMediumPlayer():
    url = "https://www.basketball-reference.com/leagues/NBA_2023_per_game.html"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    selectedPlayers = []
    allPlayers = soup.find_all(class_="full_table")
    for player in allPlayers:
        if float(player.find(attrs={"data-stat" : "pts_per_g"}).text) >= 16:
            selectedPlayers.append(player)
    player = selectedPlayers[randint(0, len(selectedPlayers) - 1)]

    name = player.find(attrs={"data-stat" : "player"}).text
    age = player.find(attrs={"data-stat" : "age"}).text
    pos = player.find(attrs={"data-stat" : "pos"}).text
    team = player.find(attrs={"data-stat" : "team_id"}).text
    ppg = player.find(attrs={"data-stat" : "pts_per_g"}).text
    rpg = player.find(attrs={"data-stat" : "trb_per_g"}).text
    apg = player.find(attrs={"data-stat" : "ast_per_g"}).text

    return [["PPG:",ppg],
            ["RPG:",rpg],
            ["APG:",apg],
            ["POS:",pos],
            ["Age:",age],
            ["Team:",team],
            ["Name:",name]]

@app.route('/hard')
def getHardPlayer():
    url = "https://www.basketball-reference.com/leagues/NBA_2023_per_game.html"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    selectedPlayers = []
    allPlayers = soup.find_all(class_="full_table")
    for player in allPlayers:
        if float(player.find(attrs={"data-stat" : "pts_per_g"}).text) >= 12:
            selectedPlayers.append(player)
    player = selectedPlayers[randint(0, len(selectedPlayers) - 1)]

    name = player.find(attrs={"data-stat" : "player"}).text
    age = player.find(attrs={"data-stat" : "age"}).text
    pos = player.find(attrs={"data-stat" : "pos"}).text
    team = player.find(attrs={"data-stat" : "team_id"}).text
    ppg = player.find(attrs={"data-stat" : "pts_per_g"}).text
    apg = player.find(attrs={"data-stat" : "ast_per_g"}).text
    fgPct = player.find(attrs={"data-stat" : "fg_pct"}).text

    return [["PPG:",ppg], 
            ["FG%:",fgPct],
            ["POS:",pos], 
            ["Age:",age], 
            ["APG:",apg], 
            ["Team:",team],
            ["Name:",name]]

# Running app
if __name__ == '__main__':
    app.run(debug=True)