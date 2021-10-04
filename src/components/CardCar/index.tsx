import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage
} from './styles';

export function CardCar() {
    return (
        <Container>
            <Details>
                <Brand>Audi</Brand>
                <Name>RS 5 Coupé</Name>

                <About>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 120</Price>
                    </Rent>

                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </Details>

            <CarImage source={{ uri: '' }} />
        </Container>
    );
}