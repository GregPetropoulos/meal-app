import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
// When inside of a child component like CategoryGridTitle and need navigation use the useNavigation hook from @react-navigation/native
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          // Default styles for all screens
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          <Stack.Screen
            name='MealsCategories'
            component={CategoryScreen}
            options={{
              title: 'All Categories'
              // default styles for a single screen
              // headerStyle:{backgroundColor:'#351401'},
              // headerTintColor:'white',
              // contentStyle:{backgroundColor:'3f2f25'}
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // One way to use options as a function
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
           <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            // One way to use options as a function
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
