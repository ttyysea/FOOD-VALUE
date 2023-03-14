import { View, Text , StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react"
import {enableLatestRenderer, Marker} from 'react-native-maps';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';


const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;


const RestaurantFoodScreen = ({ route }) => {

  const [item1, setItem1] = useState([])
  const [iconColors, setIconColors] = useState({});
  const [height, setHeight] = useState(0);

  const handleLayout = (event) => {
    setHeight(event.nativeEvent.layout.height);
  };
  
  useEffect(() => {
    fetch('http://192.168.1.6:5000/api/attractions/restaurantFoodFood/' + route.params.id + '/' + route.params.idres)
    .then(res => res.json())
    .then((result) => {
      setItem1(result)
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  

  const navigation = useNavigation();
  const goMap = (id, idres) => {
    navigation.navigate('Restaurant', {id: id, idres: idres });
  };

  

  return (
  
      <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
        
        <View >
          <Text style={styles.textProfile}>{item1.name}</Text>
          <Text style={{color: "#494948"}}>────────────────────────────────────</Text>
        </View>

        <View style={styles.cardContainer}  >
          <Image 
            style={styles.imageStyle}
            source={{ uri: item1.picstore}} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,}}
          >
            <Text style={styles.textBlack}>{item1.name}</Text>
            <Text style={styles.textRed}>{item1.timeopen}</Text>
          </View>
        </View>

        <Text style={styles.textBig}>ช่องทางการติดต่อ</Text>
       
        <View onLayout={handleLayout} style={styles.cardflex} >
          <Icon name='phone' color='green' size={15}/>
          <Text style={styles.textBoxX}>{item1.phone}</Text>
        </View>
        
        <Text style={styles.textBig}>ที่อยู่</Text>
       
        <View onLayout={handleLayout} style={styles.cardflex} >
          <Icon name='map' color='green' size={15}/>
          <Text style={styles.textBoxX}>{item1.location}</Text>
        </View>

        
      
        <Text style={styles.textBig}>แผนที่</Text>
        <TouchableOpacity onPress={() => goMap(item1.id, item1.idres)}>
          <View style={{ marginLeft:13, marginTop:10, width: deviceWidth -25, height: 200, borderRadius: 10,borderWidth: 1, marginBottom: 40}}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: 8.641589505488273,
                longitude: 99.8973945826196,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker 
                coordinate={{
                  latitude: 8.641589505488273,
                  longitude: 99.8973945826196,
                    
                }}
              />
            </MapView>
              
            
          </View>
        </TouchableOpacity>
         
           
  
      </ScrollView>   

  )
}

const styles = StyleSheet.create({
    
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
   
    color:"black",
  
  },
  textBoxX:{
   
    color:"black",
    marginLeft: 5,
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
  card: {
    borderWidth: 1,
    borderColor:"white",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    width: deviceWidth - 20,
  },
  cardflex: {
    borderWidth: 1,
    borderColor:"white",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    width: deviceWidth - 20,
    flexDirection: 'row',
  },


});

export default RestaurantFoodScreen;