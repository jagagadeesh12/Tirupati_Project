import {StyleSheet} from 'react-native';
import fontFamily from './fontFamily';
import {textScale} from './responsiveSize';

export default StyleSheet.create({
  fontSize10Regular: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(10),
  },
  fontSize14Regular: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(14),
  },
  fontSize14Medium: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(14),
  },
  fontSize15Medium: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(15),
  },
  fontSize18Medium: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(18),
  },
  fontSize36Medium: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(36),
  },
  
});
