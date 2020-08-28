import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity, } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
// import { Container } from './styles';

const Input = ({ title, pHolder, icon }) => {
    return (
        <View>
            {icon === 'lock' ? (<View style={{ marginBottom: 20 }}>
                <Text style={{ color: 'white' }}>Email</Text>
                <View style={{ height: 48, width: 315, borderRadius: 6, paddingLeft: 11, marginBottom: 7.5, marginTop: 7.5, alignItems: 'center', backgroundColor: 'white', flexDirection: 'row' }} >
                    <Feather name={icon} size={24} color="#3f3f3f" style={{ paddingRight: 17 }} />
                    <TextInput placeholder={pHolder} placeholderTextColor="#3f3f3f" secureTextEntry />
                </View>
            </View>) : (<View style={{ marginBottom: 20 }}>
                <Text style={{ color: 'white' }}>Email</Text>
                <View style={{ height: 48, width: 315, borderRadius: 6, paddingLeft: 11, marginBottom: 7.5, marginTop: 7.5, alignItems: 'center', backgroundColor: 'white', flexDirection: 'row' }} >
                    <Feather name={icon} size={24} color="#3f3f3f" style={{ paddingRight: 17 }} />
                    <TextInput placeholder={pHolder} placeholderTextColor="#3f3f3f" />
                </View>
            </View>)}
        </View>
    )
}

export default Input;