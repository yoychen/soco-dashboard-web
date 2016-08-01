require('vendor/vendor.scss');
var colors = ["rgb(187, 243, 247)", "rgb(218, 189, 252)", "rgb(148, 132, 255)", "rgb(145, 233, 234)", "rgb(255, 179, 165)", "rgb(155, 255, 183)", "rgb(255, 222, 204)", "rgb(149, 244, 195)", "rgb(221, 146, 244)", "rgb(144, 112, 239)", "rgb(240, 152, 242)", "rgb(134, 249, 165)", "rgb(119, 255, 171)", "rgb(250, 159, 252)", "rgb(249, 159, 225)", "rgb(153, 247, 222)", "rgb(232, 247, 136)", "rgb(127, 239, 107)", "rgb(129, 239, 136)", "rgb(131, 252, 187)", "rgb(234, 137, 105)", "rgb(178, 182, 255)", "rgb(246, 249, 159)", "rgb(163, 255, 187)"];
var Router = require('react-router')
var Link = Router.Link;
// var SignUp = require('./User/SignUp');
// var Login = require('./User/Login');


var App = React.createClass({
  getInitialState: function() {
    // checkIsLogin().then(function(e) {
    //   this.setState({
    //     username: e.data
    //   });
    // }.bind(this));
    return {
      toggle: true
    };
  },
  render: function() {
    var icon_background_index = this.state.username && this.state.username[0].charCodeAt()%24;
    var icon_background = colors[icon_background_index];
    return (
      <div>

        <div className={this.state.toggle?"ui menu large open":"ui menu large"}>
          <div className="item logo">
            SOCO
          </div>
          <div className="right menu">
            <div className="ui toggle item" onClick={()=>this.setState({toggle:!this.state.toggle})}>
              <i className="content icon"></i>
            </div>
          </div>
        </div>

        <div className={this.state.toggle?"side-menu open":"side-menu"} >
          <div className="group-menu">
            <Link className="sd-item" to='/achieve' activeClassName='active'>
              <span><i className="list icon"></i></span>製令清單
            </Link>
            <Link className="sd-item" to='/setting' activeClassName='active'>
              <span><i className="calendar icon"></i></span>預計上線
            </Link>
          </div>
        </div>

      {/*  <SignUp open={this.state.signUpOpen} toggleSignUp={this.toggleSignUp} />
        <EditPost open={this.state.editOpen} toggleEdit={this.toggleEdit} />
        <Login open={this.state.loginOpen} toggleLogin={this.toggleLogin} setUser={this.setUser} />*/}
        <div className={this.state.toggle?"main open":"main"} >
          {this.props.children}
        </div>
      </div>
    );
  },
  toggleSignUp: function () {
    this.setState({
      signUpOpen: !this.state.signUpOpen
    });
  },
  toggleLogin: function () {
    this.setState({
      loginOpen: !this.state.loginOpen
    });
  },
  toggleEdit: function () {
    this.setState({
      editOpen: !this.state.editOpen
    });
  },
  setUser: function (name) {
    this.setState({
      username: name
    });
  },
  logout: function() {
    $.ajax({
      url: '/logout',
      type: 'POST'
    })
    .done(function() {
      this.setState({
        username: null
      });
    }.bind(this))
    .fail(function() {
      alert('network error')
    });

  },
  componentDidUpdate: function() {
    $('.ui.dropdown').dropdown();
  }
});

module.exports = App;

function checkIsLogin() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/islogin',
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
