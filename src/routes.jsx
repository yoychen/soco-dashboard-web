var ReactRouter = require('react-router'),
  Route = ReactRouter.Route,
  IndexRoute = ReactRouter.IndexRoute,
  Link = ReactRouter.Link;

var App = require('App.jsx');
var IndexPage = require('Pages/IndexPage.jsx');
var SettingPage = require('Pages/SettingPage.jsx');
// var AboutPage = require('About/AboutPage.jsx');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="achieve" component={IndexPage}/>
    <Route path="setting" component={SettingPage}/>
  </Route>
);

module.exports = routes;
