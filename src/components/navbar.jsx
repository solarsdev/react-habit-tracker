import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('Navbar');
    return (
      <header className='navbar'>
        <i className='navbar-logo fas fa-leaf'></i>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.habitsCount}</span>
      </header>
    );
  }
}

export default Navbar;
