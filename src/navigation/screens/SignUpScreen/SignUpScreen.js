import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('InputProfile');
  };

  const onsignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyOfUsePressed = () => {
    console.warn("onPrivacyOfUsePressed");
  };

  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder="Email" 
          value={Email} 
          setValue={setEmail} 
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        />
        <CustomInput 
          placeholder="Password Repeat" 
          value={passwordRepeat} 
          setValue={setPasswordRepeat} 
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyOfUsePressed}>Privacy Policy</Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton 
          text="Have an account? Sign In" 
          onPress={onsignInPress} 
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
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  text: { 
    color: 'white',
    marginVertical: 10,
  },
  link: {
    color: '#4B50C1',
  },

});

export default SignUpScreen;