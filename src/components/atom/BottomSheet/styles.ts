import {Dimensions, StyleSheet} from 'react-native';

import {CLAMP, HEIGHT} from './constant';


export const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25);',
    zIndex: 1,
  },
  view: {
    backgroundColor: 'white',
    height: HEIGHT,
    width: '100%',
    position: 'absolute',
    bottom: -CLAMP * 1.1,
    zIndex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  draggableLine: {
    position: 'absolute',
    width: '100%',
    height: 4,
    backgroundColor: 'grey',
    borderRadius: 2,
  },
});

export default styles;
