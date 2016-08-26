import { StyleSheet } from 'react-native'
import { Colors } from '../../../../shared/assets/style'

const Style = StyleSheet.create({
    slideMenu: {
        flex: 1,
    },
    left: {
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right: 0,
        backgroundColor: Colors.WHITE,
        height: 100,
    },
    center: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    toolbarMenu: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: Colors.BLUE,
        paddingTop: 25,
        paddingLeft: 10
    }
});

export { Style }
