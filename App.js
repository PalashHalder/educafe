import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Login from './app/screens/login';



export default function App() {
  return (
    <View style={styles.container}>
      <Login />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F8FC',
    marginTop: 20,
  },
});
