'use strict';

import React from 'react';

import Score from './Score';
import Players from './Players';
import Player from './Player';
import Markdown from '../Markdown';


const Calculator = ({text, match, controller}) => {

  return (
    <div>
      <Markdown text={text} />
      <h3>Final Score</h3>
      <Score match={match} controller={controller} />

      <h3>Players</h3>
      <Players>
        {Object.keys(match.teammates).map(playerId =>
             <Player match={match} player={match.teammates[playerId]} controller={controller} key={playerId} /> )}
      </Players>
    </div>
  );
};

Calculator.propTypes = {
  text: React.PropTypes.string.isRequired,
  match: React.PropTypes.object.isRequired,
  controller: React.PropTypes.object.isRequired
};


export default Calculator;

