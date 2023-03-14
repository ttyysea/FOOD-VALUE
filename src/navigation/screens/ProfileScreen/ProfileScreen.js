import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Profile from '../../../assets/images/tee.jpg'
import { TextInput } from 'react-native-gesture-handler'


const ProfileScreen = () => {
  return (
      <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
        <View >
          <Text style={styles.textProfile}>ข้อมูลส่วนตัว</Text>
          <Text style={{color: "#494948"}}>────────────────────────────────────</Text>
          <View  
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,}}
            >
              <Image 
              source={Profile} 
              style={styles.profile}
              />
              <Text style={styles.textUser}>
                Wanchai{"\n"}
                <Text style={styles.textPic}>
                แก้ไขรูปโปรไฟล์
                </Text>
              </Text>
              
          </View>
          <TouchableOpacity style={styles.touchBox}>
            <Text style={styles.textMain}>
              ชื่อ                                          
            </Text>
            <TextInput style={styles.textEdit}>
              ปวีณ
            </TextInput>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchBox}>
            <Text style={styles.textMain}>
              นามสกุล                                          
            </Text>
            <TextInput style={styles.textEdit}>
              แก้วทอง
            </TextInput>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchBox}>
            <Text style={styles.textMain}>
              อายุ                                          
            </Text>
            <TextInput style={styles.textEdit}>
              21
            </TextInput>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchBox}>
            <Text style={styles.textMain}>
              ส่วนสูง                                          
            </Text>
            <TextInput style={styles.textEdit}>
              170
            </TextInput>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchBoxLast}>
            <Text style={styles.textMain}>
              น้ำหนัก                                          
            </Text>
            <TextInput style={styles.textEdit}>
              50
            </TextInput>
          </TouchableOpacity>

          
        </View>
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
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '95%',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 10,
    height: 70,
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
  profile: {
    width: '50%',
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: 400/2,
    marginTop: 5,
    marginLeft: 5,
  },
  textUser: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 100,
    marginTop: 60,
    padding: 5,
  },
  textPic: {
    color: '#9EA4A9',
    fontSize: 10,
   
  },
  textMain: {
    color:'#9EA4A9',
    paddingTop: 5,
    
  },
  textEdit :{
    color:'black',
    fontWeight: "bold",
    fontSize: 18,
  },
  touchBoxLast: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '95%',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 10,
    height: 70,
    marginBottom: 50,
  },
  

});


export default ProfileScreen;