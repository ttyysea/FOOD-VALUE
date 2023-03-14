import { View, Text , TouchableOpacity, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useState } from 'react'



const TopTab = () => {
    

    return (
        <View style={{ flex: 1 }}>
        <View
            style={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginBottom: 5,
                    height: 36,
                    position: "relative",
                    
                }}
            >
                
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#2BB439",
                        backgroundColor: "#2BB439",
                        borderRadius: 4,
                        borderRightWidth: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0
                    }}
                
                >
                    <Text style={styles.text}>
                        ประเภทอาหาร
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#2BB439",
                        borderRadius: 4,
                        borderLeftWidth: 0,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor:'white'
                    }}
                    
                >
                    <Text>
                        เมนูแนะนำ
                    </Text>
                </TouchableOpacity>
            </View>
            

        </View>
    </View>
     
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'Green',
    },
    buttonActive: {
        flex: 1,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'Green',
        borderWidth: 0.5,
        borderColor: 'Green',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
    }
})

export default TopTab