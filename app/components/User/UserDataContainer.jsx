'use strict';

import React from 'react';

import Head from './Head';
import Info from './Info';
import Games from './Games';
import Game from './Game';

const UserDataContainer = ({userData}) =>
  <div id="user">
    <Head username={userData.user} avatar={userData.avatarfull}/>
    <Info profileUrl={userData.profile} status={userData.status} location={userData.location} >
      <Games>
        {userData.recentGames ? userData.recentGames.map(game => <Game key={game.appid} gameData={game}/>)
                              : <p>All quiet on the Western front...</p>}
      </Games>
    </Info>
  </div>

export default UserDataContainer;