require('./StepManagerPage.scss');
const StepRow = require('./StepTr');

var StepHourPage = React.createClass({
  getInitialState: function() {
    return {

    };
  },
  render: function() {
    return (
      <div className="ui container fluid step-page">
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
              <th>工序1</th>
              <th>標準工時</th>
              <th>工序2</th>
              <th>標準工時</th>
              <th>工序3</th>
              <th>標準工時</th>
              <th>工序4</th>
              <th>標準工時</th>
              <th>轉後製</th>
            </tr>
          </thead>

          <StepRow />
          <StepRow />
          <StepRow />
          <StepRow />


        </table>
      </div>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = StepHourPage;
