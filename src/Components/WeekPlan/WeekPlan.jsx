// var colors = ["rgb(187, 243, 247)", "rgb(218, 189, 252)", "rgb(148, 132, 255)", "rgb(145, 233, 234)", "rgb(255, 179, 165)", "rgb(155, 255, 183)", "rgb(255, 222, 204)", "rgb(149, 244, 195)", "rgb(221, 146, 244)", "rgb(144, 112, 239)", "rgb(240, 152, 242)", "rgb(134, 249, 165)", "rgb(119, 255, 171)", "rgb(250, 159, 252)", "rgb(249, 159, 225)", "rgb(153, 247, 222)", "rgb(232, 247, 136)", "rgb(127, 239, 107)", "rgb(129, 239, 136)", "rgb(131, 252, 187)", "rgb(234, 137, 105)", "rgb(178, 182, 255)", "rgb(246, 249, 159)", "rgb(163, 255, 187)"];
require('./WeekPlan.scss');
var Day = require('./Day.jsx');

var WeekPlan = React.createClass({
  getInitialState: function() {
    return {
      weeks: [
        {
          date: 1314564645,
          day: '日',
          info:[
            {
              text: 'gfgsgd',
              num: 29
            },{
              text: 'gfgsgd',
              num: 29
            }
          ]
        },{
        date: 1314564645,
        day: '一',
          info:[
              {
                text: 'gfgsgd',
                num: 29
              },{
                text: 'gfgsgd',
                num: 29
              }
            ]
          },{
          date: 1314564645,
          day: '二',
            info:[
                {
                  text: 'gfgsgd',
                  num: 29
                },{
                  text: 'gfgsgd',
                  num: 29
                }
              ]
            },{
            date: 1314564645,
            day: '三',
              info:[
                  {
                    text: 'gfgsgd',
                    num: 29
                  },{
                    text: 'gfgsgd',
                    num: 29
                  }
                ]
              },{
              date: 1314564645,
              day: '四',
                info:[
                    {
                      text: 'gfgsgd',
                      num: 29
                    },{
                      text: 'gfgsgd',
                      num: 29
                    }
                  ]
                },{
                date: 1314564645,
                day: '五',
                  info:[
                      {
                        text: 'gfgsgd',
                        num: 29
                      },{
                        text: 'gfgsgd',
                        num: 29
                      }
                    ]
                  },{
                  date: 1314564645,
                  day: '六',
                    info:[
                        {
                          text: 'gfgsgd',
                          num: 29
                        },{
                          text: 'gfgsgd',
                          num: 29
                        }
                      ]
                    }
      ]
    }
  },
  render: function() {
    return (
      <div className="wp-week" >
        {
          this.state.weeks.map(function (e, i) {
            return <Day data={e} key={i} />
          })
        }
      </div>
    );
  }
});

module.exports = WeekPlan;

function unlikePost(id) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/like/'+id,
      type: 'DELETE'
    })
    .done(function(mes) {
      resolve(mes)
    })
    .fail(function(mes) {
      reject(mes)
    })
  });
}
