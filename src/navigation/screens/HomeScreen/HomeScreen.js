import { View, Text, StyleSheet,Dimensions, Button, TouchableOpacity,  TextInput, Image, } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react"
import { FlatList } from 'react-native-gesture-handler';


const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;



const HomeScreen = () => {

  let numColumns=2;

  const [items1, setItems1] = useState(null)
  const [items2, setItems2] = useState(null)
  const [items3, setItems3] = useState(null)
  const [items4, setItems4] = useState(null)
  const [loved, setLoved] = useState([false]);
  const [isLoading, setIsLoading] = useState(true)


  
  
  useEffect(() => {
    fetch('http://192.168.1.7:5000/api/northfood4')
      .then(res => res.json())
      .then((result) => {
        setItems1(result)
        setIsLoading(false) 
      
      })
  }, [isLoading])

  useEffect(() => {
    fetch('http://192.168.1.7:5000/api/southfood4')
      .then(res => res.json())
      .then((result) => {
        setItems2(result)
        setIsLoading(false) 
      
      })
  }, [isLoading])

  useEffect(() => {
    fetch('http://192.168.1.7:5000/api/centralfood4')
      .then(res => res.json())
      .then((result) => {
        setItems3(result)
        setIsLoading(false) 
      
      })
  }, [isLoading])

  useEffect(() => {
    fetch('http://192.168.1.7:5000/api/northeastfood4')
      .then(res => res.json())
      .then((result) => {
        setItems4(result)
        setIsLoading(false) 
      
      })
  }, [isLoading])

  

  const navigation = useNavigation();
  const goDetail = (id) => {
    navigation.navigate('Food', {id: id});
  };

  const lovePress = (id) => {
    fetch('http://192.168.1.7:5000/api/addlovefood/'+id,{
    method: 'POST',
    
    }).catch((error) => {
      console.error(error);
    });
    setLoved(true);
  };

  const lovePress2 = (id) => {
    fetch('http://192.168.1.7:5000/api/deletelovefood/'+id,{
    method: 'DELETE',
    
    });
    setLoved(false);
  };
  
  const goNorth =() => {
    navigation.navigate('North')
  };

  const goSouth =() => {
    navigation.navigate('South')
  };

  const goCentral =() => {
    navigation.navigate('Central')
  };

  const goNortheast =() => {
    navigation.navigate('Northeast')
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
            <Button 
              title="Love"
              onPress={() => lovePress(item.id)}  />
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
          <Text style={styles.textSmall} onPress={goNorth}>
            ทั้งหมด
          </Text>
        </View>
        
        <FlatList 
          data={items1}
          renderItem={renderItem}
          keyExtractor ={item => item.id}
          refreshing={isLoading}
          onRefresh={() => setIsLoading(true)}
          numColumns ={numColumns}
          nestedScrollEnabled ={true}
        />

        <View 
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 25,
  
          }}
        >
          <Text style={styles.textBig}>
            ภาคใต้
          </Text>
          <Text style={styles.textSmall} onPress={goSouth}>
            ทั้งหมด
          </Text>
        </View>
        
        <FlatList 
          data={items2}
          renderItem={renderItem}
          keyExtractor ={item => item.id}
          refreshing={isLoading}
          onRefresh={() => setIsLoading(true)}
          numColumns ={numColumns}
          nestedScrollEnabled ={true}
        />

        <View 
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 25,
  
          }}
        >
          <Text style={styles.textBig}>
            ภาคกลาง
          </Text>
          <Text style={styles.textSmall} onPress={goCentral}>
            ทั้งหมด
          </Text>
        </View>
        
        <FlatList 
          data={items3}
          renderItem={renderItem}
          keyExtractor ={item => item.id}
          refreshing={isLoading}
          onRefresh={() => setIsLoading(true)}
          numColumns ={numColumns}
          nestedScrollEnabled ={true}
        />

        <View 
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 25,
  
          }}
        >
          <Text style={styles.textBig}>
            ภาคอีสาน
          </Text>
          <Text style={styles.textSmall} onPress={goNortheast}>
            ทั้งหมด
          </Text>
        </View>
        
        <FlatList 
          data={items4}
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
export default HomeScreen;