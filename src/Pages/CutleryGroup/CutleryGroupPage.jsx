require('./CutleryGroupPage.scss');
const WillOnRow = require('./CutleryGroupTr');

var CutleryGroupPage = React.createClass({
  getInitialState: function() {
    return {

    };
  },
  render: function() {
    return (
      <div className="ui container fluid cutlery-group-page">
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
              <th rowSpan='2' >刀號</th>
              <th rowSpan='2' >刀名</th>
              <th colSpan='6' >盤</th>
            </tr>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
            </tr>
          </thead>

          <WillOnRow />
          <WillOnRow />
          <WillOnRow />
          <WillOnRow />
            <WillOnRow />
            <WillOnRow />
            <WillOnRow />
            <WillOnRow />
              <WillOnRow />
              <WillOnRow />
              <WillOnRow />
              <WillOnRow />
                <WillOnRow />
                <WillOnRow />
                <WillOnRow />
                <WillOnRow />
                  <WillOnRow />
                  <WillOnRow />
                  <WillOnRow />
                  <WillOnRow />


        </table>

        <div className="color-pattern" ref="colors" >
          <div>
            <div>P1</div>
          </div>
          <div>
            <div>P2</div>
          </div>
          <div>
            <div>P3</div>
          </div>
          <div>
            <div>P4</div>
          </div>
          <div>
            <div>P5</div>
          </div>
          <div>
            <div>P6</div>
          </div>
        </div>

      </div>
    );
  },
  componentDidMount: function() {
    (function() {
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();
    var colorPattern = $(this.refs.colors);
    var body = $('body');
    var lock = false;
    $(window).scroll(function(){
      if(!lock){
        lock = true;
        requestAnimationFrame(function() {
          colorPattern.css('top',body.scrollTop()+30);
          lock = false;
        }.bind(this));
      }
    }.bind(this));
  }
});

module.exports = CutleryGroupPage;
