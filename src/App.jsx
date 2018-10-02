import React, { Component } from 'react';
import ColoredHeader from './ColoredHeader.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import ColorForm from './ColorForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'black',
      possibleColors: ['black', 'red', 'green', 'blue', 'aquamarine', 'tomato'],
      colorInputValue: ''
    };
  }

  render() {
    return (
      <div>
        <ColoredHeader color={this.state.color}>Hello React :)</ColoredHeader>

        <ButtonGroup
          colors={this.state.possibleColors}
          colorSelected={this._handleColorChange}
        />
        <div>
          <ColorForm onNewColor={this._addColor} />
        </div>
      </div>
    );
  }

  _addColor = color => {
    this.setState(prevState => ({
      ...prevState,
      possibleColors: [...prevState.possibleColors, color]
    }));
  };

  _handleColorChange = color => {
    this.setState({ color });
  };
}
export default App;
