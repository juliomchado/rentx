import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { CardCar } from '../../components/CardCar';


import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';


interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    };
    thumbnail: string;
}



export function Home() {
    const navigation = useNavigation();

    const car: CarData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'Ao dia',
            price: 120,
        },
        thumbnail: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png'
    }

    function handleCarDetails() {

        navigation.navigate('CarDetails')
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>

                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>

            </Header>

            <CarList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={({ item }) => <CardCar
                    data={car}
                    onPress={handleCarDetails}
                />}
                keyExtractor={(item) => String(item)}
            />

        </Container>
    );
};
