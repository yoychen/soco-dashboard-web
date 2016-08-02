var ReactRouter = require('react-router'),
  Route = ReactRouter.Route,
  IndexRoute = ReactRouter.IndexRoute,
  Link = ReactRouter.Link;

var App = require('App.jsx');
var IndexPage = require('Pages/IndexPage.jsx');
var ManufacturePage = require('Pages/ManufacturePage.jsx');
var WillOnlinePage = require('Pages/WillOnlinePage.jsx');


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="manufacture" component={ManufacturePage}/>
    <Route path="willonline" component={WillOnlinePage}/>
  </Route>
);

module.exports = routes;
