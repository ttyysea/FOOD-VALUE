import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const InputProfileScreen = () => {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Age, setAge] = useState('');
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('TabNavigation');
  };





  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Enter Your Profile</Text>

        <CustomInput 
          placeholder="Firstname" 
          value={Firstname} 
          setValue={setFirstname} 
        />
        <CustomInput 
          placeholder="Lastname" 
          value={Lastname} 
          setValue={setLastname} 
        />
        <CustomInput 
          placeholder="Age" 
          value={Age} 
          setValue={setAge} 
        />
        <CustomInput 
          placeholder="Height" 
          value={Height} 
          setValue={setHeight} 
        />
        <CustomInput 
          placeholder="Weight" 
          value={Weight} 
          setValue={setWeight} 
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        
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

export default InputProfileScreen;