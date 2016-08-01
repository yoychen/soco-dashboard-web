var Day = React.createClass({
  render: function() {
    return (
      <div className="wp-day">
        <div className="weekday">
          {this.props.data.day}
          <span>{new Date(this.props.data.date).toLocaleDateString()}</span>
        </div>
        <div className="day-content">
          {
            this.props.data.info.map(function (e, i) {
              return (
                <div key={i} >
                  <span className="wp-text">{e.text}</span>
                  <span className="wp-num">{e.num}</ span>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
});

function postPost(data) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/post',
      type: 'POST',
      data: data
    })
    .done(function(mes) {
      resolve(mes)
    })
    .fail(function(mes) {
      reject(mes)
    })
  });
}

module.exports = Day;
