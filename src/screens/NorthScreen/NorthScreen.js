import { View, Text, StyleSheet,Dimensions, TouchableOpacity,  TextInput, Image, } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopTab from '../../components/TopTab';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react"
import { FlatList } from 'react-native-gesture-handler';

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;



const NorthScreen = () => {

  let numColumns=2;

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [liked, setLiked] = useState(false);

  const toggleLike = (foodId) => {
    const userid = 20;
    setLiked(!liked);
  
    if (liked) {
      // Send DELETE request to server to remove the "like"
      fetch(`http://192.168.1.5:5000/api/lovefood?food_id=${foodId}&users_userid=${userid}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    } else {
      // Send POST request to server to add the "like"
      fetch('http://192.168.1.5:5000/api/lovefood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          food_id: foodId,
          users_userid: userid,
          status: 1
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    }
  };

  useEffect(() => {
    fetch('http://192.168.1.5:5000/api/northfood')
      .then(res => res.json())
      .then((result) => {
        setItems(result)
        setIsLoading(false) 
      })
  }, [isLoading])

  const navigation = useNavigation();
  const goDetail = (id) => {
    navigation.navigate('Food', {id: id});
  };

  const renderItem = ({ item }) => (
    <View style={{
        flexDirection: 'row',
      }}>
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
            <TouchableOpacity onPress={() => toggleLike(item.id)}>
              {liked ? (
                <Icon name="heart" size={32} color="red" solid/>
              ) : (
                <Icon name="heart" size={32} color="black" solid/>
              )}
            </TouchableOpacity>
          </View>
      </TouchableOpacity>
      
    </View>
  )

  
  return (
  
      <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
      <View >
        <SearchBar/>
        <Text style={{color: "#494948"}}>────────────────────────────────────</Text>
        
        <View 
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 25,
  
          }}
        >
          <Text style={styles.textBig}>
            ภาคเหนือ
          </Text>
          <Text style={styles.textSmall}>
            ทั้งหมด
          </Text>
        </View>
        
        <FlatList 
          data={items}
          renderItem={renderItem}
          keyExtractor ={item => item.id}
          refreshing={isLoading}
          onRefresh={() => setIsLoading(true)}
          numColumns ={numColumns}
          nestedScrollEnabled ={true}
        />
        
      </View>
      </ScrollView>

  )
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
  touchBox: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: 'white',
    width: '45%',
    borderWidth: 1,
    borderRadius: 5,
  },
  textBig:{
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  textSmall: {
    fontSize: 14,
    color: '#9EA4A9',
    opacity: 0.5,

  },
  cardContainer: {
    
    marginBottom: 10,
    width: 150,
    backgroundColor: "#494948",
    height: 190,
    marginLeft:20,
    borderRadius: radius,
    shadowColor: "white",
    shadowOffset:{
      width: 5,
      height: 5,
    },
  },
  imageStyle: {
    height: 140,
    width: 150,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  },


});
export default NorthScreen;