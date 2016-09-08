import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    toolbar: {
        backgroundColor: Colors.ROYAL
    },
    textToolbar: {
        color: Colors.WHITE,
        textAlign: 'center'
    },
    textDivider: {
        ...Commons.textNormal,
        textAlign: 'center'
    },
    containerDivider: {
        flex: 1
    },
    containerButton: {
        padding: 10
    },
    containerContent: {
        justifyContent: 'center',
        flex: 1
    },
    containerData: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 2
    },
    containerLogo: {
        alignItems: 'center',
        height: 150,
        paddingTop: 30
    },
    iconLock: {
        ...Commons.iconLarge,
        fontSize: 100
    },
    buttonLoginSocial: {
        height: 40,
        flex: 1
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
