import {renderHook, RenderHookOptions} from '@testing-library/react-hooks';
import React from 'react';
import {TestReduxProvider} from './Providers';

const renderHookReduxWrap = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: Omit<RenderHookOptions<TProps>, 'wrapper'>,
) => {
  return renderHook(callback, {
    ...options,
    wrapper: ({children}) => <TestReduxProvider>{children}</TestReduxProvider>,
  });
};

export default renderHookReduxWrap;
