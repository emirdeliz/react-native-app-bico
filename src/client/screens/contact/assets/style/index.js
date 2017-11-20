import { StyleSheet } from 'react-native';
import { Colors, Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
  containerDescription: {
    marginLeft: 5,
  },
  professionalName: {
    ...Commons.textSmall,
    fontWeight: 'bold',
  },
  lastMessage: {
    ...Commons.textSmall,
    color: Colors.GRAY,
  },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
