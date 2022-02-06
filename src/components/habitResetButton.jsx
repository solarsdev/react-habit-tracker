import React, { Component } from 'react';

class HabitResetButton extends Component {
  render() {
    console.log('HabitResetButton');
    return (
      <button className='habits-reset' onClick={this.props.onReset}>
        Reset All
      </button>
    );
  }
}

export default HabitResetButton;
