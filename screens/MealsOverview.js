import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../component/MealItem';
// import { useRoute } from '@react-navigation/native';

const MealsOverview = ({ route, navigation }) => {
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

  // Setting category title with useLayoutEffect due to title chunking UI
  // useLayoutEffect is mounted at the same time the component execution, rather than useEffect after the component renders
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    // side effect here
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
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
