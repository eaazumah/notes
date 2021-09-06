import React from 'react';
import styled from 'styled-components/native';

interface Props {}

const ToolBar = (props: Props) => {
  return (
    <Container>
      <Left>
        <Bold />
        <Italic />
      </Left>
      <Right>
        <More />
      </Right>
    </Container>
  );
};

const Bold = styled.TouchableOpacity``;

const Italic = styled.TouchableOpacity``;

const Left = styled.View``;

const Right = styled.View``;

const More = styled.TouchableOpacity``;

const Container = styled.KeyboardAvoidingView`
  width: 100%;
  padding: 17px;
`;

export default ToolBar;
