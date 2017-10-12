import { StyleSheet } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
  descriptionJob: {
    ...Commons.textNormal,
    padding: 5,
  },
  descriptionItem: {
    ...Commons.textSmall,
    lineHeight: 15,
    marginLeft: 5,
  },
  iconRating: {
    ...Commons.iconSmall,
    lineHeight: 15,
    width: 12,
  },
  containerSend: {
    padding: 15,
  },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
