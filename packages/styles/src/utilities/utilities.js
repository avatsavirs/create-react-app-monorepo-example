import variables from '../variables';

export default function convertPxToEm(base = '16px', size = 'm', unit = 'em') {
  try {
    const actualSize = variables[size.toUpperCase()];
    if (!actualSize) {
      throw new Error(`${size} is not a valid size`);
    }
    const baseFontSize = parseInt(base.slice(0, base.length - 2), 10);
    const expectedSize = parseInt(
      actualSize.slice(0, actualSize.length - 2),
      10,
    );
    const sizeInEm = expectedSize / baseFontSize + unit;
    return sizeInEm;
  } catch (e) {
    throw e;
  }
}

export { convertPxToEm };
