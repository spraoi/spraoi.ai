const noOrphan = (string) => {
  const split = string.split(' ');
  if (split.length < 2) return string;
  const lastWord = split.pop();
  const secondToLastWord = split.length === 1 ? '' : ` ${split.pop()}`;
  const titlePrefix = split.join(' ');
  return `${titlePrefix}${secondToLastWord}\xa0${lastWord}`;
};

export default noOrphan;
