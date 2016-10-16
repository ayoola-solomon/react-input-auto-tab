import React, { Component, PropTypes } from 'react';

class Autotab extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTab = this.handleTab.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.props.onChange(input);
  }

  handleTab(e) {
    const target = e.target;
    const input = target.value;
    if (input.length >= this.props.maxLength) {
      let next = target;
      next = next.nextElementSibling;
      while (next) {
        if (next === null) break;
        if (next.tagName.toLowerCase() === 'input') {
          next.focus();
          break;
        }
      }
    }
  }

  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.hint}
        maxLength={this.props.maxLength}
        defaultValue={this.props.value}
        onChange={this.handleChange}
        onKeyUp={this.props.maxLength ? this.handleTab : null}
        style={this.props.style}
        autoFocus={this.props.autoFocus}
      />
    );
  }
}

Autotab.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxLength: PropTypes.number,
  style: PropTypes.object,
  autoFocus: PropTypes.bool,
};

export default Autotab;
