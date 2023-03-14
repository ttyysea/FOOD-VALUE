import { View, Text, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Glass from '../../../assets/images/glass.png';


const SearchBar = () => {

  return (
    <View>
        
        <TextInput
          style={styles.search}
          placeholder="Search" 
        >
        </TextInput>
    </View>

  )
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    width: '90%',
    marginTop: 30,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 15,
},
  

});
export default SearchBar;