import { StyleSheet } from 'react-native';
import { Colors } from '../../../../shared/assets/style';

const Style = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: Colors.GRAY,
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: Colors.GRAY,
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

export default Style;
