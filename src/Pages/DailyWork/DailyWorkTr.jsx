var ManufactureTr = React.createClass({
  getInitialState: function() {
    return {
      data:{
        manu_id: 132112131,
        prod_no: 'NHH037',
        predict_date: '2016/06/13',
        source_date: '2016/06/10',
        step: [
          {
            st: 1,
            machine: 'H02',
            predict_num: 15,
            actual_num: 13
          },
          {
            st: 2,
            machine: 'H02',
            predict_num: 15,
            actual_num: 13
          },
          {
            st: 3,
            machine: 'H02',
            predict_num: 15,
            actual_num: 13
          },
          {
            st: 4,
            machine: 'H02',
            predict_num: 15,
            actual_num: 13
          },
        ]
      }
    };
  },
  render: function() {
    const d = this.state.data;
    return (
      <tbody className={this.props.done?'done':''}>
        <tr>
          <td rowSpan="3">{d.manu_id}</td>
          <td rowSpan="3">{d.prod_no}</td>
          <td rowSpan="3">{d.predict_date}</td>
          <td rowSpan="3">{d.source_date}</td>
          <td colSpan="3" >H1</td>
          <td colSpan="3" >H2</td>
          <td colSpan="3" >H3</td>
          <td colSpan="3" >H4</td>
          <td rowSpan="3">首件</td>
          <td rowSpan="3">完成日</td>
        </tr>
        <tr>
          <td colSpan="3">{d.step[0].machine}</td>
          <td colSpan="3">{d.step[1].machine}</td>
          <td colSpan="3">{d.step[2].machine}</td>
          <td colSpan="3">{d.step[3].machine}</td>
        </tr>
        <tr>
          <td>{d.step[0].predict_num}</td>
          <td>{d.step[0].actual_num}</td>
          <td>
            <select name="online_num" className="ui " id="select">
              <option value="" defaultChecked={true} >0</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
            </select>
          </td>
          <td>{d.step[1].predict_num}</td>
          <td>{d.step[1].actual_num}</td>
          <td>
            <select name="online_num" className="ui " id="select">
              <option value="" defaultChecked={true} >0</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </td>
          <td>{d.step[2].predict_num}</td>
          <td>{d.step[2].actual_num}</td>
          <td>
            <select name="online_num" className="ui " id="select">
              <option value="" defaultChecked={true} >0</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </td>
          <td>{d.step[3].predict_num}</td>
          <td>{d.step[3].actual_num}</td>
          <td>
            <select name="online_num" className="ui " id="select">
              <option value="" defaultChecked={true} >0</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </td>
        </tr>
      </tbody>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = ManufactureTr;
