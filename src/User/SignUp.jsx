var SignUp = React.createClass({
  render: function() {
    return (
      <div className={(this.props.open)?"model-wapper open":"model-wapper"}>
        <div className="my-mask" onClick={this.props.toggleSignUp}></div>
        <div className="my-modal">
          <div className="header">Create New Account</div>
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
              <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder=""/>
              </div>
              <button className="ui button" type="submit" onClick={this.createUser} >Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  },
  isSend: false,
  createUser: function(e) {
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
      postUser(data).then(function () {
        this.isSend = false;
        this.refs.form.reset();
        alert('success');
        this.props.toggleSignUp();
      }.bind(this), function (e) {
        this.isSend = false;
        this.refs.form.reset();
        e = JSON.parse(e.responseText);
        if(e.data === 'duplicate username')
          alert('username already exist');
        else
          alert('network error');
      }.bind(this));
    }
  }
});

function postUser(data) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/user',
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

module.exports = SignUp;
