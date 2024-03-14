import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ShowMoreText = ({
  text,
  maxLines = 3,
  styles = {},
}: {
  text: string;
  maxLines?: number;
  styles?: {};
}) => {
  const [showMore, setShowMore] = useState(false);
  const [textLines, setTextLines] = useState(maxLines);
  const textRef = useRef<any>();

  useEffect(() => {
    // Measure the height of the text to determine the number of lines
    textRef.current.measure((fx, fy, width, height, px, py) => {
      const lines = Math.floor(height / 16); // Adjust the line height based on your text style
      setTextLines(lines);
      setShowMore(lines > maxLines);
    });
  }, [text]);

  const handleShowMore = () => {
    setTextLines(showMore ? maxLines : textLines);
    setShowMore(!showMore);
  };

  return (
    <View>
      <Text
        numberOfLines={showMore ? undefined : maxLines}
        ref={textRef}
        style={{...styles}}>
        {text}
      </Text>
      {showMore && (
        <TouchableOpacity onPress={handleShowMore}>
          <Text style={stylest.showMoreText}>
            {showMore ? 'Show Less' : 'Show More'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const stylest = StyleSheet.create({
  text: {
    fontSize: 16, // Adjust the font size based on your text style
  },
  showMoreText: {
    color: 'blue',
    marginTop: 5,
  },
});

export default ShowMoreText;
