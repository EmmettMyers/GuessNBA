import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Game from './views/Game';
import Home from './views/Home';

const setPage = (page, difficulty) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  if (page == 'home'){
    root.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    );
  } else if (page == 'game'){
    root.render(
      <React.StrictMode>
        <Game mode={difficulty} />
      </React.StrictMode>
    );
  }
}

setPage('home');

export default setPage;
