/* eslint import/extensions: 0 */
import NativeModules from 'NativeModules';

const convertImageToBase64 = (uri) => {
  const { RNImageToBase64 } = NativeModules;

  return new Promise((resolve) => {
    RNImageToBase64.getBase64String(uri, (err, base64) => {
      resolve(base64);
    });
  });
};

const imageResize = () => {};
export { convertImageToBase64, imageResize };
