import { StyleSheet } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import { mergeObjects } from '../../../../../imports/utils';

const StyleCustom = StyleSheet.create({
    mapView: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
    },
});

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
