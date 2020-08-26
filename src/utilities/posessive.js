const possessive = (text) =>
  text[text.length - 1] === 's' ? `${text}’` : `${text}’s`;

export default possessive;
