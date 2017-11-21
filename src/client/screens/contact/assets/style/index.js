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
  lastMessageText: {
    ...Commons.textSmall,
    color: Colors.GRAY,
    marginRight: 30,
  },
  lastMessageDate: {
    ...Commons.textSmall,
    color: Colors.GRAY,
  },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
