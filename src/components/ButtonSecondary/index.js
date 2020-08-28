import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, } from 'react-native-gesture-handler';

// import { Container } from './styles';

const ButtonSecondary = ({ title, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={{ height: 48, width: 315, borderRadius: 6, marginBottom: 7.5, marginTop: 0, backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'center' }} >
        <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>;
}

export default ButtonSecondary;