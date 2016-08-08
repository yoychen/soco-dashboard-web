var WillOnlineTr = React.createClass({
  getInitialState: function() {
    return {
      data:{
        prod_no: 'NHH037',
        step: 'H2',
        plate: '1',
        proofread_man: 'TAKA',
        mounting_man: 'OOR',
        APC_man: 'MFS',
        proofread_type: '常規校機',
        proofread_condition: 'Go',
        proofread_done: false,
        mounting_type: '首件上料',
        mounting_done: false,
      }
    };
  },
  render: function() {
    const d = this.state.data;
    return (
      <tbody className={this.props.done?'done':''}>
        <tr>
          <td>1</td>
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
          <td>{d.proofread_type}</td>
          <td>{d.proofread_condition}</td>
          <td>
            <div className="ui toggle checkbox">
              <input type="checkbox" name="public" />
              <label></label>
            </div>
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
          <td>{d.mounting_type}</td>
          <td>{d.APC_man}</td>
          <td>
            <div className="ui toggle checkbox">
              <input type="checkbox" name="public" />
              <label></label>
            </div>
          </td>
        </tr>
      </tbody>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = WillOnlineTr;
