import React from 'react';
import styled from 'styled-components/native';
import NoNote from '../assets/note.svg';
import {deviceHeight} from '../constants';

interface Props {}

const Empty: React.FC<Props> = () => {
  return (
    <Container>
      <NoNote width={200} height={200} />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: ${deviceHeight - 200}px;
  background-color: ${props => props.theme.backgroundColor};
`;

export const renderEmpty = () => {
  return <Empty />;
};

export default Empty;
