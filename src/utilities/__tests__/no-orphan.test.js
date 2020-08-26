import noOrphan from '../no-orphan';

describe('noOrphan', () => {
  it('works with three words', () => {
    expect(noOrphan('foo bar baz')).toEqual('foo bar\xa0baz');
  });

  it('works with two words', () => {
    expect(noOrphan('foo bar')).toEqual('foo\xa0bar');
  });

  it('does nothing to one word', () => {
    expect(noOrphan('foo')).toEqual('foo');
  });
});
