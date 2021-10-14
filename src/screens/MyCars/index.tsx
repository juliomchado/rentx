import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';

import { api } from '../../services/api';
import { CarDTO } from './../../dtos/CarDTO';

import {
    Container,
    Header,
    Title,
    Subtitle,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,

} from './styles';

import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { CardCar } from '../../components/CardCar';
import { Load } from '../Load';

interface CarProps {
    id: string;
    user_id: string;
    car: CarDTO;
};

export function MyCars() {

    const [cars, setCars] = useState<CarProps[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    const theme = useTheme();

    useEffect(() => {

        async function fetchCars() {

            try {
                const { data } = await api.get<CarProps[]>('/schedules_byuser?user_id=1');

                console.log(data)
                setCars(data);

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }


        fetchCars();
    }, []);

    function handleBack() {
        navigation.goBack();
    };


    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton
                    onPress={handleBack}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>

                <Subtitle>
                    Conforto, segurança e praticidade.
                </Subtitle>
            </Header>
            {
                loading ? <Load /> :
                    <Content>
                        <Appointments>
                            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                        </Appointments>

                        <FlatList
                            data={cars}
                            keyExtractor={item => String(item.id)}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <CardCar data={item.car} />

                            )}
                        />
                    </Content>
            }
        </Container>
    );
}