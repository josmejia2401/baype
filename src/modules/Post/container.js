import React from 'react';
import Presenter from './presenter';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
  }

  render() {
    return <Presenter {...this.props} state={this.state} />;
  }
}
export default Container;