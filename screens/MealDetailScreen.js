import React, { useContext, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../component/MealDetails';
import MealSubtitle from '../component/MealDetail/MealSubtitle';
import MealDetailList from '../component/MealDetail/MealDetailList';
import IconButton from '../component/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((selected) => selected.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  //*IMP FOR ADDING A BUTTON TO HEADER OF THIS PAGE
  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color={mealIsFavorite?'yellow' :'white'}
          />
        );
      }
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      {/* Dont forget to always set a width and height when fetching images over the network */}
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MealSubtitle>Ingredients</MealSubtitle>
          <MealDetailList data={selectedMeal.ingredients} />
        </View>
        <View style={styles.listContainer}>
          <MealSubtitle>Steps</MealSubtitle>
          <MealDetailList data={selectedMeal.steps} />
        </View>
      </View>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailTextStyle}
      />
    </ScrollView>
  );
};

export default MealDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: { width: '100%', height: 350 },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailTextStyle: { color: 'white' },
  listContainer: { width: '80%' },
  listOuterContainer: { width: '100%', alignItems: 'center' }
});
