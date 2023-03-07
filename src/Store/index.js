import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {HomeSlice} from './Home/Reducers';

export default configureStore({
  reducer: {
    Home: HomeSlice.reducer,
  },
  middleware: [thunk],
});
