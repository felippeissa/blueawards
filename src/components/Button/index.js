import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Button = ({ title, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={{ height: 48, width: 315, borderRadius: 6, marginBottom: 7.5, marginTop: 7.5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{ color: '#012561' }}>{title}</Text>
    </TouchableOpacity>;
}

export default Button;