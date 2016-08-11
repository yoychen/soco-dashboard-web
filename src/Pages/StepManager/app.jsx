var App = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    const d = this.state.data;
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = App;
