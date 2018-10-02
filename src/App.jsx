import React, { Component } from 'react';
import ColoredHeader from './ColoredHeader.jsx';
import ButtonGroup from './ButtonGroup.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'black'
    };
  }

  render() {
    return (
      <div>
        <ColoredHeader color={this.state.color}>Hello React :)</ColoredHeader>
        <ButtonGroup
          colors={['black', 'red', 'green', 'blue']}
          colorSelected={this._handleColorChange}
        />
      </div>
    );
  }

  _handleColorChange = color => {
    this.setState({ color });
  };
}
export default App;
