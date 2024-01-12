import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// When inside of a child component like CategoryGridTitle and need navigation use the useNavigation hook from @react-navigation/native
const Stack = createNativeStackNavigator();

// Drawer set up that gets nested in the Stack Navigator
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        // contentStyle: { backgroundColor: '3f2f25' } for unknown reason this was renamed to sceneContainerStyle
        sceneContainerStyle: { backgroundColor: '3f2f25' }

      }}>
      <Drawer.Screen name='Categories' component={CategoryScreen} options={{
        title:'All Categories'
      }} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

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
            name='Drawer'
            // name='MealsCategories'
            // Replacing with the DrawerNavigator
            // component={CategoryScreen}
            component={DrawerNavigator}
            options={{
              //title gets handled by drawer navigation
              // title: 'All Categories',
              headerShown: false
              //Moved these styles to the Drawer.Navigator
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
            options={{
              title:'About the Meal'
            }}
            //IMP for The button in the header is only applicable if no UX is needed from the MealDetailScreen
            // options={{
            //   headerRight: ()=> {
            //     return <Button color='white' title='Tap Me' onPress={()=> console.log('PRESSED')}/>
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
