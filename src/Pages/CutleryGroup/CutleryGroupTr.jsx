var WillOnlineTr = React.createClass({
  getInitialState: function() {
    return {
      data:{
        cutlery_no: 'T1',
        cutlery_name: 'WDKBLG',
        using: [Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1]
      }
    };
  },
  render: function() {
    const d = this.state.data;
    const body = [];
    for(let i = 1;i<7;i++){
      body.push(<td className={d.using.indexOf(i)!==-1 ? 'working':''} ><div/></td>)
    }

    return (
      <tbody>
        <tr>
          <td>{d.cutlery_no}</td>
          <td>{d.cutlery_name}</td>
          { body }
        </tr>
      </tbody>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = WillOnlineTr;
