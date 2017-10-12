import { StyleSheet, Dimensions } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = StyleSheet.create({
  buttonClose: {
    position: 'absolute',
    top: 20,
    right: 15,
    zIndex: 9999,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  imageModalItem: {
    ...Commons.containerColumn,
    alignItems: 'center',
    paddingBottom: 50,
  },
  imageModal: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
});

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
