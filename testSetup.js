require('babel-register')();

const mock = require('mock-require');
// const MockFetch = require('mock-fetch-api');

mock('common', `${__dirname}/src/common`);
mock('constants', `${__dirname}/constants`);

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;