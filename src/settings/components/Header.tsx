import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import Icon from '../../@shared/components/Icon';
import useTheme from '../../@shared/hooks/useTheme';

interface Props {}

const Header: React.FC<Props> = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <Container testID={'header-editor'}>
      <Left onPress={navigation.goBack}>
        <Icon size={25} name={'arrow-back'} color={theme.primaryText} />
      </Left>
      <Right />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  margin-top: 50px;
  flex-direction: row;
  padding-horizontal: 17px;
  justify-content: space-between;
`;

const Left = styled.TouchableOpacity``;

const Right = styled.View`
  flex-direction: row;
`;

export default Header;
