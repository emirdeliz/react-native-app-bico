const Colors = {
  RED: '#b22222',
  BLUE: '#4682b4',
  WHITE: '#f6f6f6',
  POSITIVE: '#9acd32',
  BLACK: '#000',
  GRAY: '#808080',
  SILVER: '#c0c0c0',
  GAINSBORO: '#dcdcdc',
  ROYAL: '#886aea',
  TRANSPARENT: 'transparent',

  LIGHT: '#858585',
  STABLE: '#f8f8f8',

  CALM: '#11c1f3',
  BALANCED: '#33cd5f',
  ENERGIZED: '#ffc900',
  ASSERTIVE: '#ef473a',
};

const text = {
  color: Colors.GRAY,
};

const icon = {
  color: Colors.SILVER,
};

const container = {
  flex: 5,
};

const input = {
  height: 40,
  borderColor: Colors.SILVER,
  borderWidth: 1,
};

const Commons = {
  menuItem: {
    marginLeft: 0,
    paddingLeft: 15,
  },
  bodyHeader: {
    flex: 3,
  },
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.BLUE,
  },
  iconList: {
    ...icon,
  },
  textNormal: {
    ...text,
    fontSize: 15,
  },
  textSmall: {
    ...text,
    fontSize: 12,
  },
  containerColumn: {
    ...container,
    flexDirection: 'column',
  },
  containerRow: {
    ...container,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconXLarge: {
    ...icon,
    fontSize: 50,
  },
  iconLarge: {
    ...icon,
    fontSize: 30,
  },
  iconNormal: {
    ...icon,
    fontSize: 17,
  },
  iconSmall: {
    ...icon,
    fontSize: 15,
  },
  iconInputGroup: {
    ...icon,
  },
  textArea: {
    ...input,
    flex: 1,
    flexDirection: 'row',
    height: 80,
  },
  buttonRoundedSmall: {
    width: 55,
    height: 55,
  },
  buttonRoundedNormal: {
    width: 80,
    height: 80,
  },
  inputGroup: {
    margin: 10,
  },
  disabled: {
    opacity: 0.3,
  },
};

export { Colors, Commons };
