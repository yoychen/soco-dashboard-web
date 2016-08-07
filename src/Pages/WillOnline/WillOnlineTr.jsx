var WillOnlineTr = React.createClass({
  getInitialState: function() {
    return {
      data:{
        prod_no: 'NHH037',
        step: 'H2',
        plate: '1',
        proofread_man: 'TAKA',
        mounting_man: 'OOR'
      }
    };
  },
  render: function() {
    const d = this.state.data;
    return (
      <tbody className={this.props.done?'done':''}>
        <tr>
          <td>{d.prod_no}</td>
          <td>{d.step}</td>
          <td>{d.plate}</td>
          <td>
            <select name="machine" className="ui " id="select">
              <option value="" defaultChecked={true} >{d.proofread_man}</option>
              <option value="">FEF</option>
              <option value="">FEX</option>
              <option value="">ODO</option>
              <option value="">WNJ</option>
            </select>
          </td>
          <td>
            <select name="machine" className="ui " id="select">
              <option value="" defaultChecked={true} >{d.mounting_man}</option>
              <option value="">FEF</option>
              <option value="">FEX</option>
              <option value="">ODO</option>
              <option value="">WNJ</option>
            </select>
          </td>
        </tr>
      </tbody>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = WillOnlineTr;
