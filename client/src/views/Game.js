import React, { useState, useEffect } from "react";
import '../style/Game.css';
import EndGame from "./EndGame";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import SeeStat from "../components/SeeStat";
import HideStat from "../components/HideStat";
import Guess from "../components/Guess";

const Game = (game) => {
    const [seeHints, setSeeHints] = useState([]);
    const [hideHints, setHideHints] = useState([]);
    const [player, setPlayer] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [gameDone, setGameDone] = useState(false);
    const [won, setWon] = useState(false);
    const [loading, setLoading] = useState(true);

    function enterGuess() {
        var guess = document.getElementById('typeName').value;
        if (guess == player) {
            setWon(true);
            setGameDone(true);
        }
        else {
            setGuesses(guesses => [...guesses, [guess]]);
            document.getElementById('typeName').value = '';
        }
    }

    function getHint() {
        if (hideHints.length != 0) {
            setSeeHints(seeHints => [...seeHints, [hideHints[0][0], hideHints[0][1]]]);
            setHideHints((hideHints) => hideHints.filter((_, index) => index !== 0));
        }
    }

    useEffect(() => {
        fetch(`/${game.mode}`).then((res) =>
            res.json().then((data) => {
                setSeeHints([data[0], data[1], data[2]]);
                setHideHints([data[3], data[4], data[5]]);
                setPlayer(data[6][1]);
                setTimeout(function () {
                    setLoading(false);
                }, 1000);
            })
        );
    }, []);

    return (
        <div className="w-screen h-screen">
            <Navbar game={game} />
            {loading && <Spinner />}
            {gameDone && 
                <EndGame 
                    won={won} 
                    game={game} 
                    player={player} 
                    guesses={guesses} 
                    hints={seeHints.length - 3} 
                />
            }
            <div className="inputHolder flex justify-evenly mt-5">
                <form className="flex">
                    <input autoComplete="off" id="typeName" className="rounded-l p-2 pl-3" type="text" name="name" />
                    <div 
                        id="nameBtn" 
                        onClick={enterGuess} 
                        className="cursor-pointer bg-green-500 text-green-900 font-bold rounded-r p-2 pl-4 pr-4">
                            Enter
                    </div>
                </form>
            </div>
            <div id="statguessHolder" className="flex justify-evenly">
                <div id="statBox">
                    {seeHints.map(stats => <SeeStat name={stats[0]} num={stats[1]} />)}
                    {hideHints.map(stats => <HideStat name={stats[0]} num={stats[1]} />)}
                </div>
                <div id="guessBox" className="rounded-md bg-zinc-900 mt-5">
                    <div id="guessTitle" className="w-full bg-zinc-400 rounded-t-md text-center p-2">
                        Guesses ({guesses.length})
                    </div>
                    <div id="guessHolder">
                        {guesses.map(guess => <Guess name={guess} />)}
                    </div>
                </div>
            </div>
            <div id="btnHolder" className="flex justify-evenly mt-5">
                <div 
                    id="hintBtn" 
                    onClick={getHint} 
                    className="cursor-pointer p-4 bg-yellow-500 rounded-xl font-bold text-yellow-800">
                        Get Hint
                </div>
                <div 
                    id="endBtn" 
                    onClick={() => setGameDone(true)} 
                    className="cursor-pointer p-4 bg-red-500 rounded-xl font-bold text-red-900">
                        Give Up
                </div>
            </div>
        </div>
    );
}

export default Game;

