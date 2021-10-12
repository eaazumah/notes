import React from 'react';
import {render} from '@testing-library/react-native';
import ConditionRender, {ConditionRenderComponent} from '../ConditionRender';
import {Text} from 'react-native';

const TestComponent: React.FC = () => {
  return <Text>Some content to be rendered</Text>;
};

describe('ConditionRender', () => {
  it('should render component', () => {
    const Component = ConditionRender(TestComponent);
    const screen = render(<Component renderIf />);

    expect(screen.toJSON()).toMatchSnapshot();
    expect(screen.getByText(/Some content to be rendered/)).toBeDefined();
  });

  it('should not render component', () => {
    const Component = ConditionRender(TestComponent);
    const screen = render(<Component renderIf={false} />);

    expect(screen.toJSON()).toMatchSnapshot();
    expect(screen.queryByText(/Some content to be rendered/)).toBeNull();
  });
});

describe('ConditionRenderComponent', () => {
  it('should render component', () => {
    const screen = render(
      <ConditionRenderComponent renderIf>
        <TestComponent />
      </ConditionRenderComponent>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
    expect(screen.getByText(/Some content to be rendered/)).toBeDefined();
  });

  it('should not render component', () => {
    const screen = render(
      <ConditionRenderComponent renderIf={false}>
        <TestComponent />
      </ConditionRenderComponent>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
    expect(screen.queryByText(/Some content to be rendered/)).toBeNull();
  });
});
