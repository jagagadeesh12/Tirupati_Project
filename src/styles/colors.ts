import {Appearance} from 'react-native';
import {Colors, CommonColors} from '../types/Colors';

const isDark = Appearance.getColorScheme() === 'dark';
const commonColors: CommonColors = {
  blue: '#0074B7',
  error: '#F34141',
  warning: '#FBBC55',
  success: '#53B483',
  link: '#407BFF',
  holidaycard1: '#F2FFC9',
  holidaycard2: '#D6FFE5',
  holidaycard3: '#D6EBFF',
  holidaycard4: '#FFEAD6',
  holidaycard5: '#E0D6FF',
};

const lightModeColors: Colors & CommonColors = {
  stroke: '#CED2D6',
  text: '#202124',
  background: '#FEFEFE',
  homeBackground: '#F5F5F5',
  homeCard: '#fefefe',
  cards: '#FFFFFF',
  lightText: '#b9b9b9',
  ...commonColors,
};

const darkModeColors: Colors & CommonColors = {
  stroke: '#CED2D6',
  text: '#fefefe',
  background: '#151515',
  homeBackground: '#101010',
  homeCard: '#151515',
  cards: '#101010',
  lightText: '#b9b9b9',
  ...commonColors,
};

const colors = isDark ? darkModeColors : lightModeColors;
export default colors;
