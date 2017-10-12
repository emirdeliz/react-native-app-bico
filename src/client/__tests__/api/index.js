/* eslint no-undef: 0 */
/* eslint import/first: 0 */

import { expect } from 'chai';
import fetch from 'isomorphic-fetch';

global.expect = expect;
global.fetch = fetch;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

import './account';
