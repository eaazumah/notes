import {StyleSheet} from 'react-native';
import {colors, regex} from '../../@shared/constants';
import {handleURL} from './handlers';

type IType = 'url' | 'phone' | 'email';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  heading1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading3: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  url: {
    color: colors.primary,
  },
  phone: {
    color: colors.primary,
  },
  email: {
    color: colors.primary,
  },
});

const parsers = [
  {
    type: 'url' as IType,
    style: styles.url,
    onPress: handleURL,
  },
  {
    type: 'phone' as IType,
    style: styles.url,
  },
  {
    type: 'email' as IType,
    style: styles.url,
  },
  {
    pattern: regex.bold,
    style: styles.bold,
    renderText: (matchingString: string, matches: Array<string>) => {
      const match = matchingString.match(regex.bold);
      return `${match?.[1]}`;
    },
  },
  {
    pattern: regex.italic,
    style: styles.italic,
    renderText: (matchingString: string, matches: Array<string>) => {
      const match = matchingString.match(regex.italic);
      return `${match?.[1]}`;
    },
  },
  {
    pattern: /^### (.*$)/,
    style: styles.heading1,
    renderText: (matchingString: string, matches: Array<string>) => {
      const pattern = /^### (.*$)/;
      const text = matchingString.replace(pattern, '$1');
      const match = matchingString.match(pattern);
      return text;
    },
  },
  {
    pattern: /^## (.*$)/,
    style: styles.heading2,
    renderText: (matchingString: string, matches: Array<string>) => {
      const pattern = /^# (.*$)/;
      const text = matchingString.replace(pattern, '$1');
      const match = matchingString.match(pattern);
      return text;
    },
  },
  {
    pattern: /^# (.*$)/,
    style: styles.heading3,
    renderText: (matchingString: string, matches: Array<string>) => {
      const pattern = /^# (.*$)/;
      const text = matchingString.replace(pattern, '$1');
      const match = matchingString.match(pattern);
      return text;
    },
  },
];

export {parsers};
