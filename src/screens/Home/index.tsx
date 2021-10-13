import React, { useEffect, useState } from 'react';
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

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { Load } from '../Load';

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
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    function handleCarDetails() {

        navigation.navigate('CarDetails')
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        }

        fetchCars();

    }, []);

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
            {loading ? <Load /> : (
                <CarList
                    data={cars}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <CardCar
                            data={item}
                            onPress={handleCarDetails}
                        />
                    }
                />
            )}


        </Container>
    );
};
