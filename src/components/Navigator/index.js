import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity, } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

const Navigator = () => {
    const navigation = useNavigation();
    return (
        <View style={{ height: 80, width: '100%', paddingTop: 40, paddingLeft: 19, flexDirection: 'row' }} >
            <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.goBack() }}>
                <Feather name={'arrow-left'} size={24} color="white" />
            </TouchableOpacity>
            <Text style={{ paddingLeft: 100, color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsRegular' }}>Participantes</Text>
        </View >
    );
}

export default Navigator;
