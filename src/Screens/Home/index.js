import {FlatList, StatusBar} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeActions from '~/Store/Home/Actions';
import RateItem from '~/Components/RateItem';
import {useState} from 'react';
import HomeHeader from '~/Components/HomeHeader';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export const dateFormat = 'YYYY-MM-DD';

const Home = () => {
  const dispatch = useDispatch();
  const rates = useSelector(state => state.Home.rates);
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (moment(date).format(dateFormat) === moment().format(dateFormat)) {
      dispatch(HomeActions.getRates('latest', baseCurrency));
      const intervalCall = setInterval(() => {
        dispatch(HomeActions.getRates(baseCurrency));
      }, 30000);
      return () => {
        clearInterval(intervalCall);
      };
    } else {
      dispatch(
        HomeActions.getRates(moment(date).format(dateFormat), baseCurrency),
      );
    }
  }, [baseCurrency, date]);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <HomeHeader
        date={date}
        setDate={setDate}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        setShow={setShow}
        onChange={onChangeDate}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={rates}
        renderItem={({item}) => <RateItem item={item} />}
      />
      {show && (
        <DateTimePicker
          display="spinner"
          value={date}
          mode="date"
          onChange={onChangeDate}
          minimumDate={new Date(2000, 0)}
          maximumDate={new Date()}
        />
      )}
    </>
  );
};

export default Home;
