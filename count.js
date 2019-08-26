import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    }
  }
  increment = () => {
    this.props.dispatch({ type: 'INC' });
    this.setState({dataList: this.state.dataList.concat(this.props.count)})
    
  }
  render() {
    const Items = this.state.dataList.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <div>
        <h1>{this.props.count}</h1>
        <div>
          <button onClick={this.increment}>increment</button>
          <ul style={{ borderWidth: 1, maxHeight: 200,  borderColor: '#ff0000', width: 200, overflow: 'auto'}}>{Items}</ul>
        </div>
      </div>
    )
  }
}
function mapToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapToProps)(Counter);