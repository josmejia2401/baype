import React from 'react';
import SplashScreen from './presenter';


class Container extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
  }

  render() {
    return <SplashScreen {...this.props} state={this.state} />;
  }
}
export default Container;