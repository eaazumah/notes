import React from 'react';
import styled from 'styled-components/native';
import Icon from '../../@shared/components/Icon';
import {colors} from '../../@shared/constants';
import useTheme from '../../@shared/hooks/useTheme';

interface Props {
  isEditing: boolean;
  toggleIsEditing: () => void;
}

const ToolBar = (props: Props) => {
  const {theme} = useTheme();
  return (
    <SafeAreaView>
      <Container>
        <ToggleEdit onPress={props.toggleIsEditing}>
          <Icon
            size={25}
            type={'MaterialIcons'}
            color={props.isEditing ? colors.danger : theme.primaryText}
            name={props.isEditing ? 'edit-off' : 'edit'}
          />
        </ToggleEdit>
      </Container>
    </SafeAreaView>
  );
};

const ToggleEdit = styled.TouchableOpacity``;

const SafeAreaView = styled.SafeAreaView``;

const Container = styled.KeyboardAvoidingView`
  width: 100%;
  padding: 17px;
  flex-direction: row;
  justify-content: flex-end;
`;

export default ToolBar;
