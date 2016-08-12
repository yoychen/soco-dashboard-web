var StepTr = React.createClass({
  getInitialState: function() {
    return {
      data:{
        prod_no: 'NHH037',
        steps: [
          {
            machine: 'H02',
            hour: 5
          },
          {
            machine: 'H02',
            hour: 5
          },
          {
            machine: 'H02',
            hour: 5
          },
          {
            machine: 'H02',
            hour: 5
          }
        ]
      }
    };
  },
  render: function() {
    const d = this.state.data;
    return (
      <tbody>
        <tr>
          <td>{d.prod_no}</td>
          {

            d.steps.map((e, i) => {
              return [
                <td>{e.machine}</td>,
                <td>{e.hour}</td>
              ]
            })
          }

        </tr>
      </tbody>
    );
  },
  componentDidMount: function() {
  }
});

module.exports = StepTr;
