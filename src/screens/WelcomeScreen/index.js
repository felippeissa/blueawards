import React, { } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
import Background from '../../assets/images/BackgroundImage.png';
import Oscar from '../../assets/images/OscarImage.png';
import Logo from '../../assets/images/LogoImage.png';
import Button from '../../components/Button'

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={Background} style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Image source={Oscar} style={{ marginBottom: 30 }} />
                    <Image source={Logo} style={{}} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsRegular' }}>Eleja o {<Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsBold' }}>melhor</Text>}</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsRegular' }}>empreendimento imobiliário</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsRegular' }}>do ano</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Button title={'Entrar'} onPress={() => {
                        navigation.navigate('SignIn');
                    }} />
                    < Button title={'Registrar'} onPress={() => {
                        navigation.navigate('SignUp');
                    }} />
                </View>
            </View>
        </ImageBackground >
    );
}

export default WelcomeScreen;