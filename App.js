// import { useEffect, useState, useCallback } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight } from 'react-native';

// // Navigation
// import { NavigationContainer, useFocusEffect, getFocusedRouteNameFromRoute } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// // RN vector icons
// import FAIcon from 'react-native-vector-icons/FontAwesome'
// import EntypoIcon from 'react-native-vector-icons/Entypo'
// import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import Ionicon from 'react-native-vector-icons/Ionicons'

// // SCREENS
// import Feed from './screens/main/Feed';
// import Progress from './screens/main/Progress';
// import Store from './screens/main/Store';
// import Menu from './screens/main/Menu';


// // Main Tab button
// function EmptyScreen(){
//   return null
// }


// // NAVIGATORS
// // Tab Navigator
// const Tab = createBottomTabNavigator()

// // tab bar active / inactive colors
// const activeColor = '#1e6eca' 
// const inactiveColor = '#a2adbb'

// function HomeScreen({ navigation, route }){
//   return (
//     <Tab.Navigator screenOptions={{
//       headerShown: false,
//       tabBarActiveTintColor: activeColor,
//       tabBarInactiveTintColor: inactiveColor
//     }} >
//       <Tab.Screen name="Feed" component={Feed} options={{
//       tabBarIcon: ({ focused }) =>  
//       <MCIcon 
//       name='view-dashboard' 
//       size={20} 
//       color={focused ? activeColor : inactiveColor} 
//       />
//       }}/>
//       <Tab.Screen name="Progress" component={Progress} 
//       options={{
//       tabBarIcon: ({ focused }) =>  <EntypoIcon name='bar-graph' size={20} color={focused ? activeColor : inactiveColor}/>
//       }}
//       />
//       <Tab.Screen name="Null" component={EmptyScreen} 
//       options={{
//         tabBarLabel:() => { return null}, 
//         tabBarIcon: () =>  
//         <>
//         <View style={styles.tabBar.mainButton}>
//           <Image 
//         style={styles.tabBar.mainButtonImage}
//         source={require('./assets/v2.png')}
//         />
//         </View>
//         </>
//       }}/>
//       <Tab.Screen name="Store" component={Store} options={{
//       tabBarIcon: ({ focused }) =>  <FAIcon name='shopping-bag' size={20} color={focused ? activeColor : inactiveColor}/>
//       }}/>
//       <Tab.Screen name="Menu" component={Menu} options={{
//       tabBarIcon: ({ focused }) =>  <EntypoIcon name='dots-three-horizontal' size={20} color={focused ? activeColor : inactiveColor}/>
//       }}/>
//     </Tab.Navigator>
//   )
// }

// // Stack Navigator
// const Stack = createNativeStackNavigator()
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'
//       screenOptions={{
//       }}>
//         <Stack.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={({route, navigation}) => ({ 
//           headerShadowVisible: false,
//           headerTitle: '',
//           headerRight: () => 
//           <View style={styles.headerRight}>
//               <View>
//                 <MCIcon 
//                 name='bell' 
//                 size={20} 
//                 color={inactiveColor}
//                 />
//                 <View style={styles.bellBadge} />
//             </View>
//             <Ionicon 
//               name='person' 
//               size={20} 
//               color={inactiveColor} 
//               />
//             </View>
//           })}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     width: 65, 
//     height: 25,
//     marginRight: 5,
//     marginBottom: 10,
//     justifyContent: 'space-between'
//   },
//   bellBadge: {
//     width: 10, 
//     height: 10,
//     borderRadius: 50,
//     borderColor: '#fff',
//     borderStyle: 'solid',
//     borderWidth: 2,
//     backgroundColor: 'red', 
//     position: 'absolute', 
//     top: 0, 
//     right: 0,
//   },
//   tabBar: {
//     mainButton: {
//       backgroundColor: '#e44384', 
//       width: 45, 
//       height: 45,
//       marginTop: 5, 
//       borderRadius: 50,
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingTop: 5,
//     },
//     mainButtonImage: {
//       width: 18, 
//       height: 18
//     }
//   }
// });


// export default App

import { useState } from 'react'

// import stacks
import SignedInStack from './screens/navigation/SignedInStack'
import SignedOutStack from './screens/navigation/SignedOutStack'

function App(){
  const [isSignedIn, setIsSignedIn] = useState(true)

return isSignedIn ? <SignedInStack /> : <SignedOutStack />

}

export default App