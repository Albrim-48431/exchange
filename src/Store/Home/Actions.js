import AsyncStorage from '@react-native-async-storage/async-storage';
import * as API from '~/API';
import Rate from '../Models/Rate';
import * as HomeReducers from './Reducers';

class HomeActions {
  static getRates(date, base) {
    return dispatch => {
      dispatch(HomeReducers.getRatesStart());
      API.Home.getRates(date, base)
        .then(async res => {
          const asyncFavorites = await this.getAsyncData();
          let rates = [];
          for (const key in res?.rates) {
            if (res?.rates.hasOwnProperty(key)) {
              let favorite = false;
              const favoriteFound = asyncFavorites?.find(item => item === key);
              if (favoriteFound) {
                favorite = true;
              }
              rates.push(new Rate(key, res?.rates[key], favorite));
            }
          }
          dispatch(HomeReducers.getRatesSuccess(rates));
        })
        .catch(() =>
          dispatch(HomeReducers.getRatesFail('Error while fetching')),
        );
    };
  }

  static toggleFavoriteRate(name) {
    return dispatch => {
      dispatch(HomeReducers.toggleFavoriteRate(name));
    };
  }

  static getAsyncData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
}

export default HomeActions;
