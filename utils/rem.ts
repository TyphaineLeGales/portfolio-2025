/**
 * Converts a pixel value to rem units.
 * @param {number} px - The pixel value to convert.
 * @returns {string} - The value in rem units.
 */
const pxToRem = (px: number): string => px / 16 + 'rem'

export { pxToRem }
