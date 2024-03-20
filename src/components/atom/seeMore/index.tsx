import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {APP_COLOR, COMMON_COLOR} from '../../../theme/color';

const width = Dimensions.get('screen').width;

interface AboutProps {
  text: string;
  textStyle?: {};
}

const SeeMore: React.FC<AboutProps> = ({text, textStyle}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleReadMoreClick = () => {
    setExpanded(!expanded);
  };

  // Calculate number of lines based on text length
  const numberOfLines =
    text.length > 120 ? (expanded ? undefined : 2) : undefined;

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexWrap: 'wrap'}}>
        <Text
          numberOfLines={numberOfLines}
          ellipsizeMode="tail"
          style={{...styles.detail, ...textStyle}}>
          {text}
        </Text>
        {/* </View> */}

        {numberOfLines && (
          <Text style={styles.readMore} onPress={handleReadMoreClick}>
            {expanded ? '' : 'See More'}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add container styles if needed
  },
  detail: {
    // Add detail text styles if needed
    width: '100%',
    color: 'black',
  },
  readMore: {
    color: COMMON_COLOR.links,
    width: width * 0.25,
    // marginTop: 5,
  },
});

export default SeeMore;
