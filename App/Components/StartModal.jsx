import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import startBG from '../Images/AppImages/startModal.png'
import startBtn from '../Images/AppImages/baslaBtn.png'

export default function StartModal({ onClose }) {

    const goBack = () => {
        onClose()
    }

  return (
    <View style={styles.container}>
        <Image source={startBG} style={styles.imageBG}/>
        <TouchableOpacity onPress={goBack} style={styles.btnBG}>
            <Image source={startBtn}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 20,
        borderRadius: 10,
        borderColor: '#800080'
    },
    imageBG:{
        position: 'relative'
    },
    btnBG:{
        position: 'absolute',
        top: 200,
        left: 30,
    }
})