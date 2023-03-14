import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import React, { useState } from 'react';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [item, setItem] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('TabNavigation');
  };
  

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onsignUpPress = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = () => {
    fetch('http://192.168.1.5:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          
          // Navigate to the home screen
          
        } else {
          setError(data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
      navigation.navigate('TabNavigation');
  };

  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} 
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
        />

        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={handleLogin} />

        <CustomButton 
          text="─────────────  or  ─────────────" 
          onPress={onForgotPasswordPressed} 
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton 
          text="Don't have an account? Sign Up" 
          onPress={onsignUpPress} 
          type="TERTIARY"
        />

        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#1C1D1B'
  },
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1C1D1B',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },

});

export default SignInScreen;