const MergeObjects = (target, source) => {
    const isObject = (item) => {
        return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
    };

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                MergeObjects(target[key], source[key]);
            } else {
                // if(!target[key])
                Object.assign(target, { [key]: source[key] });
            }
        });
    }

    return target;
};

export default MergeObjects;
