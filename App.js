import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <CategoryScreen />
    </>
  );
}

const styles = StyleSheet.create({});
