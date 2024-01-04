import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';
import { Asset } from 'expo-asset';

const TeachersLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const svgUri = Asset.fromModule(require('./assents/teacherss.svg')).uri;

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with Student ID:', studentId, 'and Password:', password);
  };

  return (
    <View >
      <Svg width="400" height="400">
        <SvgImage
          width="100%"
          height="100%"
          href={svgUri}
          style={{ marginTop: 20 }}
        />
      </Svg>
      <View style={{ marginLeft: 10, marginRight: 10, borderTopRadius: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'blue', marginTop: 10, marginLeft: 10 }}>Sign In</Text>
      <Text style={{ marginVertical: 20, marginLeft: 20 }}>Enter your login details to get started</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, borderRadius: 8 }}
        placeholder="Teacher ID"
        secureTextEntry={true}
        value={studentId}
        onChangeText={text => setStudentId(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, borderRadius: 8 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
     <View style={{ borderRadius: 8, overflow: 'hidden' }}>
  <Button
    title="Login"
    onPress={handleLogin}
  />
</View>
<Text style={{ marginVertical: 10 }}>You do not have an account? Sign In</Text>

</View>
    </View>
  );
};

export default TeachersLogin;
