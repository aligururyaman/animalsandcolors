import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import imageBG from '../Images/AppImages/playBG.png'
import * as Font from 'expo-font';
import AnimalGameComp from "./AnimalGameComp";


export default function PlayArea({ navigation }) {

    const [fontsLoaded] = Font.useFonts({
        Mon: require('../Utils/Fonts/Schoolbell-Regular.ttf'),
        MonM: require('../Utils/Fonts/Montserrat-Medium.ttf'),
        MonB: require('../Utils/Fonts/Montserrat-Bold.ttf'),
  })
  return (
    <ImageBackground source={imageBG} style={styles.BgImage}>
        <View style={styles.backBtnCon}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                <Text style={{fontSize: 30, fontFamily: 'MonM'}}>Geri</Text>
            </TouchableOpacity>
        </View>
        <View>
            <AnimalGameComp />
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    BgImage:{
        flex: 1,
    },
    backBtnCon:{
        padding:20,
        marginTop: 10
    },
    backBtn:{
        height:40,
        width:80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E72929',
        borderRadius: 30,
        top:20
    }
})