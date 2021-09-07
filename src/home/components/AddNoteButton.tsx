import React from 'react';
import styled from 'styled-components/native';
import Icon from '../../@shared/components/Icon';
import {colors} from '../../@shared/constants';
import {openEditor} from '../../@shared/services/navigator';

interface Props {}

const AddNoteButton: React.FC<Props> = () => {
  return (
    <Container onPress={openEditor}>
      <Icon
        size={25}
        name={'note'}
        color={colors.white}
        type={'SimpleLineIcons'}
      />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  right: 15px;
  width: 60px;
  height: 60px;
  bottom: 15px;
  position: absolute;
  align-items: center;
  border-radius: 60px;
  justify-content: center;
  background-color: ${props => props.theme.primary};
`;

export default AddNoteButton;
