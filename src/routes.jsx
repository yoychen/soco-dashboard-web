var ReactRouter = require('react-router'),
  Route = ReactRouter.Route,
  IndexRoute = ReactRouter.IndexRoute,
  Link = ReactRouter.Link;

var App = require('App.jsx');
var IndexPage = require('Pages/Index/IndexPage.jsx');
var ManufacturePage = require('Pages/Manufacture/ManufacturePage.jsx');
var WillOnlinePage = require('Pages/WillOnline/WillOnlinePage.jsx');
var DailyWorkPage = require('Pages/DailyWork/DailyWorkPage.jsx');
var StepHome = require('Pages/StepManager/app.jsx');
var StepHourPage = require('Pages/StepManager/StepHourPage.jsx');
var StepProgramPage = require('Pages/StepManager/StepProgramPage.jsx');
var StepCutleryPage = require('Pages/StepManager/StepCutleryPage.jsx');
var CutleryGroupPage = require('Pages/CutleryGroup/CutleryGroupPage.jsx');


var routes = (
  <Route path="/" component={App}>
    <IndexRoute path="index" component={IndexPage}/>
    <Route path="index" component={IndexPage}/>
    <Route path="manufacture" component={ManufacturePage}/>
    <Route path="willonline" component={WillOnlinePage}/>
    <Route path="dailywork" component={DailyWorkPage}/>
    <Route path="step"  component={StepHome}>
      <IndexRoute path="hour" component={StepHourPage}/>
      <Route path="hour" component={StepHourPage}/>
      <Route path="program" component={StepProgramPage}/>
      <Route path="cutlery" component={StepCutleryPage}/>
    </Route>
    <Route path="cutlerygroup" component={CutleryGroupPage}/>
  </Route>
);

module.exports = routes;
