var News = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    var data = this.props.data;
    return (
      <div className="news-item" >
        <div className="news-date">
          <h5>
            {new Date(data.date).getDate()}
          </h5>
          <span>
            {(new Date().getFullYear())+'/'+(new Date().getMonth())}
          </span>
        </div>
        <div className="news-content">
          <h6>{data.title}</h6>
          <p>
            {data.content}
          </p>
        </div>
      </div>
    );
  }
});

module.exports = News;
