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
    containerCamera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.TRANSPARENT,
    },
    buttonClose: {
        position: 'absolute',
        top: 20,
        right: 15,
        zIndex: 9999,
    },
    buttonPhoto: {
        marginLeft: 3,
        width: 100,
        height: 100,
        backgroundColor: Colors.WHITE,
    },
    buttonCapture: {
        ...Commons.buttonRoundedNormal,
        marginBottom: 25,
    },
    containerEditPhoto: {
        width: 50,
        marginLeft: 5,
    },
    containerPhoto: {
        flexDirection: 'row',
        height: 120,
        backgroundColor: Colors.ROYAL,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButtonCapture: {
        alignItems: 'center',
    },
    containerSave: {
        padding: 15,
    },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
