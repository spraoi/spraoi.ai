const getSocialUrls = ({ instagram, twitter, facebook, linkedIn }) => {
  const socialUrls = [];
  if (instagram) socialUrls.push(`https://www.instagram.com/${instagram}`);
  if (twitter) socialUrls.push(`https://twitter.com/${twitter}`);
  if (facebook) socialUrls.push(`https://www.facebook.com/${facebook}`);
  if (linkedIn) socialUrls.push(`https://www.linkedin.com/company/${linkedIn}`);
  return socialUrls;
};

export default getSocialUrls;
