import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverview';
// When inside of a child component like CategoryGridTitle and need navigation use the useNavigation hook from @react-navigation/native
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='MealsCategories' component={CategoryScreen}/>  
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>  
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
