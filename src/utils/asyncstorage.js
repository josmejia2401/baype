import { AsyncStorage } from 'react-native';

export async function setData(id, value) {
  try {
    const _ID = `@BayPeApp:${id}`;
    await AsyncStorage.setItem(_ID, value);
  } catch (error) {
    throw error;
  }
}

export async function getData(id) {
  try {
    const _ID = `@BayPeApp:${id}`;
    const value = await AsyncStorage.getItem(_ID);
    return value;
  } catch (error) {
    throw error;
  }
}

export async function removeData(id) {
  try {
    const _ID = `@BayPeApp:${id}`;
    const value = await AsyncStorage.removeItem(_ID);
    return value;
  } catch (error) {
    throw error;
  }
}
