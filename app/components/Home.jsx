'use strict';

import React from 'react';

import Markdown from './Markdown';
import Calculator from './Calc/Calculator';

// TODO make footer into its own component for great justice, also for other views
const Home = ({staticText, match, controller, buildMeta}) =>
  <div id="home">
    <Markdown text={staticText.before} />
    <Calculator text={staticText.calculator} match={match} controller={controller} />
      <Markdown text={staticText.after} />
    <footer>
    <p><a id='share-link' href={'#ma=' + btoa(JSON.stringify(match).replace(/=+/, ''))}>share</a></p>
    {(buildMeta && !buildMeta.absent) ?
      <p><a href={buildMeta.build_url}>
        Built from {(buildMeta.commit).slice(0, 12)} at {buildMeta.build_date}
      </a>.</p> :
      <p>No build information available.</p>}
    </footer>
  </div>;

export default Home;
