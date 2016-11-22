'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './app';

import style from './assets/style.scss';
import text from './assets/text.js';
import dummyData from './assets/dummy-data.json';
import buildMeta from '../.build-meta.json';

// This normally reads from our data model. However, I have stripped out the data model and any references
// to it in order to protect the project commissioner's intellectual property. All data fed into
// controller is static -- see const dummyData
class Controller {
  constructor(renderTarget = null) {
    this.renderTarget_ = renderTarget || document.createElement('wfs-app');
    this.render_();
  }

  render_() {
    this.component_ = ReactDOM.render(
        <AppContainer staticText={text} controller={this} match={dummyData} buildMeta={buildMeta} route={'/'}/>,
        this.renderTarget_);
  }

  fetchUserData_(username) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return fetch(`/steam/user/${username}`,
      { headers: headers }).then(res => res.json())
      .catch(err => console.error(err));
  }
}


let matchData = dummyData;
if (location.hash.startsWith('#ma=')) {
  try {
    matchData = JSON.parse(atob(location.hash.slice('#ma='.length)));
    console.log("Using match data from URL:", matchData);
  } catch (error) {
    console.error(error);
  }
}

const controller = new Controller(
    document.getElementById('app-container'));

console.log("Root controller:", controller);
