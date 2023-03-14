import { View, Text , StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { useState, useEffect } from "react"
import { useNavigation } from '@react-navigation/native';



const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;

const LoveScreen = () => {

  const navigation = useNavigation();
  const goDetail = (id) => {
    navigation.navigate('Food', {id: id});
  };

  const [items1, setItems1] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://192.168.1.7:5000/api/lovefood')
      .then(res => res.json())
      .then((result) => {
        setItems1(result)
        setIsLoading(false) 
      
      })
  }, [isLoading])

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
        <View >
          <Text style={styles.textProfile}>เมนูที่ถูกใจ</Text>
          <Text style={{color: "#494948"}}>────────────────────────────────────</Text>
        </View>
        <FlatList 
          data={items1}
          renderItem={renderItem}
          keyExtractor ={item => item.id}
          refreshing={isLoading}
          onRefresh={() => setIsLoading(true)}
          nestedScrollEnabled ={true}
        />

        
     

        
      </ScrollView>   
    
      
   



  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#1C1D1B',
    
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


export default LoveScreen;