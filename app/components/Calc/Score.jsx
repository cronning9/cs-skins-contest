'use strict'

import React from 'react';

const Score = ({match, controller}) => (
  <p>
    Us: <input id='us' type='number' defaultValue={match.ourScore} min='0' max='15'
               onChange={({target}) => controller.setOurScore(+target.value)} />
    Them: <input id='them' type='number' defaultValue={match.theirScore} min='0' max='15'
                 onChange={({target}) => controller.setTheirScore(+target.value)} />
  </p>
);

Score.propTypes = {
  match: React.PropTypes.object.isRequired,
  controller: React.PropTypes.object.isRequired
};

export default Score;
