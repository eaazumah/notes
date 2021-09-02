import {} from '@testing-library/react-hooks';
import renderHookReduxWrap from '../../../__testUtils__/renderHookProvider';
import {darkTheme, lightTheme} from '../../constants';
import useTheme from '../../hooks/useTheme';

describe('The useTheme hook', () => {
  it('should describe a closed modal by default', () => {
    const {result}: any = renderHookReduxWrap(useTheme);
    const mode = result.current.mode;
    const expected = mode === 'light' ? lightTheme : darkTheme;
    expect(result.current.theme).toMatchObject(expected);
  });
});
