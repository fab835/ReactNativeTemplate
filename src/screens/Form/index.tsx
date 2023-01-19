
import { Button } from 'components/Button';
import { Container } from 'components/Container/styles';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export function Form() {

    const navigation = useNavigation();

    function handleNewOrder() {
      navigation.navigate("Home");
    }

    return (
        <Container>
            
            <Button
                title="Home"
                onPress={handleNewOrder}
            />
        </Container>
    );
}