import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/images/New-Logo-4-Small.png")} style={styles.bannerImage}/>
        <Text style={styles.title}></Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    logo:{
        height:40,
        width:140,
        marginVertical:30,
    },
    bannerImage:{
        height:250,
        width:231,
        marginVertical:20,
    },
    title:{
        
    }
})