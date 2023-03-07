import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import RateItem from '~/Components/RateItem';
import FavoritesEmpty from '~/Components/FavoritesEmpty';

const FavoriteCurrencies = () => {
  const rates = useSelector(state => state.Home.rates);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={rates.filter(item => item.favorite === true)}
      renderItem={({item}) => <RateItem item={item} />}
      ListEmptyComponent={FavoritesEmpty}
    />
  );
};

export default FavoriteCurrencies;
