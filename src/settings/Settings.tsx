import React, {useState} from 'react';
import styled from 'styled-components/native';
import pkg from '../../package.json';
import Header from './components/Header';
import ThemePicker from './components/ThemePicker';
interface Props {}

const Settings: React.FC<Props> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showThemePicker = () => setIsVisible(true);
  return (
    <Container>
      <Header />
      <Content>
        <Item onPress={showThemePicker} testID={'theme-item'}>
          <Text>Theme</Text>
        </Item>
        <Item>
          <Text>App Version: {pkg.version}</Text>
        </Item>
      </Content>
      <ThemePicker isVisible={isVisible} setIsVisible={setIsVisible} />
    </Container>
  );
};

const Text = styled.Text`
  color: ${props => props.theme.primaryText};
`;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const Item = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 27px;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: ${props => props.theme.surface};
`;

export default Settings;
