import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Divider, List} from 'react-native-paper';
import FavoriteStar from '~/Assets/Icons/FavoriteStar';
import NotFavoriteStart from '~/Assets/Icons/NotFavoriteStart';
import {useDispatch} from 'react-redux';
import HomeActions from '~/Store/Home/Actions';

const RateItem = ({item}) => {
  const dispatch = useDispatch();

  const favoriteButtonHandler = () => {
    dispatch(HomeActions.toggleFavoriteRate(item.name));
  };

  return (
    <>
      <List.Item
        title={item.name}
        description={item.value}
        right={() => (
          <TouchableOpacity
            onPress={favoriteButtonHandler}
            style={styles.starContainer}>
            {item.favorite ? <FavoriteStar /> : <NotFavoriteStart />}
          </TouchableOpacity>
        )}
      />
      <Divider />
    </>
  );
};

export default RateItem;

const styles = StyleSheet.create({
  starContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
