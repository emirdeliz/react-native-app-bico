import NativeModules from 'NativeModules';

const convertImageToBase64 = (uri) => {
    const RNImageToBase64 = NativeModules.RNImageToBase64;

    return new Promise((resolve) => {
        RNImageToBase64.getBase64String(uri, (err, base64) => {
            resolve(base64);
        });
    });
};

export default convertImageToBase64;
