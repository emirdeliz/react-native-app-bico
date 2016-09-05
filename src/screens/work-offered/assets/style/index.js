import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    containerTypeJob: {
        ...Commons.containerColumn,
        flex: 3
    },
    containerProfessional: {
        ...Commons.containerColumn,
        flex: 2
    },
    typeJob: {
        ...Commons.textNormal,
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 5
    },
    dateJob: {
        ...Commons.textSmall,
        marginRight: 10,
        marginBottom: 5
    },
    descriptionJob: {
        ...Commons.textSmall,
        textAlign: 'left',
        marginRight: 3
    },
    containerChat: {
        marginRight: 15,
        flex: 1
    },
    containerButtom: {
        ...Commons.containerRow
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
