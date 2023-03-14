import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;

const SearchScreen = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Make a fetch request to the server to retrieve all food items
    fetch('http://192.168.1.5:5000/food')
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    // Make a fetch request to the server to search the database
    fetch(`http://192.168.1.5:5000/food/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error));
  };

  const navigation = useNavigation();
  const goDetail = (id) => {
    
    navigation.navigate('Food', {id: id});
  };

  

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => goDetail(item.id)} >
          <Image 
            style={styles.imageStyle}
            source={{uri : item.image }} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,}}
          >
            <Text>{item.foodname}</Text>
            <Text>{item.typefood}</Text>
          </View>
    </TouchableOpacity>
  )

  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
          style={styles.textInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search for food"/>
          <TouchableOpacity onPress={handleSearch} >
            <Icon style={styles.icony} name="search" color="Green" size={30} solid />
          </TouchableOpacity>
        </View>
        <Text style={{color: "#494948"}}>────────────────────────────────────</Text>
        {results.length > 0 ? (
              <FlatList
                data={results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            ) : (
              <Text>No results</Text>
            )}
      </ScrollView>  



  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#1C1D1B',
    
  },
  icony:{
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 400/2,
    padding: 10
   
  },
  textInput:{
    backgroundColor: 'white',
    width: '75%',
    marginTop: 30,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 15,
  },
  longButton:{
    backgroundColor: 'green',
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
  textProfile: {
    fontSize: 24,
    color:'white',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth - 40,
    backgroundColor: "white",
    height: 190,
    marginLeft:20,
    borderRadius: radius,
    shadowColor: "white",
    shadowOffset:{
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 140,
    width: deviceWidth -40,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  },

});

export default SearchScreen;