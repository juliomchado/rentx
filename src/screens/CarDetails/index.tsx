import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { StatusBar } from 'react-native';
import {
    Container,
    Header,
    CarImages
} from './styles';

export function CarDetails() {
    return (

        <Container>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImages >
                <ImageSlider
                    imagesUrl={['https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png']}
                />
            </CarImages>
        </Container>
    );
}