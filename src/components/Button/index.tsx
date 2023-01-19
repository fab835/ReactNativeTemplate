import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ComponentContainer, Title, Load } from './styles';

interface IButton extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: IButton) {
  return (
    <ComponentContainer disabled={!!isLoading && isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </ComponentContainer>
  )
}
