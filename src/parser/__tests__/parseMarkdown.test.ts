import '@testing-library/react-native';
import parseMarkdown from '../helpers/parseMarkdown';

describe('Parse markdown', () => {
  test('Text with markdown', () => {
    const text = `# Hello World
    **This is a bold text**`;

    const parseText = `<h1>Hello World</h1>
    <b>This is a bold text</b>`;

    expect(parseMarkdown(text)).toEqual(parseText);
  });
});
