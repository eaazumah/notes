import React, {useEffect} from 'react';
import Logo from '../@shared/assets/logo.svg';
import {navigateToBottomTab} from '../@shared/services/navigator';
import Container from '../@shared/styled/Container';

const Splash = () => {
  useEffect(() => {
    setTimeout(navigateToBottomTab, 300);
    return;
  }, []);
  return (
    <Container>
      <Logo width={200} height={200} />
    </Container>
  );
};

export default Splash;
