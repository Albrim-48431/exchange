import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Menu} from 'react-native-paper';
import {useSelector} from 'react-redux';

const BaseCurrencyList = ({handleItemPress}) => {
  const rates = useSelector(state => state.Home.rates);

  return (
    <FlatList
      style={styles.container}
      data={rates}
      renderItem={({item}) => (
        <Menu.Item
          onPress={() => handleItemPress(item.name)}
          title={item.name}
        />
      )}
    />
  );
};

export default BaseCurrencyList;

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
  },
});
