var ReactDOM = require('react-dom');
var ReactRouter = require('react-router'),
  Router = ReactRouter.Router,
  hashHistory = ReactRouter.hashHistory;

var routes = require('routes.jsx');

ReactDOM.render((
  <Router children={routes}  history={hashHistory}/>
), document.getElementById('root'));

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};
