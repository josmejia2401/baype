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
import MapView from 'react-native-maps';
//components
import { getDimentions } from '../../utils/dimensions';

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
    locationResult: null,
    location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = (mapRegion) => {
    //{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }
  };

  _handleMapOnRady = () => {
    //{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: false,
      maximumAge: 5000,
    });
    this.setState({
      locationResult: JSON.stringify(location),
      location: location,
      mapRegion: location,
      loading: false,
    });
    //console.log('Location', JSON.stringify(location));
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
        <MapView
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
        </MapView>
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
