require('./IndexPage.scss');
var WeekPlan = require('../../Components/WeekPlan/WeekPlan');
var Panel = require('../../Components/Panel/Panel');
var News = require('../../Components/Panel/News');
var Announcement = require('../../Components/Panel/Announcement');
var CheckItem = require('../../Components/Panel/CheckItem');
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
        <div className="row">
          <div className="col-3">
            <Panel title='新聞消息' item={News} icon='newspaper' />
          </div>
          <div className="col-3">
            <Panel title='公告事項' item={Announcement} icon='announcement' />
          </div>
          <div className="col-2">
            <Panel title='工作留言板' item={CheckItem} icon='checkmark box' />
          </div>
        </div>
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
