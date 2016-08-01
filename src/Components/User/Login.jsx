var Login = React.createClass({
  render: function() {
    return (
      <div className={(this.props.open)?"model-wapper open":"model-wapper"} >
        <div className="my-mask" onClick={this.props.toggleLogin}></div>
        <div className="my-modal">
          <div className="header yellow">Login</div>
          <div className="content">
            <form className="ui form" ref="form" >
              <div className="field">
                <label>Name</label>
                <input type="text" name="username" placeholder=""/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder=""/>
              </div>
              <button className="ui button" type="submit" onClick={this.login} >Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  },
  isSend: false,
  login: function(e) {
    e.preventDefault();
    if(this.isSend) return;
    var check = true;
    $(this.refs.form).serializeArray().forEach(function(e, i) {
      if(e.value === "")
        check = false;
    });
    if(check){
      this.isSend = true;
      var data = $(this.refs.form).serializeObject();
      login(data).then(function (e) {
        this.isSend = false;
        this.refs.form.reset();
        this.props.setUser(e.data);
        // alert('success');
        $('body').trigger('new_mes');
        this.props.toggleLogin();
      }.bind(this), function (e) {
        this.isSend = false;
        this.refs.form.reset();
        e = JSON.parse(e.responseText);
        if(e.data === 'info error')
          alert('username or password is incorrect');
        else
          alert('network error');
      }.bind(this));
    }
  }
});

function login(data) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/login',
      type: 'POST',
      data: data
    })
    .done(function(mes) {
      resolve(mes)
    })
    .fail(function(mes) {
      reject(mes)
    })
  });
}

module.exports = Login;
