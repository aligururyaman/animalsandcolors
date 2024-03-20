import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import trueBG from '../Images/AppImages/trueBG.png'
import trueBtn from '../Images/AppImages/trueBtn.png'

export default function TrueModal({ onClose }) {

    const goBack = () => {
        onClose()
    }

  return (
    <View style={styles.container}>
        <Image source={trueBG} style={styles.imageBG}/>
        <TouchableOpacity onPress={goBack} style={styles.btnBG}>
            <Image source={trueBtn}/>
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