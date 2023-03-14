import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const InputProfileScreen = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('TabNavigation');
  };

  function handleSubmit() {

    // Make an HTTP request to the backend to register the user
    fetch('http://192.168.1.5:5000/inputprofile/{$userid}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname,
        lastname,
        age,
        height,
        weight
      })
    })
    .then(response => {
      if (!response.ok) {
        // If the request was not successful, throw an error
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      if (json.error) {
        // If the server returned an error, display it to the user
        setError(json.error);
      } else {
        // Update was successful, show a success message
        setError('');
        setFirstname('');
        setLastname('');
        setAge('');
        setHeight('');
        setWeight('');
     
        navigation.navigate('TabNavigation');
      }
    })
    .catch(error => {
      console.error(error);
      setError('An error occurred');
    });
      
  }




  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Enter Your Profile</Text>

        <CustomInput 
          placeholder="Firstname" 
          value={firstname} 
          setValue={setFirstname} 
        />
        <CustomInput 
          placeholder="Lastname" 
          value={lastname} 
          setValue={setLastname} 
        />
        <CustomInput 
          placeholder="Age" 
          value={age} 
          setValue={setAge} 
        />
        <CustomInput 
          placeholder="Height" 
          value={height} 
          setValue={setHeight} 
        />
        <CustomInput 
          placeholder="Weight" 
          value={weight} 
          setValue={setWeight} 
        />

        <CustomButton text="Submit" onPress={handleSubmit} />

        
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