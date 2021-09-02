import {render} from '@testing-library/react-native';
import React from 'react';
import Icon, {IconProps} from '../Icon';

function setup(props: IconProps) {
  return render(<Icon {...props} />);
}

test('should render icon', async () => {
  const screen = setup({
    size: 35,
    name: 'add',
    type: 'Ionicons',
  });

  expect(screen.toJSON()).toMatchSnapshot();
});
