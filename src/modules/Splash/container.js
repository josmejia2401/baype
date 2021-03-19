import React from 'react';
import SplashScreen from './presenter';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { getLocationAsync } from '../../utils/location';
import { setData } from '../../utils/asyncstorage';
import { LOCATION_CURRENT_LOCATION } from '../../utils/constants';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { onLoad } = this.props;
    if (onLoad) {
      await onLoad();
    }
    let location = await getLocationAsync();
    if (location && location instanceof Error === false) {
      await setData(LOCATION_CURRENT_LOCATION, JSON.stringify(location));
    }
  }

  render() {
    return <SplashScreen {...this.props} state={this.state} />;
  }
}
export default Container;
