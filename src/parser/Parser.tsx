import React, {ReactNode} from 'react';
import ParsedText from 'react-native-parsed-text';
import styled from 'styled-components/native';
import {parsers} from './helpers/_constants';

interface Props {
  opacity?: number;
  children: ReactNode;
  numberOfLines?: number;
}

const Parser: React.FC<Props> = props => {
  return (
    <Text
      parse={parsers}
      opacity={props.opacity}
      numberOfLines={props.numberOfLines}>
      {props.children}
    </Text>
  );
};

const Text = styled(ParsedText)<{opacity?: number}>`
  font-size: 15px;
  opacity: ${props => props.opacity || 1};
  color: ${props => props.theme.primaryText};
`;

export default Parser;
