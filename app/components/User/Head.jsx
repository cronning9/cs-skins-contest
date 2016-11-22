'use strict';

import React from 'react';

const Head = ({username, avatar}) =>
    <div id="user-head">
      <h2>{username}</h2>
      <img src={avatar} />
    </div>

export default Head;
