import '@testing-library/react-native';
import getIconByType from '../getIconByType';

test('Get icon by type', () => {
  const icon = getIconByType('Ionicons');
  //   expect(getIconByType).toHaveBeenCalled();
  //   expect(getIconByType).toHaveBeenCalledWith('Ionicons');
});
