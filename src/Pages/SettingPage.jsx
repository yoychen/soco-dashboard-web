import Achieve from '../Achieve/Achieve';
require('./SettingPage.scss');

var IndexPage = React.createClass({
  getInitialState: function() {
    // getPost().then(function (data) {
    //   this.setState({
    //     posts: data.data
    //   });
    // }.bind(this), function () {
    //   alert('network error');
    // });
    return {

    };
  },
  render: function() {
    return (
      <div className="ui container setting-page">
        <form className="ui form">
          <h4 className="ui dividing header">聊天室設定</h4>
          <div className="ui segment" style={{animationDelay: 0+"s"}}>
            <div className="grouped fields">
              <label htmlFor="fruit" style={{
                  marginBottom: 13,
                  display: "block",
                  paddingLeft: "1em"
                }} >你的稱號</label>
              <div className="field">
                <div className="ui my-radio">
                  <input type="radio" name="fruit" id="r" defaultChecked="true" className="hidden" />
                  <label htmlFor='r'>
                    <img src='http://emojipedia-us.s3.amazonaws.com/cache/93/a8/93a814a24031ce54cabf2369e459d618.png' />
                    Apples
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui my-radio">
                  <input type="radio" id='1' name="fruit" className="hidden" />
                  <label htmlFor='1'>Oranges</label>
                </div>
              </div>
              <div className="field">
                <div className="ui my-radio">
                  <input type="radio" id='2' name="fruit" className="hidden" />
                  <label htmlFor='2'>Pears</label>
                </div>
              </div>
              <div className="field">
                <div className="ui my-radio">
                  <input type="radio" id='3' name="fruit" className="hidden" />
                  <label htmlFor='3'>Grapefruit</label>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment" style={{animationDelay: 0.13+"s"}}>
            <div className="field">
              <div className="ui toggle checkbox">
                <input type="checkbox" name="pictGuard" defaultChecked="true" className="hidden" />
                <label>照片守門員 <span style={{
                    color: '#FFC107',
                    marginLeft: '0.5em'
                  }} >對方傳送圖片訊息需經您同意才會開啟原圖</span></label>
              </div>
            </div>
          </div>

          <div className="ui segment" style={{animationDelay: 0.23+"s"}}>
            <div className="field">
              <div className="ui animated fade red button">
                <div className="visible content">清空黑名單</div>
                <div className="hidden content">
                  <i style={{fontSize: '1.3em'}} className="right trash outline icon"></i>
                </div>
              </div>

            </div>
          </div>

        </form>
      </div>
    );
  },
  componentDidMount: function() {
    $('.ui.checkbox').checkbox();
  },
  updatePostData: function() {
    getPost().then(function (data) {
      this.setState({
        posts: data.data
      });
    }.bind(this), function () {
      alert('network error');
    });
  }
});

module.exports = IndexPage;

function getPost() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/post',
      type: 'GET'
    })
    .done(function(mes) {
      resolve(mes)
    })
    .fail(function(mes) {
      reject(mes)
    })
  });
}
