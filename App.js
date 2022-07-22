import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { store } from './store'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';
import Home from "./screens/Home";



const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="splash" component={Splash} options={{headerShown:false}} />
          <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
