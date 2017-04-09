import React, {Component, PropTypes} from 'react';

export default class Button extends Component
{
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string
  }

  createClassName() {
    return ['button', this.props.className, this.props.color].join(' ').trim();
  }

  render() {
    return (
      <button className={this.createClassName()} type={this.props.type}>
        {this.props.children}
      </button>
    );
  }
}
