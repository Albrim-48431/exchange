import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import State from '../State';

const initialState = {
  rates: [],
  loadingRates: State.NOT_PROCESSED,
  errorOnRates: null,
};

const storeAsyncData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@favorites', jsonValue);
  } catch (e) {
    // saving error
  }
};

const slice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    getRatesStart(state) {
      state.loadingRates = State.PROCESSING;
    },
    getRatesFail(state, action) {
      state.loadingRates = State.FAILED;
      state.errorOnRates = action.payload;
    },
    getRatesSuccess(state, action) {
      state.loadingRates = State.DONE;
      state.rates = action.payload;
    },
    toggleFavoriteRate(state, action) {
      const copiedRates = state.rates.map(item => {
        if (item.name === action.payload) {
          if (item.favorite) {
            return {...item, favorite: false};
          } else {
            return {...item, favorite: true};
          }
        }
        return item;
      });
      storeAsyncData(
        copiedRates
          .filter(item => item.favorite === true)
          .map(item => item.name),
      );
      state.rates = copiedRates;
    },
  },
});
export const HomeSlice = slice;
export const {
  getRatesFail,
  getRatesStart,
  getRatesSuccess,
  toggleFavoriteRate,
} = slice.actions;
