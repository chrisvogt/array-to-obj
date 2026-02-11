const isString = key => typeof key === 'string';

module.exports = (input, customOptions = {}) => {
  if (!Array.isArray(input)) {
    throw new TypeError(`Expected an array, got ${typeof input}`);
  }

  const defaultOptions = {
    key: 'id',
  };

  const options = {
    ...defaultOptions,
    ...customOptions,
  };

  const object = input.reduce((acc, current, i) => {
    const {key: optKey} = options;
    const fallback = i;

    const getKey = key => (isString(key) && key in current
      ? current[key]
      : key(current));

    acc[getKey(optKey) || fallback] = current;

    return acc;
  }, {});

  return object;
};
