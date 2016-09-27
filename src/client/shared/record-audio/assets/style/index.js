import { StyleSheet } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import { mergeObjects } from '../../../../../imports/utils';

const StyleCustom = {
    containerButtons: {
        ...Commons.containerRow,
        justifyContent: 'center',
    },
    buttonRecord: {
        ...Commons.buttonRoundedNormal,
        marginLeft: 10,
    },
    buttonPlay: {
        ...Commons.buttonRoundedNormal,
        marginLeft: 10,
    },
    currentTime: {
        marginLeft: 10,
    },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
