import {Linking} from 'react-native';

export const handleURL = (url: string) => {
  Linking.openURL(url);
};
