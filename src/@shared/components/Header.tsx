import React from 'react';
import styled from 'styled-components/native';
import useTheme from '../hooks/useTheme';
import {openSetting} from '../services/navigator';
import Icon from './Icon';

interface Props {
  title: string;
}

const Header: React.FC<Props> = props => {
  const {theme} = useTheme();
  return (
    <Container testID={'header'}>
      <Title testID={'title'}>{props.title}</Title>
      <Settings testID={'open-settings'} onPress={openSetting}>
        <Icon
          size={25}
          name={'settings'}
          type={'Feather'}
          color={theme.primaryText}
        />
      </Settings>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 45px;
  margin-top: 50px;
  flex-direction: row;
  padding-horizontal: 17px;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 800;
  color: ${props => props.theme.primaryText};
`;

const Settings = styled.TouchableOpacity``;

export default Header;
