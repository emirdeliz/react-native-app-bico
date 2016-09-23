import { StyleSheet } from 'react-native';
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style';

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
        height: undefined,
    },
    inputSearch: {
        paddingBottom: 10,
    },
};

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons));
export default Style;
