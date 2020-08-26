import possessive from '../posessive';

describe('possessive', () => {
  it('works when the word does not end with s', () => {
    expect(possessive('foo')).toEqual('foo’s');
  });

  it('works when the word ends with s', () => {
    expect(possessive('bars')).toEqual('bars’');
  });
});
