const mainColors = {
  green1: '#D32538',
  green2: '#F6D6D9',
  green3: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092af',
  reddark: '#880D0D',
  grey1: '#7D8797',
  grey2: '#e9e9e9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#e06379',
};

export const colors = {
  primary: mainColors.green1,
  primary1: mainColors.green3,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: 'white',
  black: 'black',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    menuInactivedua: mainColors.reddark,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
