require('./indexPage.scss');
var WeekPlan = require('../WeekPlan/WeekPlan');
var Link = require('react-router').Link;

var IndexPage = React.createClass({
  getInitialState: function() {
    // getPost().then(function (data) {
    //   this.setState({
    //     posts: data.data
    //   });
    // }.bind(this), function () {
    //   alert('network error');
    // });
    return {

    };
  },
  render: function() {
    return (
      <div className="ui container fluid index-page">
        <WeekPlan />
      </div>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = IndexPage;

function getPost() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/post',
      type: 'GET'
    })
    .done(function(mes) {
      resolve(mes)
    })
    .fail(function(mes) {
      reject(mes)
    })
  });
}
