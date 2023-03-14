import { View, Text , StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react"

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;


const FoodScreen = ({ route }) => {

  const [item, setItem] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.7:5000/api/attractions/restaurant/'+route.params.id)
    .then(res => res.json())
    .then((result) => {
      setItem(result)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const navigation = useNavigation();
  const onMouse = () => {
    navigation.navigate('Restaurant');
  };
  
  return (
  
      <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
        
        <View >
          <Text style={styles.textProfile}>{item.foodname}</Text>
          <Text style={{color: "#494948"}}>────────────────────────────────────</Text>
        </View>

        <View style={styles.cardContainer}  >
          <Image 
            style={styles.imageStyle}
            source={{ uri: item.image}} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,}}
          >
            <Icon name="heart" solid style={styles.iconStyle} size={20} color="black" />
            <Text>|</Text>
            <Text style={{
                fontSize:18,
                fontWeight: "bold",
                color: "black",
                }}
            >462 Kcal </Text>
            <Text>|</Text>
            <Icon name="eye" solid size={20} color="black" style={styles.iconStyle2}>   9587</Icon>
          </View>
        </View>

        
        <Text style={styles.textBig}>โภชนาการ</Text>
       
        <View style={styles.cardContainer2}  >
          
          <Text style={styles.textBox}>{item.nutrition}</Text>
            
        </View>
     
        <Text style={styles.textBig}>ส่วนประกอบ</Text>
       
       <View style={styles.cardContainer3}  >
         
         <Text style={styles.textBox}>{item.ingredients}</Text>
           
       </View>
       <Text style={styles.textBig}>ร้านอาหาร</Text>
       <TouchableOpacity style={styles.cardContainer4}  onPress={onMouse}>
          <Image 
            style={styles.imageStyle2}
            source={require('../../../assets/images/kaosoy.jpg')} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,}}
          >
            <Text style={styles.textBlack}>หลานย่าโม</Text>
            <Text style={styles.textRed}> ปิดอยู่</Text>
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

export default FoodScreen;