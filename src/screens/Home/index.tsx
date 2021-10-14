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
    CarList,
    MyCarsButton
} from './styles';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { Load } from '../../components/Load';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

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
    const theme = useTheme();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car });
    }

    function handleOpenMyCars() {

        navigation.navigate('MyCars');
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const { data } = await api.get<CarDTO[]>('/cars');
                setCars(data)
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
                        Total de {cars.length} carros
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
                            onPress={() => handleCarDetails(item)}
                        />
                    }
                />
            )}


            <MyCarsButton
                onPress={handleOpenMyCars}
            >
                <Ionicons
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}
                />
            </MyCarsButton>


        </Container>
    );
};
