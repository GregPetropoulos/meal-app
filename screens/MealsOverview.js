import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
// import { useRoute } from '@react-navigation/native';
import MealsList from '../component/MealList/MealsList';

const MealsOverview = ({ route, navigation }) => {
  /*
  Alternative hook    
  const route = useRoute()
         route.params.categoryId
         In screen components pass the route prop else in nested components that are not screen components use the useRoute Hook
  */
// Matching up the id in the data with the id in the route params from the navigator
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

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverview;
