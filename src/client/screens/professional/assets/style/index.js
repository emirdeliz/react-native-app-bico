import { StyleSheet } from 'react-native';
import { Commons } from '../../../../shared/assets/style';
import mergeObjects from '../../../../../imports/utils';

const StyleCustom = {
  textHeader: {
    ...Commons.textNormal,
    marginTop: 5,
  },
  iconRating: {
    ...Commons.iconSmall,
    lineHeight: 15,
    width: 12,
  },
  picture: {
    marginTop: 5,
    marginLeft: 15,
  },
  description: {
    ...Commons.textSmall,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'left',
  },
  descriptionRating: {
    ...Commons.textSmall,
    lineHeight: 15,
    marginLeft: 5,
  },
  descriptionItem: {
    ...Commons.textSmall,
    textAlign: 'center',
    lineHeight: 15,
    marginLeft: 5,
  },
  typeJob: {
    ...Commons.textNormal,
    fontWeight: 'bold',
    marginRight: 10,
    marginBottom: 5,
  },
  dateJob: {
    ...Commons.textNormal,
    marginRight: 10,
    marginBottom: 5,
  },
  descriptionJob: {
    ...Commons.textSmall,
    textAlign: 'left',
  },
  containerDescription: {
    marginBottom: 10,
  },
  containerHeader: {
    ...Commons.containerRow,
    marginLeft: 10,
  },
  containerPhone: {
    marginLeft: 10,
    marginRight: 10,
  },
  menu: {
    marginBottom: 5,
  },
  menuItem: {
    marginLeft: 0,
    paddingLeft: 15,
  },
};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
