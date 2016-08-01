var CheckItem = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    var data = this.props.data;
    return (
      <div className="check-item" >
        <div className="check-content">
          <div className="check-box" ></div>
          <p>
            {data.content}
          </p>
        </div>
      </div>
    );
  }
});

module.exports = CheckItem;
