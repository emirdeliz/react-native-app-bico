import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    containerPhoto: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        marginTop: 10
    },
    buttonPhoto: {
        marginLeft: 3,
        width: 100,
        height: 100,
        backgroundColor: Colors.WHITE
    },
    imageModalItem: {
        ...Commons.containerColumn,
        alignItems: 'center',
        paddingBottom: 50
    },
    image: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width
    },
    buttonClose: {
        position: 'absolute',
        top: 20,
        right: 15,
        zIndex: 9999
    },
    containerCamera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    containerButtonCapture: {
        alignItems: 'center'
    },
    containerDescription: {
        ...Commons.containerRow,
        justifyContent: 'center'
    },
    buttonCapture: {
        ...Commons.buttonRoundedNormal,
        marginBottom: 25
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
