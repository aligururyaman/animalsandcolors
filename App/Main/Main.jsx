import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native'
import imageBG from '../Images/AppImages/mainBG.png'
import * as Font from 'expo-font';

export default function Main({navigation }) {
    
        const [fontsLoaded] = Font.useFonts({
          Mon: require('../Utils/Fonts/Schoolbell-Regular.ttf'),
          MonM: require('../Utils/Fonts/Montserrat-Medium.ttf'),
          MonB: require('../Utils/Fonts/Montserrat-Bold.ttf'),
    })

  return (
    <ImageBackground source={imageBG} style={styles.BgImage}>
        <View style={styles.topMain}>
            <Text style={{color: '#E72929',fontFamily:'Mon', fontSize:80}}>Renkler</Text>
            <Text style={{color: '#E72929',fontFamily:'Mon', fontSize:50}}>Ve</Text>
            <Text style={{color: '#E72929',fontFamily:'Mon', fontSize:80}}>Hayvanlar</Text>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.playBtn} onPress={() => navigation.navigate('PlayArea')}>
                <Text style={{fontFamily:'MonM',fontSize:40}}>Renkler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playBtn} onPress={() => navigation.navigate('AnimalPlayArea')}>
                <Text style={{fontFamily:'MonM',fontSize:40}}>Hayvanlar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exitBtn}>
                <Text style={{fontFamily:'MonM',fontSize:40}}>Çıkış</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconCon}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => Linking.openURL('https://www.x.com/aligururdotjs')}>
            <Image source={require('../Images/icons/twitter.png')}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn} onPress={() => Linking.openURL('mailto:aligururyaman@gmail.com')}>
            <Image source={require('../Images/icons/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn} onPress={() => Linking.openURL('https://www.linkedin.com/in/aligururyaman/')}>
            <Image source={require('../Images/icons/linkedin.png')} />
        </TouchableOpacity>
        </View>
        <View style={{top:150, alignItems:'center'}}>
            <Text style={{fontFamily:'MonB',}}>© YamanApp</Text>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    BgImage:{
        flex: 1
    },
    topMain:{
        top:140,
        alignItems: 'center',
    },
    btnContainer:{
        top: 50,
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    playBtn:{
        height:50,
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF204E',
        borderRadius: 30
    },
    exitBtn:{
        height:50,
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF204E',
        borderRadius: 30
    },
    adContainer: {
        alignItems: 'center',
      },
    iconCon: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    iconBtn:{
        top: 130,
    }
})