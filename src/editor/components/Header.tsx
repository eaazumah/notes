import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import {ConditionRenderComponent} from '../../@shared/components/ConditionRender';
import Icon from '../../@shared/components/Icon';
import useTheme from '../../@shared/hooks/useTheme';

interface Props {
  isArchived?: boolean;
  isFavorite?: boolean;
  toggleNoteArchived?: () => void;
  toggleNoteFavorite?: () => void;
}

const Header: React.FC<Props> = props => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <Container testID={'header-editor'}>
      <Left onPress={navigation.goBack}>
        <Icon size={25} name={'arrow-back'} color={theme.primaryText} />
      </Left>
      <Right>
        <ConditionRenderComponent renderIf={!props.isArchived}>
          <Star onPress={props.toggleNoteFavorite}>
            <Icon
              size={25}
              type={'Feather'}
              name={'bookmark'}
              color={props.isFavorite ? theme.primary : theme.primaryText}
            />
          </Star>
        </ConditionRenderComponent>
        <Archive onPress={props.toggleNoteArchived}>
          <Icon
            size={25}
            type={'MaterialCommunityIcons'}
            name={'archive-arrow-down-outline'}
            color={props.isArchived ? theme.primary : theme.primaryText}
          />
        </Archive>
      </Right>
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

const Star = styled.TouchableOpacity``;

const Archive = styled.TouchableOpacity``;

export default Header;
