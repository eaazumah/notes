import React from 'react';
import NoNote from '../assets/note.svg';
import Container from '../styled/Container';
interface Props {}

const Empty: React.FC<Props> = () => {
  return (
    <Container>
      <NoNote width={200} height={200} />
    </Container>
  );
};

export default Empty;
