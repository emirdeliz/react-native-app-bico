import { StyleSheet } from 'react-native'
import { Colors } from '../../../../shared/assets/style'

const Style = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: Colors.POSITIVE,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleHeader: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 8,
        fontSize: 20
    },
    subTitleHeader: {
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 16
    },
    menuItemTitle: {
        color: Colors.GRAY,
        fontWeight: '600',
        fontSize: 15
    },
    menuItemIcon: {
        color: Colors.GRAY,
        fontSize: 20
    }
});

export { Style }
