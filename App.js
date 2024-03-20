import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './App/Main/Main';
import PlayArea from './App/PlayArea/PlayArea';
import GameComp from './App/PlayArea/GameComp';
import AnimalPlayArea from './App/PlayArea/AnimalPlayArea';
import AnimalGameComp from './App/PlayArea/AnimalGameComp';


export default function App() {


  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen 
          name='Main' 
          component={Main}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen
          name='PlayArea'
          component={PlayArea}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen
          name='GameComp'
          component={GameComp}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen
          name='AnimalPlayArea'
          component={AnimalPlayArea}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen
          name='AnimalGameComp'
          component={AnimalGameComp}
          options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

