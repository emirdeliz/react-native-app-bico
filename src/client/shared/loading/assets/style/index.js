import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
    loading: {
        position:'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 99999,
        backgroundColor: Colors.BLUE,
        opacity: 0.8
    }
};
const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
