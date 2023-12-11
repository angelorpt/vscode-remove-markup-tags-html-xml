// src/test/extension.test.ts

jest.mock('vscode', () => ({}), { virtual: true });

import { removeMarkupTags } from '../extension';

describe('removeMarkupTags', () => {
  test('should remove HTML tags from text', () => {
    const input = '<p>This is <b>bold</b> text.</p>';
    const expected = 'This is bold text.';
    expect(removeMarkupTags(input)).toBe(expected);
  });

  test('should handle multiple tags', () => {
    const input = '<div><p>Paragraph</p> and <span>span</span></div>';
    const expected = 'Paragraph and span';
    expect(removeMarkupTags(input)).toBe(expected);
  });

  test('should handle nested tags', () => {
    const input = '<div><p>This <span>is <i>nested</i></span></p></div>';
    const expected = 'This is nested';
    expect(removeMarkupTags(input)).toBe(expected);
  });

  test('should handle tags with attributes', () => {
    const input = '<p class="text">Text with <a href="#">link</a></p>';
    const expected = 'Text with link';
    expect(removeMarkupTags(input)).toBe(expected);
  });

  test('should handle self-closing tags', () => {
    const input = 'Line<br/>Break<img src="image.jpg"/>';
    const expected = 'LineBreak';
    expect(removeMarkupTags(input)).toBe(expected);
  });

  test('should handle empty tags', () => {
    const input = 'Text with <b></b>empty tag';
    const expected = 'Text with empty tag';
    expect(removeMarkupTags(input)).toBe(expected);
  });

  test('should handle text without any tags', () => {
    const input = 'Just plain text';
    const expected = 'Just plain text';
    expect(removeMarkupTags(input)).toBe(expected);
  });

});

