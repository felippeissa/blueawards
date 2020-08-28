import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
import Background from '../../assets/images/BackgroundImage.png';
import Card from '../../components/Card'

const DashboardScreen = () => {
    const navigation = useNavigation();
    const [DATA, setDATA] = useState([
        {
            _id: 0,
            title: 'Le Jardin',
            subTitle: 'Da simplicidade dos campos, a beleza de Paris.',
            image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            text: 'Se você deseja morar em um lugar de alto padrão e que proporcione excelente qualidade de vida, o Residencial Le Jardin é a escolha perfeita. Uma rara oportunidade em Brasília.',

        },
        {
            _id: 1,
            title: 'Evian',
            subTitle: 'De Los Angeles, uma sensação unica.',
            image: 'https://images.unsplash.com/photo-1454388683759-ee76c15fee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            text: 'Se você deseja morar em um lugar de alto padrão e que proporcione excelente qualidade de vida, o Residencial Le Jardin é a escolha perfeita. Uma rara oportunidade em Brasília.',
        },
        {
            _id: 2,
            title: 'Olimpia Thermas',
            subTitle: 'As águas mais quentes ,unidos ao conforto e segurança.',
            image: 'https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
            text: 'Se você deseja morar em um lugar de alto padrão e que proporcione excelente qualidade de vida, o Residencial Le Jardin é a escolha perfeita. Uma rara oportunidade em Brasília.',
        },

    ])
    return (
        <ImageBackground source={Background} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, paddingTop: 40, width: '100%', backgroundColor: 'transparent' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <Image style={{ height: 100, width: 100, borderRadius: 100, marginRight: 40 }} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQG07E-SreJL6g/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=I34SOY-cwrsn3LDa_IX6RVYx1Bed_AmVg1p9khYVa80' }} />
                        <View>
                            <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsBold' }}>Ola,</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'PoppinsLight' }}>Lucas Teixeira</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingTop: 40 }}>
                        <FlatList
                            data={DATA}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <Card title={item.title} subTitle={item.subTitle} image={item.image} onPress={() => {
                                    navigation.navigate('Details', { item });
                                }} />
                            }
                            keyExtractor={(item) => item._id}
                        />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    );
}

export default DashboardScreen;