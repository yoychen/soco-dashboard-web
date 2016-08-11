require('./DailyWorkPage.scss');
const ManuRow = require('./DailyWorkTr');


var ManufacturePage = React.createClass({
  getInitialState: function() {
    return {

    };
  },
  render: function() {
    return (
      <div className="ui container fluid dailywork-page">
        <div className="ui search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="輸入製令或件號" />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>

        <table className="ui celled structured table">
          <thead>
            <tr>
              <th rowSpan="4">製令</th>
              <th rowSpan="4">件號</th>
              <th rowSpan="4">預交日</th>
              <th rowSpan="4">來料日</th>
              <th colSpan="12" className="sub-title">機台 - 工序</th>
              <th rowSpan="4">首件</th>
              <th rowSpan="4">完成日</th>
            </tr>
            <tr>
              <th colSpan="2">H1</th>
              <th>機台</th>
              <th colSpan="2">H2</th>
              <th>機台</th>
              <th colSpan="2">H3</th>
              <th>機台</th>
              <th colSpan="2">H4</th>
              <th>機台</th>
            </tr>
            <tr><th colSpan="12" className="sub-title">生產數量</th></tr>
            <tr>
              <th>預計</th>
              <th>實際</th>
              <th>上線個數</th>
              <th>預計</th>
              <th>實際</th>
              <th>上線個數</th>
              <th>預計</th>
              <th>實際</th>
              <th>上線個數</th>
              <th>預計</th>
              <th>實際</th>
              <th>上線個數</th>
            </tr>
          </thead>
          <ManuRow />
          <ManuRow />
          <ManuRow />
          <ManuRow done={true} />
          <ManuRow done={true} />

        </table>
      </div>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = ManufacturePage;
