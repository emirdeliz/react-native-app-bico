import { StyleSheet } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
  containerTypeJob: {
    ...Commons.containerColumn,
    flex: 3,
  },
  containerProfessional: {
    ...Commons.containerColumn,
    flex: 2,
  },
  typeJob: {
    ...Commons.textNormal,
    fontWeight: 'bold',
    marginRight: 10,
    marginBottom: 5,
  },
  dateJob: {
    ...Commons.textSmall,
    marginRight: 10,
    marginBottom: 5,
  },
  descriptionJob: {
    ...Commons.textSmall,
    textAlign: 'left',
    marginRight: 3,
  },
  buttonEvaluate: {
    marginLeft: 10,
  },
  containerButtom: {
    ...Commons.containerRow,
    marginTop: 5,
  },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
