import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false,
      drawerIsOpen: false,
    };
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation() {
    this.setState({ isAnimating: !this.state.isAnimating });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="logo">START BOOTSTRAP</div>
          <div className="menu">
            <button onClick={() => this.setState({ drawerIsOpen: !this.state.drawerIsOpen })}>Menu</button>
          </div>
          <div className="links">ABOUT DOWNLOAD CONTACT</div>
          <div className={this.state.drawerIsOpen ? "drawer open" : "drawer"}>
            ABOUT<br />
            DOWNLOAD<br />
            CONTACT<br />
          </div>
        </nav>
        <div className="content">
          <div>
            <button onClick={this.toggleAnimation}>Click me!</button>
          </div>
          <div className={this.state.isAnimating ? "square animation1" : "square"}>My text</div>
          <div className="circle">Circle!</div>
        </div>
      </div>
    );
  }
}

export default App;
