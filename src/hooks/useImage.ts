import {ImageSourcePropType} from 'react-native';
import {useCallback, useEffect, useState} from 'react';

// const fallbackImage = require('../assets/images/homeScreenNoImage.png');

const useImage = (url: string | null | undefined, fallbackImage: any) => {
  const [isImageLoading, setLoading] = useState(false);
  const [updatedUrl, setUrl] = useState<ImageSourcePropType>(fallbackImage);

  const setImage = useCallback(async () => {
    setLoading(true);
    let newImg = fallbackImage;
    try {
      if (url) {
        const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
        const isValidImageUrl = imageUrlRegex.test(url);
        if (url && url.length > 0 && isValidImageUrl) {
          const res = await fetch(url);
          if (res && res.status === 200) {
            newImg = {uri: url};
          }
        }
      } else {
        newImg = fallbackImage;
      }
    } catch (e) {
      newImg = fallbackImage;
    }
    setUrl(newImg);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    setImage();
  }, [setImage, url]);
  return {
    isImageLoading,
    updatedUrl,
  };
};

export default useImage;
