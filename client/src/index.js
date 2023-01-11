import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

function Home(){
  return (
    <div className="w-screen h-screen bg-black">
      <div className="absolute w-full h-full flex justify-center">
        <img id="homeLogo" className="z-10 absolute" src="homeLogo.png" />
        <div id="motto" className="z-10 absolute text-blue-300 text-center">Guess a random NBA player<br/>based on his <span className="font-bold italic text-yellow-200">stats, age,<br/>team, and more</span></div>
        <div onClick={easy} id="btn1" className="z-10 modeBtn p-3 bg-green-500 rounded-xl text-green-900">Easy</div>
        <div onClick={medium} id="btn2" className="z-10 modeBtn p-3 bg-yellow-500 rounded-xl text-yellow-800">Medium</div>
        <div onClick={hard} id="btn3" className="z-10 modeBtn p-3 bg-red-500 rounded-xl text-red-900">Hard</div>
        <img id="courtPic" className="opacity-20 object-cover" src="https://wallup.net/wp-content/uploads/2019/09/158384-oklahoma-city-thunder-basketball-nba-gp.jpg"></img>
      </div>
    </div>
  );
}

function easy(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App mode="Easy" />
    </React.StrictMode>
  );
}

function medium(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App mode="Medium" />
    </React.StrictMode>
  );
}

function hard(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App mode="Hard" />
    </React.StrictMode>
  );
}

export default Home;
