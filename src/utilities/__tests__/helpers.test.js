import { newline2Space, possessive } from '../helpers';

describe('newline2Space', () => {
  it('returns an array of the correct length', () => {
    expect(newline2Space('foo\nbar').length).toEqual(2);
  });
});

describe('possessive', () => {
  it('appends apostrophe s when the word does not end with s', () => {
    expect(possessive('foo')).toEqual('foo’s');
  });

  it('appends apostrophe when the word ends with s', () => {
    expect(possessive('bars')).toEqual('bars’');
  });
});
