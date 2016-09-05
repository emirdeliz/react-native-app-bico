import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    containerPhotoDescription: {
        ...Commons.containerColumn,
        marginLeft: 10,
        marginRight: 10
    },
    imageModalItem: {
        ...Commons.containerColumn,
        alignItems: 'center',
        paddingBottom: 50
    },
    imageModalDescription: {
        ...Commons.textSmall,
        padding: 5
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
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
