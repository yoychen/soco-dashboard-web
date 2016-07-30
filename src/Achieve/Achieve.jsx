var colors = ["rgb(187, 243, 247)", "rgb(218, 189, 252)", "rgb(148, 132, 255)", "rgb(145, 233, 234)", "rgb(255, 179, 165)", "rgb(155, 255, 183)", "rgb(255, 222, 204)", "rgb(149, 244, 195)", "rgb(221, 146, 244)", "rgb(144, 112, 239)", "rgb(240, 152, 242)", "rgb(134, 249, 165)", "rgb(119, 255, 171)", "rgb(250, 159, 252)", "rgb(249, 159, 225)", "rgb(153, 247, 222)", "rgb(232, 247, 136)", "rgb(127, 239, 107)", "rgb(129, 239, 136)", "rgb(131, 252, 187)", "rgb(234, 137, 105)", "rgb(178, 182, 255)", "rgb(246, 249, 159)", "rgb(163, 255, 187)"];


var Achieve = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    let data = this.props.data;
    let unlock = (data.progress >= 1)?true:false;
    let idx = this.props.index;
    let tgap = 0.08;
    return (
      <div className={(unlock)?"achieve complate":"achieve"}>
        <div className="achieve-image" style={{animationDelay: idx*tgap+"s"}} >
          {
            (!unlock)?
              <div>
                <i className="help icon"></i>
                <i className="material-icons lock" style={{animationDelay: idx*tgap+0.35+"s"}} >lock</i>
              </div>:
              <div className="img-wrapper">
                <img src={data.img} />
              </div>
          }
          {/*<div className="achieve-mask"></div>*/}
        </div>
        <div className="achieve-content" style={{animationDelay: idx*tgap+"s"}} >
          <h3>
            {data.title}
            {
              (unlock)?<i className="material-icons done" style={{animationDelay: idx*tgap+0.35+"s"}} >done</i>:null
            }
          </h3>
          <div className="achieve-detail">
            {data.condition}
          </div>
          <span className="percent">{data.progress*100+"%"}</span>
        </div>
        <div className="achieve-progress" style={{width:data.progress*100+"%"}} />

        <div className="achieve-addition" style={{animationDelay: idx*tgap+"s"}} >
          <h5>{(unlock)?'獲得稱號':'可獲得稱號'}</h5>
          <span>
            <img src={data.name.img} />
            {data.name.name}
          </span>
        </div>
      </div>
    );
  }
});

export default Achieve;

function likePost(id) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/like',
      type: 'POST',
      data: {
        postId: id
      }
    })
    .done(function(mes) {
      resolve(mes)
    })
    .fail(function(mes) {
      reject(mes)
    })
  });
}
