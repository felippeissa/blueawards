import React, { } from 'react';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
import Background from '../../assets/images/BackgroundImage.png';
import Logo from '../../assets/images/LogoImage.png';
import Button from '../../components/Button'
import ButtonThird from '../../components/ButtonThird'
import Input from '../../components/Input'

const SignUpScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={Background} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, paddingTop: 80, width: '100%', }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <Image source={Logo} style={{ marginBottom: 100 }} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'transparent', paddingBottom: 20 }}>
                        <Input title={'Nome'} pHolder={'Digite seu Nome'} icon={'user'} />
                        <Input title={'CPF'} pHolder={'Digite seu CPF'} icon={'tag'} />
                        <Input title={'Email'} pHolder={'Digite seu Email'} icon={'mail'} />
                        <Input title={'Senha'} pHolder={'Digite sua Senha'} icon={'lock'} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <Button title={'Cadastrar'} onPress={() => {
                            navigation.navigate('PreDashboard');
                        }} />
                        <ButtonThird title={'Voltar'} onPress={() => {
                            navigation.navigate('Welcome');
                        }} />

                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    );
}

export default SignUpScreen;