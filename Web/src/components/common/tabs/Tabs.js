import React, {Component, PropTypes} from 'react';

class Tabs extends Component {

  static defaultProps = {
    selected: 0
  }

  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.element]).isRequired
  }

  state = {
    selected: this.props.selected
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  handleClick(index, event) {
    event.preventDefault();
    this.setState({selected: index});
  }

  _renderTabs() {

    function labels(child, index) {
      const activeClass = (this.state.selected === index
        ? 'is-active'
        : '');
      return (
        <li key={index} className={activeClass}>
          <a href="#" onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }

    return (
      <div className="tabs">
        <ul>
          {this.props.children.map(labels.bind(this))}
        </ul>
      </div>
    );
  }

  _renderContent() {
    return (
      <div className="box">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this._renderTabs()}
        {this._renderContent()}
      </div>
    );
  }
}

export default Tabs;
