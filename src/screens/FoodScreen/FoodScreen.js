import { View, Text , StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react"
import Icon from 'react-native-vector-icons/FontAwesome5';


const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;


const FoodScreen = ({ route }) => {

  const [loved, setLoved] = useState([false]);
  const [item1, setItem1] = useState([])
  const [iconColors, setIconColors] = useState({});
  const [item2, setItem2] = useState([]);
  const [height, setHeight] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = (foodId) => {
    const userid = 20;
    setLiked(!liked);
  
    if (liked) {
      // Send DELETE request to server to remove the "like"
      fetch(`http://192.168.1.6:5000/api/lovefood?food_id=${foodId}&users_userid=${userid}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    } else {
      // Send POST request to server to add the "like"
      fetch('http://192.168.1.6:5000/api/lovefood', {
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

  const handleLayout = (event) => {
    setHeight(event.nativeEvent.layout.height);
  };
  
  useEffect(() => {
    fetch('http://192.168.1.6:5000/api/attractions/'+route.params.id)
    .then(res => res.json())
    .then((result) => {
      setItem1(result)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    fetch('http://192.168.1.6:5000/api/attractions/restaurant/'+route.params.id)
    .then(res => res.json())
    .then((result) => {
      setItem2(result)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  

  const navigation = useNavigation();
  const onMouse = (id, idres) => {
    navigation.navigate('RestaurantFood', {id: id, idres: idres });
  };
  const goDetail = (id) => {
    
    navigation.navigate('Food', {id: id});
  };

  

  const renderItem = ({ item }) => (
    <View>
       <TouchableOpacity style={styles.cardContainer4}  onPress={() => onMouse(item.id, item.idres)}>
          <Image 
            style={styles.imageStyle2}
            source={{ uri: item.picstore}} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,}}
          >
            <Text style={styles.textBlack}>{item.name}</Text>
            <Text style={styles.textRed}>{item.timeopen}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );

  return (
  
      <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
        
        <View >
          <Text style={styles.textProfile}>{item1.foodname}</Text>
          <Text style={{color: "#494948"}}>────────────────────────────────────</Text>
        </View>

        <View style={styles.cardContainer}  >
          <Image 
            style={styles.imageStyle}
            source={{ uri: item1.image}} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,}}
          >
            <TouchableOpacity onPress={() => toggleLike(item1.id)}>
              {liked ? (
                <Icon name="heart" size={32} color="red" solid/>
              ) : (
                <Icon name="heart" size={32} color="black" solid/>
              )}
            </TouchableOpacity>
            <Text>|</Text>
            <Text style={{
                fontSize:18,
                fontWeight: "bold",
                color: "black",
                }}
            >{item1.kcal} Kcal </Text>
            <Text>|</Text>
            <Text style={{
                fontSize:18,
                fontWeight: "bold",
                color: "black",
                }}
            >{item1.typefood}</Text>
          </View>
        </View>

        
        <Text style={styles.textBig}>โภชนาการ</Text>
       
        <View onLayout={handleLayout} style={styles.card} >
          
          <Text style={styles.textBox}>{item1.nutrition}</Text>
            
        </View>
     
        <Text style={styles.textBig}>ส่วนประกอบ</Text>
       
       <View onLayout={handleLayout} style={styles.card} >
         
         <Text style={styles.textBox}>{item1.ingredients}</Text>
           
       </View>
       <Text style={styles.textBig}>ร้านอาหาร</Text>
        <FlatList 
          data={item2}
          renderItem={renderItem}
          keyExtractor ={item => item.id}
          nestedScrollEnabled ={true}
        />

        

        
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
    marginLeft: 20,
    width: deviceWidth - 35,
  },


});

export default FoodScreen;