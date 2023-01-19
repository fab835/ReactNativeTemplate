
import { Container } from 'components/Container/styles';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Button } from 'components/Button';

export function Home() {
    const navigation = useNavigation();

    function handleNewOrder() {
      navigation.navigate("CreateAlarm");
    }
    return (
        <Container>
            <Button
                title="CreateAlarm"
                onPress={handleNewOrder}
            />
        </Container>
    );
}