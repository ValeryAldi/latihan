import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  Login,
  Register,
  Splash,
  UploadPhoto,
  Librarian,
  Messages,
  Libraries,
  ChooseLibrarian,
  Chatting,
  UserProfile,
  UpdateProfile,
  LibrarianProfile,
  AboutMe,
  DetailNews,
  DetailMap,
  DetailMap2,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Librarian" component={Librarian} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Library" component={Libraries} />
      <Tab.Screen name="About Me" component={AboutMe} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseLibrarian"
        component={ChooseLibrarian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LibrarianProfile"
        component={LibrarianProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailNews"
        component={DetailNews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMap"
        component={DetailMap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMap2"
        component={DetailMap2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
