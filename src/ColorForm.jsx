import React, { Component } from 'react';

export default class ColorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      color: ''
    };
  }

  render() {
    return (
      <form className="color-form" onSubmit={this._handleFormSubmit}>
        <div>
          <h2>New Color</h2>

          <div>
            <label htmlFor="name">Name</label>
            &nbsp;
            <input
              name="name"
              placeholder="Enter color name"
              value={this.state.name}
              onChange={this._handleInputChange('name')}
            />
          </div>

          <div>
            <label htmlFor="value">Value</label>
            &nbsp;
            <input
              name="value"
              placeholder="Enter color value"
              value={this.state.color}
              onChange={this._handleInputChange('color')}
            />
          </div>

          <input type="submit" value="Save" />
        </div>
        <div>
          <div
            className="preview"
            style={{ backgroundColor: this.state.color }}
          />
        </div>
      </form>
    );
  }

  _handleInputChange = key => e => {
    this.setState({ [key]: e.target.value });
  };

  _handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.color === '') {
      this.props.onNewColor({
        name: this.state.name,
        color: this.state.name.toLowerCase()
      });
    } else {
      this.props.onNewColor({
        name: this.state.name,
        color: this.state.color
      });
    }

    this.setState({ name: '', color: '' });
  };
}
