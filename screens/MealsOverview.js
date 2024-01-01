import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../component/MealItem';
// import { useRoute } from '@react-navigation/native';

const MealsOverview = ({ route }) => {
  /*
  Alternative hook    
  const route = useRoute()
         route.params.categoryId
         In screen components pass the route prop else in nested components that are not screen components use the useRoute Hook
  */
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;
const styles = StyleSheet.create({
  container: {
    flex: 1
    // padding: 16
  }
});
