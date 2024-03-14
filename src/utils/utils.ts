export const urlRegex = /(\bhttp\S+)/gi;

export const splitTextAtURLs = (text: string) => {
  const parts = text.split(urlRegex);
  return parts;
};

