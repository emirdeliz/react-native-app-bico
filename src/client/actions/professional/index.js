import * as Action from '../../action-type/professional';

export const findAll = () => (
    { type: Action.findAll }
);

export const findById = () => (
    { type: Action.findById }
);

export { findAll, findById }
