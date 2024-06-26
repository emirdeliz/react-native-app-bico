import { StyleSheet } from 'react-native';
import { Colors, Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.WHITE,
    borderTopColor: Colors.GAINSBORO,
    borderTopWidth: 1,
  },
  containerButton: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  buttonFooter: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  iconFooter: {
    ...Commons.iconLarge,
  },
  titleFooter: {
    ...Commons.textSmall,
    marginBottom: 5,
  },
  tabSelected: {
    ...Commons.containerRow,
    opacity: 0.7,
  },
  iconSelected: {
    color: Colors.BLUE,
  },
};
const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
