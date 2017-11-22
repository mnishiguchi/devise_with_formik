import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class HelloReact extends React.PureComponent {
  static defaultProps = {
    name: 'David'
  };

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

export default HelloReact;
