'use strict';

import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import User from './components/User/User';

export default class AppContainer extends React.Component {
  constructor() {
    super();
    this.reRender = this.reRender.bind(this);
  }

  reRender() {
    this.forceUpdate();
  }

  render() {
    return <App staticText={this.props.staticText} match={this.props.match} controller={this.props.controller} buildMeta={this.props.buildMeta} reRender={this.reRender} />
  }

}

// The below component is essentially a container for lightweight, custom, front-end routing logic.
// It uses the History API in modern browsers to handle the browser history, catches link clicks,
// and forces React to re-render all components. On render, the `routeToComponent` method detects the current
// URL and renders the correct React Component.
// Barring any unforseen difficulties, this should be extensible enough to handle a myriad of routes as the app
// progresses.
const App = ({staticText, match, controller, buildMeta, reRender}) => {

  const clickHandler = event => {
    if (event.target.matches("a:not(#share-link)")) {
      event.preventDefault();
      window.history.pushState({url: event.target.getAttribute('href')}, null, event.target.getAttribute('href'));
      reRender();
    }
  };

  window.onpopstate = event => {
    reRender();
  };

  const routeToComponent = urlPath => {
    const path = urlPath.split('/');

    if (urlPath === "/") {
      return <Home staticText={staticText} controller={controller} match={match} buildMeta={buildMeta}/>
    } else if (path[1] === "user") {
      return <User username={path[2]} controller={controller} />
    }
  };

  return (
    <main onClick={clickHandler}>
      <Header />
      {routeToComponent(window.location.pathname)}
    </main>
  )
};