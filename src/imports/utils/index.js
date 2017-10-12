const mergeObjects = (target, source) => {
  const isObject = (item) => {
    return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
  };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
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

export default mergeObjects;
