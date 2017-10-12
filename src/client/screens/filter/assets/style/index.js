import { StyleSheet } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
  subTitle: {
    ...Commons.textNormal,
  },
  filterContainer: {
    height: 50,
  },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
