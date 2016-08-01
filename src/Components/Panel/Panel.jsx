require('./Panel.scss');
// var News = require('./News');

var Panel = React.createClass({
  getInitialState: function() {
    return {
      news: [
        {
          date: 12154612,
          title: "fdfdsfdsfs",
          content: "dfdfsf sdfdsfsdfs dfdsfsd fdddddddddddd dddddddddddddddasd"
        },
        {
          date: 12154612,
          title: "fdfdsfdsfs",
          content: "dfdfs fsdfdsfsdf sdfdsfs dfdddd dd ddddddddd ddddddddddddasd"
        },
        {
          date: 12154612,
          title: "fdfdsfdsfs",
          content: "dfdfsfs dfdsfsdfs dfdsfsdf dddddddd ddddddd ddddddddddddasd"
        },
        {
          date: 12154612,
          title: "fdfdsfdsfs",
          content: "dfdfsfsdfds fsdfsdfdsf sdfddddddddddddd ddddddddddddddasd"
        },
        {
          date: 12154612,
          title: "fdfdsfdsfs",
          content: "dfdfsfsd fdsfsdfsd fdsfsdfdddddddd dddddddddddddddddddasd"
        }
      ]
    }
  },
  render: function() {
    var Item = this.props.item;
    return (
      <div className="panel" >
        <div className="panel-title">
          <h5>
            <i className={this.props.icon+" icon"}></i>
            {this.props.title}
          </h5>
        </div>
        {
          this.state.news.map(function (e, i) {
            return <Item data={e} key={i} />
          })
        }
      </div>
    );
  }
});

module.exports = Panel;

function unlikePost(id) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/like/'+id,
      type: 'DELETE'
    })
    .done(function(mes) {
      resolve(mes)
    })
    .fail(function(mes) {
      reject(mes)
    })
  });
}
