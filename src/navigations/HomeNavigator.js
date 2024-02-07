/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Wallet} from '../screens';
import {ROUTES,COLORS} from '../constants';
import Profile  from '../screens/home/Profile';
import Blogs from '../screens/home/Blogs';
import Quiz from '../screens/home/Quiz';
import Gallery from '../screens/home/Gallery';
import TestResult from '../screens/home/TestResult';
// import Task from '../screens/home/Task';
// import Student_Details from '../screens/home/Student_Details';
//import About from '../screens/home/About';
// import AddStudent from '../screens/home/AddStudent';
// import Add  from '../screens/home/Add';
// import AddTask  from '../screens/home/AddTask';


const Stack = createStackNavigator();

function HomeNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.Blogs} component={Blogs} />
      <Stack.Screen name={ROUTES.Quiz} component={Quiz} />
      <Stack.Screen name={ROUTES.Gallery} component={Gallery} />
      <Stack.Screen name={ROUTES.TestResult} component={TestResult} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      {/* <Stack.Screen name={ROUTES.TASK} component={Task} /> */}
      {/* <Stack.Screen name={ROUTES.ADD} component={Add} /> */}
      {/* <Stack.Screen name={ROUTES.Student_Details} component={Student_Details} /> */}
      {/* <Stack.Screen name={ROUTES.ADDTASK} component={AddTask} /> */}
      {/* <Stack.Screen name={ROUTES.AddStudent} component={AddStudent} /> */}
    </Stack.Navigator>
  );
}

export default HomeNavigator;