'use strict';

import React from 'react';

import Async from 'react-promise';

import UserDataContainer from './UserDataContainer';

const User = ({username, controller}) => <Async promise={controller.fetchUserData_(username)}
                                                then={body => <UserDataContainer userData={body} />} />

export default User;