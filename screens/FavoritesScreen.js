import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../component/MealList/MealsList';

import { MEALS } from '../data/dummy-data';
// Global State Management
// ====================
// CONTEXT
// import { FavoritesContext } from '../store/context/favorites-context';

// REDUX
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
  // REDUX IMP
  const { ids } = useSelector((state) => state.favoriteMeals);

  // CONTEXT IMP
  // const { ids } = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) => ids.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
