import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    textDistance: {
        ...Commons.textNormal,
        marginTop: 5,
        marginLeft: 5
    },
    rating: {
        marginTop: 10
    },
    iconRating: {
        ...Commons.iconNormal,
        marginLeft: 10,
        marginRight: 10
    },
    picture: {
        marginTop: 5,
        marginLeft: 15
    },
    description: {
        ...Commons.textNormal,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'left'
    },
    typeWork: {
        ...Commons.textNormal,
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 5
    },
    dateWork: {
        ...Commons.textNormal,
        marginRight: 10,
        marginBottom: 5
    },
    descriptionWork: {
        ...Commons.textSmall,
        textAlign: 'left'
    },
    containerDescription: {
        marginBottom: 10
    },
    menu: {
        marginBottom: 5
    },
    menuItem: {
        padding: 10
    }
};

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
