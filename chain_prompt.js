/**
 * Convert a string to kebab-case (lowercase words separated by hyphens).
 * Steps:
 * 1) Validate input (throw TypeError for null/undefined/non-string).
 * 2) Trim and normalize mixed/camel casing.
 * 3) Split into words on spaces, uppercase transitions, underscores, hyphens, and other separators.
 * 4) Lowercase all parts.
 * 5) Join with hyphens, collapsing repeated separators.
 *
 * Examples:
 *   toKebabCase('Hello World Example') -> 'hello-world-example'
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

	// Insert spaces between lower->Upper to separate camelCase, normalize separators to spaces,
	// replace other non-alphanumeric characters with spaces.
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

// Optional export
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { toKebabCase };
}

export { toKebabCase };

