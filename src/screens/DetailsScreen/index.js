import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
import Background from '../../assets/images/BackgroundImage.png';
import Navigator from '../../components/Navigator'
import Button from '../../components/Button'
const DashboardScreen = (navigation) => {


    return (
        <ImageBackground source={Background} style={{ flex: 1 }}>
            <Navigator />
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', paddingBottom: 40, paddingTop: 40 }}>
                <Image source={{ uri: navigation.route.params.item.image }} style={{ height: 340, width: '100%' }} />
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 31 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsRegular' }}>{navigation.route.params.item.title}</Text>
                    <Text style={{ paddingLeft: 20, paddingRight: 20, color: '#FFFFFF', fontSize: 18, fontFamily: 'PoppinsRegular' }}>{navigation.route.params.item.text}</Text>
                </View>
                <Button title={'Votar'} />
            </View>
        </ImageBackground >
    );
}

export default DashboardScreen;