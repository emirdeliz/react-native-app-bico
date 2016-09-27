import { StyleSheet } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import { mergeObjects } from '../../../../../imports/utils';

const StyleCustom = {
    iconRating: {
        marginRight: 5,
        ...Commons.iconNormal,
    },
    iconRatingEdit: {
        marginRight: 5,
        ...Commons.iconLarge,
    },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
