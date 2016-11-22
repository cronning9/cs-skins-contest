'use strict';

const express = require('express');
const router = express.Router();
const request = require('request-promise');

const steamAPIKey = '372B198B9CF9F579F6FBFE645EB5C10F';
const steamRootUrl = 'http://api.steampowered.com';

// Get user info from Steam API and display in browser
// We'll be able to get other info about the user through other API calls.
// For now, we're resolving a user vanity URL to a SteamID, and displaying the bare minimum basic information.
router.get('/user/:vanityurl', (req, res) => {
  const vanityUrlReq = {
    url: `${steamRootUrl}/ISteamUser/ResolveVanityUrl/v0001/?key=${steamAPIKey}&vanityurl=${req.params.vanityurl}`,
    json: true
  };

  const requestUserData = steamId => {
    const userDataReq = {
      url: `${steamRootUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${steamAPIKey}&steamids=${steamId}`,
      json: true
    };

    const recentlyPlayedReq = {
      url: `${steamRootUrl}/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamAPIKey}&steamid=${steamId}`,
      json: true
    };

    const userData = {};

    request(recentlyPlayedReq).then(body => {
      userData.recentGames = body.response.games;
    });

    request(userDataReq).then(body => {
                      const apiResponseRoot = body.response.players[0];
                      // persona states are mapped to a zero-indexed set of numbers. therefore, I've stored the
                      // mappings of status number to status name in an Array
                      const personaStates = ['Offline', 'Online', 'Busy', 'Away', 'Snooze', 'Looking to Trade', 'Looking to Play'];

                      userData.user = apiResponseRoot.personaname;
                      userData.avatarfull = apiResponseRoot.avatarfull;
                      userData.avatarmedium = apiResponseRoot.avatarmedium;
                      userData.profile = apiResponseRoot.profileurl;
                      userData.status = personaStates[apiResponseRoot.personastate];
                      userData.location = apiResponseRoot.loccountrycode === undefined ? "Unknown" : apiResponseRoot.loccountrycode;

                      res.setHeader('Content-Type', 'application/json');
                      res.send(JSON.stringify(userData));
                    })
                    .catch(err => {
                      res.send('An Error has occurred.');
                      throw new Error(err);
                    });
  };

  // May use this later
  let steam64Id;

  request(vanityUrlReq).then(body => steam64Id = requestUserData(body.response.steamid))
                       .catch(err => {
                         res.send('An Error has occurred.');
                         throw new Error(err);
                       });
});

module.exports = router;