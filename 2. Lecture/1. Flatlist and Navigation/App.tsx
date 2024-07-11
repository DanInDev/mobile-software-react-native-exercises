import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MyFlatlist from './src/screens/MyFlatlist';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="MyFlatlist" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyFlatlist" component={MyFlatlist} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;