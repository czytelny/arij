import 'babel-polyfill';
import 'whatwg-fetch'
import {render} from 'react-dom';
import React from 'react';

import Router from './router';

render(Router, document.getElementById('app'));
