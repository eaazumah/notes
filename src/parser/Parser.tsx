import React from 'react';
import HTMLView from 'react-native-htmlview';
import styled from 'styled-components/native';
import parseMarkdown from './helpers/parseMarkdown';

interface Props {
  text?: string;
  opacity?: number;
  maxHeight?: number | undefined;
}

const Parser: React.FC<Props> = props => {
  const parseText = parseMarkdown(props.text);
  return <Text value={parseText} maxHeight={props.maxHeight} />;
};

const Text = styled(HTMLView).attrs<{
  maxHeight: number | undefined;
}>(props => ({
  textComponentProps: {
    style: {
      color: props.theme.primaryText,
    },
  },
  rootComponentProps: {
    overflow: 'hidden',
    maxHeight: props.maxHeight,
  },
}))<{maxHeight: number | undefined}>``;

export default Parser;
