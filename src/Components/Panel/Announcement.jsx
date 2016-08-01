var Announcement = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    var data = this.props.data;
    return (
      <div className="anno-item" >
        <div className="anno-title">
          <h5>
            {data.title}
          </h5>
          <span>
            {(new Date().toLocaleDateString())+' '+(new Date().toLocaleTimeString())}
          </span>
        </div>
        <div className="anno-content">
          <p>
            {data.content}
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Announcement;
