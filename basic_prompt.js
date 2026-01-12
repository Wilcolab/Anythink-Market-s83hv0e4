/**
 * Convert a string to camelCase.
 * - Splits on spaces, dashes, underscores, and non-alphanumeric chars.
 * - Lowercases the first word and capitalizes subsequent words.
 *
 * Example:
 *   convertToCamelCase('hello world example') -> 'helloWorldExample'
 */
function convertToCamelCase(input) {
	if (typeof input !== 'string') return '';
	const parts = input
		.trim()
		.split(/[^A-Za-z0-9]+/)
		.filter(Boolean)
		.map(s => s.toLowerCase());

	if (parts.length === 0) return '';

	const first = parts[0];
	const rest = parts.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1));
	return [first, ...rest].join('');
}

// Optional export for Node/ESM:
// module.exports = { convertToCamelCase };

