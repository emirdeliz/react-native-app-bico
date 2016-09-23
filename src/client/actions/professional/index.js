import * as Action from '../../action-type/professional';

const findAll = () => (
    { type: Action.findAll }
);

const findById = () => (
    { type: Action.findById }
);

export { findAll, findById };
