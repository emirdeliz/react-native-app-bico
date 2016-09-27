import { StyleSheet } from 'react-native';
import { Colors, Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
    toolbar: {
        backgroundColor: Colors.ROYAL,
    },
    textToolbar: {
        color: Colors.WHITE,
        textAlign: 'center',
    },
    containerPhoto: {
        height: 165,
        backgroundColor: Colors.ROYAL,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
