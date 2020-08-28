import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity, } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Card = ({ title, subTitle, onPress, image }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ height: 162, width: 352, borderRadius: 6, marginBottom: 7.5, marginTop: 7.5, backgroundColor: 'white', alignItems: 'flex-start', justifyContent: 'center' }} >
            <View style={{ flex: 1, flexDirection: 'row', borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', }}>
                <Image style={{ marginLeft: 9, marginRight: 13, width: 97, height: 150, borderRadius: 10 }} source={{ uri: image }} />
                <View style={{ flex: 1, backgroundColor: 'transparent', marginRight: 10 }}>
                    <Text style={{ color: '#3f3f3f', fontSize: 18, fontFamily: 'PoppinsRegular' }}>{title}</Text>
                    <Text style={{ color: '#3f3f3f', fontSize: 14, fontFamily: 'PoppinsRegular' }}>{subTitle}</Text>
                </View>
            </View>

        </TouchableOpacity >
    );
}

export default Card;
