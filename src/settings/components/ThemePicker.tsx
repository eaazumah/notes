import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import useTheme from '../../@shared/hooks/useTheme';

interface Props {
  isVisible: boolean;
  setIsVisible?: (e: boolean) => void;
}

const ThemePicker: React.FC<Props> = props => {
  const {updateTheme} = useTheme();

  const changeToDark = () => {
    updateTheme('dark');
    props.setIsVisible?.(false);
  };

  const changeToLight = () => {
    updateTheme('light');
    props.setIsVisible?.(false);
  };

  const changeToSystem = () => {
    updateTheme('system');
    props.setIsVisible?.(false);
  };

  return (
    <Modal testID={'theme-picker'} isVisible={props.isVisible}>
      <Content>
        <Item onPress={changeToLight} testID={'light-item'}>
          <Text>Light</Text>
        </Item>
        <Item onPress={changeToDark} testID={'dark-item'}>
          <Text>Dark</Text>
        </Item>
        <Item onPress={changeToSystem} testID={'system-item'}>
          <Text>System Theme</Text>
        </Item>
      </Content>
    </Modal>
  );
};

const Text = styled.Text`
  color: ${props => props.theme.primaryText};
`;

const Content = styled.View`
  width: 100%;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${_ => _.theme.backgroundColor};
`;

const Item = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-color: ${_ => _.theme.surface};
  background-color: ${_ => _.theme.backgroundColor};
`;

export default ThemePicker;
