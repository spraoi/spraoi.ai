import newlineToSpace from '../newline-to-space';

describe('newlineToSpace', () => {
  it('works', () => {
    expect(newlineToSpace('foo\nbar').length).toEqual(2);
  });
});
