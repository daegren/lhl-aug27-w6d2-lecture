import React, { Component } from 'react';

export default class ColorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };
  }

  render() {
    return (
      <form onSubmit={this._handleFormSubmit}>
        <h2>New Color</h2>

        <div>
          <label htmlFor="color">Color</label>
          <input
            name="color"
            placeholder="Enter color name"
            value={this.state.color}
            onChange={this._handleInputChange}
          />
        </div>

        <input type="submit" value="Save" />
      </form>
    );
  }

  _handleInputChange = e => {
    this.setState({ color: e.target.value });
  };

  _handleFormSubmit = e => {
    e.preventDefault();

    const colorValue = this.state.color;

    this.props.onNewColor(colorValue);

    this.setState({ color: '' });
  };
}
