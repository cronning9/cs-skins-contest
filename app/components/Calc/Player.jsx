'use strict';

import React from 'react';


const Player = ({player}) => {

  // link to Player displays default avatar for now -- will get real avatar from Steam API
  return (
    <tr>
      <td>
          <a href={`/user/${player.name.toLowerCase()}`} className='name'><img src="http://findicons.com/files/icons/1008/quiet/128/steam.png" className="player-avatar"/>
                                                            {player.name}</a>
      </td>
      <td>
        <input className='kills' defaultValue={player.kills} type='number' />
      </td>
      <td>
        <input className='deaths' defaultValue={player.deaths} type='number' />
      </td>
      <td>
        <input className='eligible' defaultValue={player.eligible} type="checkbox" />
      </td>
    </tr>
)};


Player.propTypes = {
  match: React.PropTypes.object.isRequired,
  player: React.PropTypes.object.isRequired,
  controller: React.PropTypes.object.isRequired
};

export default Player;

