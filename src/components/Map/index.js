import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
//import MapView from 'react-native-maps';
//components
import { getDimentions } from '../../utils/dimensions';
import { getLocationAsync } from '../../utils/location';
import { getData } from '../../utils/asyncstorage';
import { LOCATION_CURRENT_LOCATION } from '../../utils/constants';

export default class Container extends React.PureComponent {
  state = {
    loading: true,
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    fixedRegion: null,
    location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
  };

  async componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = (mapRegion) => {
    //{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }
  };

  _handleMapOnRady = () => {
    //{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }
  };

  _getLocationAsync = async () => {
    let location = await getData(LOCATION_CURRENT_LOCATION);
    if (!location || location instanceof Error === true) {
      location = await getLocationAsync();
    }
    if (location && location instanceof Error === false) {
      this.setState({
        location: JSON.parse(location),
        mapRegion: JSON.parse(location),
        loading: false,
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    if (this.state.loading === true) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        /*<MapView
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={this._handleMapRegionChange}
          onMapReady={this._handleMapOnRady}>
          <MapView.Marker
            coordinate={this.state.location.coords}
            title="Mi ubicación"
            description="Estoy aquí"
            draggable
          />
        </MapView>*/
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  map: {
    width: getDimentions().width,
    height: getDimentions().height - 100,
  },
});
