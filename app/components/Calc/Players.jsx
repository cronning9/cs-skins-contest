'use strict';

import React from 'react';


export const Players = ({children}) =>
  <div>
    <table className="players-table">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="kills">Kills</th>
          <th className="deaths">Deaths</th>
          <th className="eligible">Eligible</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  </div>;

export default Players;
