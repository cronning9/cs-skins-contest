'use strict';

import React from 'react';

const Info = ({children, profileUrl, status, location}) =>
  <div id="user-info">
    <ul>
      <li>Steam Profile: <a href={profileUrl}>{profileUrl}</a></li>
      <li>Status: {status}</li>
      <li>Located In: {location}</li>
    </ul>
    <h3>Recently Played Games</h3>
    {children}
  </div>

export default Info;
