import { StyleSheet } from 'react-native';
import { Colors, Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
  iconFilter: {
    color: Colors.WHITE,
  },
  iconRating: {
    ...Commons.iconSmall,
    lineHeight: 15,
  },
  textRating: {
    ...Commons.textSmall,
    marginLeft: 5,
    lineHeight: 15,
  },
  containerRating: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  containerDistance: {
    marginLeft: 15,
  },
  textDistance: {
    ...Commons.textNormal,
    color: Colors.POSITIVE,
    fontWeight: 'bold',
  },
  containerItem: {
    ...Commons.containerRow,
    marginLeft: 0,
    paddingLeft: 15,
  },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
