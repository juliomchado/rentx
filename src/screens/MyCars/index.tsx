import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { CarDTO } from './../../dtos/CarDTO';

import {
    Container
} from './styles';

export function MyCars() {

    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchCars() {

            try {
                const { data } = await api.get<CarDTO[]>('/schedules_byuser?user_id=1');

                console.log(data)
                setCars(data);

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }


        fetchCars();
    }, [])

    return (
        <Container>

        </Container>
    );
}