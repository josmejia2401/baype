import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export async function getLocationAsync() {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  return new Promise((resolve, reject) => {
    try {
      const permissions = Permissions.askAsync(Permissions.LOCATION);
      permissions.then((permission) => {
        let { status } = permission;
        if (status !== 'granted') {
          reject(new Error('Permission to access location was denied'));
        } else {
          let location = Location.getCurrentPositionAsync({
            enableHighAccuracy: false,
            maximumAge: 5000,
          }).catch((error) => reject(error));
          location
            .then((loc) => {
              resolve(loc);
            })
            .catch((error) => reject(error));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
