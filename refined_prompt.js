/**
 * Convert a string to camelCase with strict input validation.
 * - Throws descriptive errors for null/undefined/non-string/empty inputs.
 * - Handles spaces, hyphens, underscores, special characters, and mixed/camel casing.
 *
 * @param {string} input
 * @returns {string}
 * @throws {TypeError}
 */
function convertToCamelCase(input) {
  if (input === null || input === undefined) {
    throw new TypeError('convertToCamelCase: input is null or undefined');
  }
  if (typeof input !== 'string') {
    throw new TypeError(`convertToCamelCase: expected a string but received ${typeof input}`);
  }

  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new TypeError('convertToCamelCase: input must be a non-empty string');
  }

  const normalized = trimmed
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_\-]+/g, ' ')
    .replace(/[^A-Za-z0-9\s]+/g, ' ');

  const parts = normalized
    .split(/\s+/)
    .filter(Boolean)
    .map(p => p.toLowerCase());

  if (parts.length === 0) {
    throw new TypeError('convertToCamelCase: input contains no alphanumeric characters');
  }

  return parts[0] + parts.slice(1).map(
    w => w.charAt(0).toUpperCase() + w.slice(1)
  ).join('');
}

/**
 * Convert a string to dot.case (lowercase words separated by dots).
 *
 * @param {string} input
 * @returns {string}
 * @throws {TypeError}
 */
function toDotCase(input) {
  if (input === null || input === undefined) {
    throw new TypeError('toDotCase: input is null or undefined');
  }
  if (typeof input !== 'string') {
    throw new TypeError(`toDotCase: expected a string but received ${typeof input}`);
  }

  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new TypeError('toDotCase: input must be a non-empty string');
  }

  const normalized = trimmed
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_\-]+/g, ' ')
    .replace(/[^A-Za-z0-9\s]+/g, ' ');

  const parts = normalized
    .split(/\s+/)
    .filter(Boolean)
    .map(p => p.toLowerCase());

  if (parts.length === 0) {
    throw new TypeError('toDotCase: input contains no alphanumeric characters');
  }

  return parts.join('.');
}

/**
 * Convert a string to kebab-case (lowercase words separated by hyphens).
 *
 * @param {string} input
 * @returns {string}
 * @throws {TypeError}
 */
function toKebabCase(input) {
  if (input === null || input === undefined) {
    throw new TypeError('toKebabCase: input is null or undefined');
  }
  if (typeof input !== 'string') {
    throw new TypeError(`toKebabCase: expected a string but received ${typeof input}`);
  }

  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new TypeError('toKebabCase: input must be a non-empty string');
  }

  const normalized = trimmed
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_\-]+/g, ' ')
    .replace(/[^A-Za-z0-9\s]+/g, ' ');

  const parts = normalized
    .split(/\s+/)
    .filter(Boolean)
    .map(p => p.toLowerCase());

  if (parts.length === 0) {
    throw new TypeError('toKebabCase: input contains no alphanumeric characters');
  }

  return parts.join('-');
}

/* Node.js export */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { convertToCamelCase, toDotCase, toKebabCase };
}

/* ES Module export */
export { convertToCamelCase, toDotCase, toKebabCase };
