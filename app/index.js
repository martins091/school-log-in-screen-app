import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Asset } from 'expo-asset';
import StudentsLogin from './studentsLogIn';
import TeachersLogin from './teachersLogIn';

const Home = () => {

  return (
    <View>
    {/* <StudentsLogin /> */}
    <TeachersLogin />
    </View>
  )
}
    
export default Home;
