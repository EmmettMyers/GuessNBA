import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './style/Game.css';
import Home from './index';

function App(game) {

  function newGame(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App mode={game.mode} />
      </React.StrictMode>
    );
  }

  function goHome(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    );
  }

  const [seeHints, setSeeHints] = useState([]);
  const [hideHints, setHideHints] = useState([]);
  const [player, setPlayer] = useState("");
  const [guesses, setGuesses] = useState([]);

  function enterGuess(){
    var guess = document.getElementById('typeName').value;
    if (guess == player){
      const endBox = ReactDOM.createRoot(document.getElementById('insertEnd'));
      endBox.render(
        <React.StrictMode>
          <WinBox />
        </React.StrictMode>
      );
    }
    else {
      setGuesses(guesses => [...guesses, [guess]]);
      document.getElementById('typeName').value = '';
    }
  }

  function getHint(){
    if (hideHints.length != 0){
      setSeeHints(seeHints => [...seeHints, [hideHints[0][0], hideHints[0][1]]]);
      setHideHints((hideHints) => hideHints.filter((_, index) => index !== 0));
    }
  }

  function endGame(){
    const endBox = ReactDOM.createRoot(document.getElementById('insertEnd'));
    endBox.render(
      <React.StrictMode>
        <LoseBox />
      </React.StrictMode>
    );
  }

  function WinBox() {
    return (
      <div className="endGameBox absolute w-full">
        <div className="flex justify-center">
          <div id="winTxt1" className="z-10 absolute top-3 text-white font-bold">You are <span className="text-green-400 italic font-black">correct!</span></div>
          <div id="winTxt2" className="z-10 absolute top-14 text-yellow-200">The player is...</div>
          <div id="winTxt3" className="z-10 absolute text-yellow-400 font-bold leading-tight text-center pb-20">{player}</div>
          <div id="winTxt4" className="z-10 bottom-32 absolute text-white font-bold text-center">You guessed it in <span className="text-green-400 italic font-black">{guesses.length + 1}</span> tries,<br></br>
          and used <span className="text-green-400 italic font-black">{seeHints.length - 3}</span> hints!</div>
          <div onClick={newGame} className="againBtn z-10 absolute bottom-12 text-center bg-green-500 text-green-900 font-bold rounded-xl p-2">Play Again</div>
          <div className="absolute w-full h-full bg-black opacity-90"></div>
        </div>
      </div>
    );
  }

  function LoseBox() {
    return (
      <div className="endGameBox absolute w-full">
        <div className="flex justify-center">
          <div id="loseTxt1" className="z-10 absolute top-5 text-red-300 font-bold leading-tight">You gave up<br></br>after <span className="text-red-500 italic font-black">{guesses.length}</span> tries.</div>
          <div id="loseTxt2" className="z-10 absolute top-32 text-yellow-200">The correct player was...</div>
          <div id="winTxt3" className="z-10 absolute text-yellow-400 font-bold leading-tight text-center">{player}</div>
          <div onClick={newGame} className="againBtn z-10 absolute bottom-12 text-center bg-green-500 text-green-900 font-bold rounded-xl p-2">Try Again</div>
          <div className="absolute w-full h-full bg-black opacity-90"></div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (game.mode == "Easy"){
      fetch("/easy").then((res) =>
        res.json().then((data) => {
          setSeeHints([data[0], data[1], data[2]]);
          setHideHints([data[3], data[4], data[5]]);
          setPlayer(data[6][1]);
          setTimeout(function(){
            ReactDOM.createRoot(document.getElementById('spinnerHolder')).render();
          }, 1000);
        })
      );
    }
    else if (game.mode == "Medium"){
      fetch("/medium").then((res) =>
        res.json().then((data) => {
          setSeeHints([data[0], data[1], data[2]]);
          setHideHints([data[3], data[4], data[5]]);
          setPlayer(data[6][1]);
          setTimeout(function(){
            ReactDOM.createRoot(document.getElementById('spinnerHolder')).render();
          }, 1000);
        })
      );
    }
    else {
      fetch("/hard").then((res) =>
        res.json().then((data) => {
          setSeeHints([data[0], data[1], data[2]]);
          setHideHints([data[3], data[4], data[5]]);
          setPlayer(data[6][1]);
          setTimeout(function(){
            ReactDOM.createRoot(document.getElementById('spinnerHolder')).render();
          }, 1000);
        })
      );
    }
  }, []);

  return (
    <div className="w-screen h-screen">

      <div id="navBar" className="w-full bg-red-900 flex justify-between">
        <img id="navLogo" onClick={goHome}  src="homeLogo.png" />
        <div id="modeTitle" className="pr-4 mt-3 text-white font-bold">{game.mode}</div>
      </div>

      <div id="spinnerHolder" role="status">
        <svg aria-hidden="true" id="spinner" className="w-28 h-28 mr-2 animate-spin dark:text-blue-200 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <div className="w-screen h-screen bg-blue-900"></div>
      </div>

      <div id="insertEnd"></div>

      <div className="flex justify-evenly mt-5">
        <form className="flex">
          <input autoComplete="off" id="typeName" className="rounded-l p-2 pl-3" type="text" name="name" />
          <div id="nameBtn" onClick={enterGuess} className="cursor-pointer bg-green-500 text-green-900 font-bold rounded-r p-2 pl-4 pr-4">Enter</div>
        </form>
      </div>

      <div id="statguessHolder" className="flex justify-evenly">
        <div id="statBox">
          {seeHints.map(stats => <SeeStat name={stats[0]} num={stats[1]}/>)}
          {hideHints.map(stats => <HideStat name={stats[0]} num={stats[1]}/>)}
        </div>
        <div id="guessBox" className="rounded-md bg-zinc-900 mt-5">
          <div id="guessTitle" className="w-full bg-zinc-400 rounded-t-md text-center p-2">Guesses ({guesses.length})</div>
          <div id="guessHolder">
            {guesses.map(guess => <Guess name={guess}/>)}
          </div>
        </div>
      </div>

      <div id="btnHolder" className="flex justify-evenly mt-5">
        <div id="hintBtn" onClick={getHint} className="cursor-pointer p-4 bg-yellow-500 rounded-xl font-bold text-yellow-800">Get Hint</div>
        <div id="endBtn" onClick={endGame} className="cursor-pointer p-4 bg-red-500 rounded-xl font-bold text-red-900">Give Up</div>
      </div>

    </div>
  );
}

function SeeStat(stat) {
  return (
    <div id="statHolder" className="flex bg-zinc-100 rounded-md mt-5">
      <div id="statName" className="rounded-l-md font-bold bg-zinc-400 pt-2.5 pl-3 pr-3">{stat.name}</div>
      <div id="statNum" className="text-center p-2 pr-5">{stat.num}</div>
    </div>
  );
}

function HideStat(stat) {
  return (
    <div id="statHolder" className="flex bg-fuchsia-600 rounded-md mt-5">
      <div id="statName" className="rounded-l-md font-bold bg-fuchsia-400 pt-2.5 pl-3 pr-3">{stat.name}</div>
      <div id="statNum" className="text-center p-2 pr-5 font-bold text-yellow-300">&nbsp;???</div>
    </div>
  );
}

function Guess(player) {
  return (
    <div id="guessPlayer" className="w-full border-2 border-zinc-300 bg-white text-center p-2">{player.name}</div>
  );
}

export default App;

