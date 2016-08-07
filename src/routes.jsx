var ReactRouter = require('react-router'),
  Route = ReactRouter.Route,
  IndexRoute = ReactRouter.IndexRoute,
  Link = ReactRouter.Link;

var App = require('App.jsx');
var IndexPage = require('Pages/Index/IndexPage.jsx');
var ManufacturePage = require('Pages/Manufacture/ManufacturePage.jsx');
var WillOnlinePage = require('Pages/WillOnline/WillOnlinePage.jsx');
var DailyWorkPage = require('Pages/DailyWork/DailyWorkPage.jsx');


var routes = (
  <Route path="/" component={App}>
    <IndexRoute path="index" component={IndexPage}/>
    <Route path="index" component={IndexPage}/>
    <Route path="manufacture" component={ManufacturePage}/>
    <Route path="willonline" component={WillOnlinePage}/>
    <Route path="dailywork" component={DailyWorkPage}/>
  </Route>
);

module.exports = routes;
