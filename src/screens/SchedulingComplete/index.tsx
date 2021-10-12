import React from 'react';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';

import { StatusBar, useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {

    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    function handleBackToHome() {
        navigation.navigate('Home');
    };


    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <LogoSvg width={width} />
            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>

                <Message>
                    Agora vc só precisa ir {'\n'}
                    até uma concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton
                    title="ok"
                    onPress={handleBackToHome}
                />
            </Footer>

        </Container>
    );
}