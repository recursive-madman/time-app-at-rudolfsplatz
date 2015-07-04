
import React from 'react'
import TimeActions from '../actions/TimeActions'
import TimeStore from '../stores/TimeStore'

function assembleState() {
  return {
    time: TimeStore.getTime()
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = assembleState();
    this.updateState = this.updateState.bind(this);
    setInterval(TimeActions.refresh, 1000);
  }

  componentWillMount() {
    TimeStore.addChangeListener(this.updateState);
  }

  componentWillUnmount() {
    TimeStore.removeChangeListener(this.updateState);
  }

  updateState() {
    this.setState(assembleState);
  }

  render() {
    return (
      <div>{this.props.label}: {this.state.time.toString()}</div>
    );
  }
}
