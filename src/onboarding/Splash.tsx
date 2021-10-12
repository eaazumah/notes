import React, {useEffect} from 'react';
import Logo from '../@shared/assets/logo.svg';
import {navigateToBottomTab} from '../@shared/services/navigator';
import Container from '../@shared/styled/Container';

interface Props {}

const Splash: React.FC<Props> = () => {
  useEffect(() => {
    setTimeout(() => {
      navigateToBottomTab();
    }, 1000);
  }, []);

  return (
    <Container>
      <Logo width={200} height={200} />
    </Container>
  );
};

export default Splash;
