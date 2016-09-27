import NativeModules from 'NativeModules';

const convertImageToBase64 = (uri) => {
    const RNImageToBase64 = NativeModules.RNImageToBase64;

    return new Promise((resolve, reject) => {
        RNImageToBase64.getBase64String(uri, (err, base64) => {
            resolve(base64);
        });
    });
};

const mergeObjects = (target, source) => {
    const isObject = (item) => {
        return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
    };

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeObjects(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        });
    }

    return target;
};

export { mergeObjects, convertImageToBase64 };
