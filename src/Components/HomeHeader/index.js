import {Platform, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {Button, Menu} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '~/navigation/HomeNavigator';
import BaseCurrencyList from '../BaseCurrencyList';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {useState} from 'react';
import moment from 'moment';
import {dateFormat} from '~/Screens/Home';

const HomeHeader = ({
  baseCurrency,
  setBaseCurrency,
  date,
  onChange,
  setShow,
}) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleItemPress = useCallback(name => {
    setBaseCurrency(name);
    closeMenu();
  }, []);

  const showAndroidDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChange,
      mode: 'date',
      minimumDate: new Date(2000, 0),
      maximumDate: new Date(),
    });
  };

  const openCalendarHandler = () => {
    Platform.OS === 'android' ? showAndroidDatePicker() : setShow(true);
  };

  return (
    <View style={styles.menuContainer}>
      <View style={styles.filterContainer}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={styles.menu}
          anchor={
            <Button onPress={openMenu}>Base Currency: {baseCurrency}</Button>
          }>
          <BaseCurrencyList handleItemPress={handleItemPress} />
        </Menu>
        <Button onPress={openCalendarHandler}>
          Date: {moment(date).format(dateFormat)}
        </Button>
      </View>
      <Button onPress={() => navigation.navigate(SCREENS.FAVORITES)}>
        Favorites -{'>'}
      </Button>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    marginTop: 30,
    marginLeft: 120,
  },
  filterContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
