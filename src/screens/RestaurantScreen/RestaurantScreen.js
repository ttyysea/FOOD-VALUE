import { View, Text , StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import { useState, useEffect } from "react"
import { useNavigation } from '@react-navigation/native';
import {enableLatestRenderer, Marker} from 'react-native-maps';
import MapView from 'react-native-maps';

enableLatestRenderer();

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;


const RestaurantScreen = ({route}) => {

  const [item, setItem] = useState({})
  const navigation = useNavigation();
 

  useEffect(() => {
    fetch('http://192.168.1.6:5000/api/attractions/restaurantFoodFood/' + route.params.id + '/' + route.params.idres)
    .then(res => res.json())
    .then((result) => {
      setItem(result)
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
  
      
        <View style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                <Marker 
                coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                    
                }}
                title={item.name}/>
            </MapView>

            
                
            
        </View>
        
     
      
  )
}

const styles = StyleSheet.create({

  map: {
    ...StyleSheet.absoluteFillObject,
    flex:1
  },

  iconStyle:{
    
    marginLeft: 10,
 
  },
  iconStyle2:{

    marginRight: 10,

  },
  textRed:{
    color:'crimson',
  },
  textBlack:{
    color:'black',
  },
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
    width: deviceWidth - 20,
    backgroundColor: "white",
    height: 240,
    marginLeft: 10,
   
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
    height: 190,
    width: deviceWidth -20,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    
  },
  textBig:{
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 20,
    marginLeft:20,
  },
  textBox:{
    marginLeft: 10,
    marginRight: 15,
    marginTop: 5,
    color:"black",
  },
  cardContainer2: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth - 20,
    backgroundColor: "white",
    height: 100,
    marginLeft: 10,
   
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

  cardContainer3: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth - 20,
    backgroundColor: "white",
    height: 260,
    marginLeft: 10,
   
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
  cardContainer4: {
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
  },
  imageStyle2: {
    height: 140,
    width: deviceWidth -40,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  },

});

export default RestaurantScreen;