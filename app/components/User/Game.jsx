'use strict';

import React from 'react';

const Game = ({gameData}) =>
  <div className="game">
    <h4>{gameData.name}</h4>
    <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${gameData.appid}/${gameData.img_logo_url}.jpg`} />
    <ul>
      <li>{gameData.playtime_2weeks} minutes played in past 2 weeks</li>
      <li>{gameData.playtime_forever} minutes played in total</li>
    </ul>
  </div>;

export default Game;
