import React, { } from 'react';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
import Background from '../../assets/images/BackgroundImage.png';
import Oscar from '../../assets/images/OscarImage.png';
import Logo from '../../assets/images/LogoImage.png';
import Button from '../../components/Button'
import ButtonSecondary from '../../components/ButtonSecondary'
import ButtonThird from '../../components/ButtonThird'
import Input from '../../components/Input'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={Background} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, paddingTop: 80, width: '100%', }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <Image source={Oscar} style={{ marginBottom: 30 }} />
                        <Image source={Logo} style={{ marginBottom: 30 }} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'transparent', paddingBottom: 50, paddingTop: 50 }}>
                        <Input title={'Email'} pHolder={'Digite seu Email'} icon={'mail'} />



                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <Button title={'Entrar'} onPress={() => {
                            navigation.navigate('Welcome');
                        }} />
                        <ButtonThird title={'Voltar'} onPress={() => {
                            navigation.navigate('SignIn');
                        }} />

                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    );
}

export default ForgotPasswordScreen;