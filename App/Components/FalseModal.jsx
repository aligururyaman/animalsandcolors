import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import wrongBG from '../Images/AppImages/wrongBG.png'
import wrongBtn from '../Images/AppImages/wrongAnswerBtn.png'

export default function FalseModal({ onClose }) {

    const goBack = () => {
        onClose()
    }

  return (
    <View style={styles.container}>
        <Image source={wrongBG} style={styles.imageBG}/>
        <TouchableOpacity onPress={goBack} style={styles.btnBG}>
            <Image source={wrongBtn}/>
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
        top: 150,
        left: 40,
    }
})