import React, { } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
import Background from '../../assets/images/BackgroundImage.png';

const PreDashboardScreen = () => {
    const navigation = useNavigation();
    setTimeout(function () { navigation.navigate('Dashboard') }, 4000)
    return (
        <ImageBackground source={Background} style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 100, width: 100, borderRadius: 100, marginBottom: 50 }} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQG07E-SreJL6g/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=I34SOY-cwrsn3LDa_IX6RVYx1Bed_AmVg1p9khYVa80' }} />
                <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsRegular' }}>Lucas Teixeira</Text>
            </View>
        </ImageBackground >
    );
}

export default PreDashboardScreen;