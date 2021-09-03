import React, {ReactNode} from 'react';
import ParsedText from 'react-native-parsed-text';
import styled from 'styled-components/native';

interface Props {
  opacity?: number;
  children: ReactNode;
  numberOfLines?: number;
}

const Parser = (props: Props) => {
  return (
    <Container>
      <Text numberOfLines={props.numberOfLines} opacity={props.opacity}>
        {props.children}
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled(ParsedText)<{opacity?: number}>`
  font-size: 15px;
  opacity: ${props => props.opacity || 1};
  color: ${props => props.theme.primaryText};
`;

export default Parser;
