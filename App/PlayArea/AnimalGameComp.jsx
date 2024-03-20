import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import hayvanlarData from '../data/hayvan.json'
import FalseModal from '../Components/FalseModal';
import TrueModal from '../Components/TrueModal';
import StartModal from '../Components/StartModal';
import * as Font from 'expo-font';

export default function AnimalGameComp() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctModalVisible, setCorrectModalVisible] = useState(false);
    const [falseModalVisible, setFalseModalVisible] = useState(false);
    const [startModalVisible, setStartModalVisible] = useState(false);

    useEffect(() => {
        setStartModalVisible(true)
    },[])

    const handleOptionPress = (option) => {
        setSelectedOption(option);
    
        const currentQuestion = hayvanlarData.hayvanlar[currentQuestionIndex];
        if (option === currentQuestion.correctAnswer) {
            setCorrectModalVisible(true)
        } else {
            setFalseModalVisible(true)
        }
        console.log(currentQuestion.hayvan);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCorrectModalVisible(false);
        setFalseModalVisible(false);
    };

    const [fontsLoaded] = Font.useFonts({
        Mon: require('../Utils/Fonts/Schoolbell-Regular.ttf'),
        MonM: require('../Utils/Fonts/Montserrat-Medium.ttf'),
        MonB: require('../Utils/Fonts/Montserrat-Bold.ttf'),
  })
    const currentQuestion = hayvanlarData.hayvanlar[currentQuestionIndex];

    return (
        <View>
            <View style={styles.container}>
            <View>
            <Image source={currentQuestion.hayvan}  />
            </View>

                
                <View style={styles.quest}>
                    <Text style={{color: '#E72929', fontSize:27, fontFamily: 'Mon'}}>{currentQuestion.question}</Text>
                </View>
    
                <View style={styles.answer}>
                    {currentQuestion.options.map((option, oi) => (
                        <TouchableOpacity
                            key={oi}
                            style={styles.answerBtn}
                            onPress={() => handleOptionPress(option)}
                        >
                            <Text style={{ fontSize:30,fontFamily: 'Mon',}}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
                            {/* Doğru olduğunda açılacak Modal */}
            <Modal animationType="slide" transparent={true} visible={correctModalVisible} onRequestClose={handleNextQuestion}>
                <View style={styles.centeredView}>
                    <TrueModal onClose={handleNextQuestion} />
                </View>
            </Modal>
                             {/* yanlış olduğunda açılacak Modal */}
            <Modal animationType="slide" transparent={true} visible={falseModalVisible} onRequestClose={() => setFalseModalVisible(false)}>
                <View style={styles.centeredView}>
                    <FalseModal onClose={() => setFalseModalVisible(false)} />
                </View>
            </Modal>
                            {/* Başlangıçta açılacak Modal */}
            <Modal animationType="slide" transparent={true} visible={startModalVisible} onRequestClose={() => setFalseModalVisible(false)}>
                <View style={styles.centeredView}>
                    <StartModal onClose={() => setStartModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        top: 20
    },

    answer:{
        top:40,
        gap: 20
    },
    answerBtn:{
        height:60,
        width:300,
        backgroundColor: '#E72929',
        borderRadius:20,
        alignItems:'center',
        justifyContent: 'center'
    },
    quest:{
        top:10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    nextButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
    },
});
