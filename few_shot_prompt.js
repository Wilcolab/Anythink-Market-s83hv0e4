/**
 * Convert a string to camelCase.
 * Handles spaces, dashes, underscores, and ALL CAPS.
 * Examples:
 *   first name    -> firstName
 *   user_id       -> userId
 *   SCREEN_NAME   -> screenName
 *   mobile-number -> mobileNumber
 */
function toCamelCase(input) {
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
// module.exports = { toCamelCase };

