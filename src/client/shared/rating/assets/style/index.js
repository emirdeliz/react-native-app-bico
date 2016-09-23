import { StyleSheet } from 'react-native';
import { Commons, MergeStyle } from '../../../../shared/assets/style';

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

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons));
export default Style;
