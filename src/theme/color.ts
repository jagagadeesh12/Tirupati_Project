export const COMMON_COLOR = {
  primary: '#0074B7',
  success: '#53B483',
  warning: '#FBBC55',
  error: '#F34141',
  links: '#407BFF',
  litePrimary: 'rgba(0, 116, 183, 0.15)',
  toastSuccess:'#FFFFFF',
};

const LIGHT_MODE = {
  background: '#FEFEFE',
  text: 'black',
  holidayDateColor: '#202124',
  strokes: '#CED2D6',
  cardsBG: '#FFFFFF',
  liteText: '#B9B9B9',
  homeBg: '#F5F5F5',
  ...COMMON_COLOR,
};

export const DARK_MODE = {
  background: '#FEFEFE',
  text: 'black',
  strokes: '#CED2D6',
  cardsBG: '#FFFFFF',
  liteText: '#B9B9B9',
  homeBg: '#F5F5F5',
  transparent:'rgba(0,0,0,0.5)',
  ...COMMON_COLOR,
};

// const holidayColors = ['#F2FFC9', '#D6FFE5', '#D6EBFF', '#FFEAD6', '#E0D6FF'];

export const APP_COLOR = {
  PrimaryColor: '#0074B7',
  PrimaryColoropacity15and30: '#0074B7',
  stroke: '#CED2D6',
  boldtext:'#202124',
  text: ' #454C52',
  bg: '#FEFEFE',
  homebg: '#F5F5F5',
  cards: '#FFFFFF',
  litetext: '#B9B9B9',
  darkmodecards: ' #24292E',
  error: '#F34141',
  erroropacity15: '#F34141',
  warning: ' #FBBC55',
  orange: '#FE6725',
  sucess: ' #53B483',
  links: '#407BFF',
  black: '#000000',
  cursoal: '#383F45',
  dotactive: '#306060',
  dotactive2: '#30606026',
  CPBcolor: '#0074B74D',
  cccolor: '#ccc',
  holidaysBordercolor: '#DEDEDE',
  bacgroundcolor: '#f0f0f0',
  checkoutcolor: '#30606026',
  holidaycard1: '#F2FFC9',
  holidaycard2: '#D6FFE5',
  holidaycard3: '#D6EBFF',
  holidaycard4: '#FFEAD6',
  holidaycard5: '#E0D6FF',
  swipecon: 'rgba(0, 116, 183, 0.15)',
};

export const HOLIDAYSCARDLIST = [
  APP_COLOR.holidaycard1,
  APP_COLOR.holidaycard2,
  APP_COLOR.holidaycard3,
  APP_COLOR.holidaycard4,
  APP_COLOR.holidaycard5,
];

export default {
  LIGHT_MODE,
  DARK_MODE,
};
