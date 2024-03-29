import { StatusBar } from 'expo-status-bar';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

//Global State Management
// ====================
// CONTEXT IMP
// import FavoritesContextProvider from './store/context/favorites-context';
// REDUX IMP
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
// ====================

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
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}>
      <Drawer.Screen
        name='Categories'
        component={CategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* Uncomment for Redux  provider use */}
      <Provider store={store}>
      {/* Uncomment for context provider use */}
      {/* <FavoritesContextProvider> */}
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
                title: 'About the Meal'
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
      {/* </FavoritesContextProvider> */}
      </Provider>

    </>
  );
}
