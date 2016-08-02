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
          <td rowSpan="2">{d.manu_id}</td>
          <td rowSpan="2">{d.prod_no}</td>
          <td rowSpan="2">{d.predict_date}</td>
          <td rowSpan="2">{d.source_date}</td>
          <td>H1</td>
          <td>
            <select name="machine" className="ui " id="select">
              <option value="" defaultChecked={true} >{d.step[0].machine}</option>
              <option value="">H03</option>
              <option value="">H04</option>
              <option value="">H05</option>
              <option value="">H06</option>
            </select>
          </td>
          <td>H2</td>
          <td>{d.step[1].machine}</td>
          <td>H3</td>
          <td>{d.step[2].machine}</td>
          <td>H4</td>
          <td>{d.step[3].machine}</td>
          <td rowSpan="2">首件</td>
          <td rowSpan="2">完成日</td>
        </tr>
        <tr>
          <td>{d.step[0].predict_num}</td>
          <td>{d.step[0].actual_num}</td>
          <td>{d.step[1].predict_num}</td>
          <td>{d.step[1].actual_num}</td>
          <td>{d.step[2].predict_num}</td>
          <td>{d.step[2].actual_num}</td>
          <td>{d.step[3].predict_num}</td>
          <td>{d.step[3].actual_num}</td>
        </tr>
      </tbody>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = ManufactureTr;
