import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

jest.mock('react-native-vector-icons/Entypo', () => 'Icon');

jest.mock('react-native-vector-icons/EvilIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

jest.mock('react-native-vector-icons/Foundation', () => 'Icon');

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Octicons', () => 'Icon');

jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Zocial', () => 'Icon');

jest.mock('react-native-htmlview', () => 'HTMLView');

jest.mock('react-native-modal', () => 'Modal');
