import { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight } from 'react-native';

// Navigation
import { NavigationContainer, useFocusEffect, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// RN vector icons
import FAIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'

// SCREENS
import Feed from './screens/main/Feed';
import Progress from './screens/main/Progress';
import Store from './screens/main/Store';
import Menu from './screens/main/Menu';

// Main
function EmptyScreen(){
  return null
}


// NAVIGATORS
// Screen Header Titles
function getHeaderTitle(route){
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Main'

  switch(routeName){
    case 'Main':
      return 'Main '
    case 'Details':
      return 'Store'
    case 'Create Post':
      return 'Create Post'
  }
}

// Tab Navigator
const Tab = createBottomTabNavigator()
function HomeScreen({ navigation, route }){
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }} >
      <Tab.Screen name="Feed" component={Feed} options={{
      tabBarIcon: () =>  <FAIcon name='feed' size={20} />
      }}/>
      <Tab.Screen name="Progress" component={Progress} 
      options={{
      tabBarIcon: () =>  <FAIcon name='bar-chart' size={20} />
      }}
      />
      <Tab.Screen name="Null" component={EmptyScreen} 
      options={{
        tabBarLabel:() => { return null}, 
        tabBarIcon: () =>  <Image 
        style={{ width: 60, height: 60, backgroundColor: 'red', borderRadius: 50,}}
        source={require('./assets/favicon.png')}
        />
      }}/>
      <Tab.Screen name="Store" component={Store} options={{
      tabBarIcon: () =>  <FAIcon name='shopping-bag' size={20} />
      }}/>
      <Tab.Screen name="Menu" component={Menu} options={{
      tabBarIcon: () =>  <EntypoIcon name='dots-three-horizontal' size={20} />
      }}/>

    </Tab.Navigator>
  )
}

// Stack Navigator
const Stack = createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          }
      }}>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({route, navigation}) => ({ 
          headerTitle: getHeaderTitle(route),        
          })}/>
        {/* <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({title: route.params.productName})} initialParams={{initialId: 99}}/> */}
        {/* <Stack.Screen name="Create Post" component={CreatePost} /> */}
      </Stack.Navigator>
    </NavigationContainer>
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


export default App