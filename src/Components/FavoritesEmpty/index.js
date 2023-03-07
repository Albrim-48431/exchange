import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FavoritesEmpty = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Favorites list is empty 😢</Text>
    </View>
  );
};

export default FavoritesEmpty;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 100,
  },
});
