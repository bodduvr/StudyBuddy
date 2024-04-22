 //Tab Navigator

/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen1 from './navi-screens/HomeScreen1'
import ProfileScreen1 from './navi-screens/ProfileScreen1'
import DetailScreen1 from './navi-screens/DetailScreen1'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen1}
            options={{ title: "Home" }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen1}
            options={{ title: "Profile" }}
          />
          <Tab.Screen
            name="Details"
            component={DetailScreen1}
            options={{ title: "Details" }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/

//--------Drawer Navigator
// import "react-native-gesture-handler"; // This import must be at the top

// import { View, Text, Button } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import DashboardScreen2 from "./drawer-screens/DashboardScreen";
// import SettingsScreen from "./drawer-screens/SettingsScreen";
// import HomeScreen2 from "./drawer-screens/HomeScreen2";
// import AboutScreen2 from "./drawer-screens/AboutScreen2";

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen2}/>
//         <Drawer.Screen name="Dashboard" component={DashboardScreen2}/>
//         <Drawer.Screen name="About" component={AboutScreen2}/>
//         <Drawer.Screen name="Settings" component={SettingsScreen}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }



// //Stack Navigator


/*import * as React from 'react';
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component = {HomeScreen} />
        <Stack.Screen name="AboutScreen" component = {AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './drawer-screens/LoginScreen';
import SignupScreen from './drawer-screens/SignupScreen';
import AboutScreen from './drawer-screens/AboutScreen';
import DDashboard from './drawer-screens/Dashboard';
import ResourceScreen from './drawer-screens/ResourcesScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Login" component={AuthStack} />
        <Drawer.Screen name="Discussion Groups" component={AboutScreen} />
        <Drawer.Screen name="Dashboard" component={DDashboard} />
        <Drawer.Screen name="Resources" component={ResourceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
