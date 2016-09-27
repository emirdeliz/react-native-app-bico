import { StyleSheet } from 'react-native';
import { Commons, MergeStyle } from '../../../../shared/assets/style';
import { mergeObjects } from '../../../../../imports/utils';

const StyleCustom = {

};

const Style = StyleSheet.create(mergeObjects(StyleCustom, Commons));
export default Style;
