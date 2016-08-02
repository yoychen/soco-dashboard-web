require('./WillOnlinePage.scss');
const WillOnRow = require('./WillOnlineTr');

var WillOnlinePage = React.createClass({
  getInitialState: function() {
    return {

    };
  },
  render: function() {
    return (
      <div className="ui container fluid willonline-page">
        <div className="ui search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="輸入件號" />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>

        <table className="ui celled structured table">
          <thead>
            <tr>
              <th>件號</th>
              <th>工序</th>
              <th>盤</th>
              <th>預定校機人員</th>
              <th>預定裝夾人員</th>
            </tr>
          </thead>

          <WillOnRow />
          <WillOnRow />
          <WillOnRow />
          <WillOnRow />


        </table>
      </div>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = WillOnlinePage;
