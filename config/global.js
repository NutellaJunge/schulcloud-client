const util = require('util');

const {
	KEEP_ALIVE = false,
	BACKEND_URL = 'http://localhost:3030/',
	PUBLIC_BACKEND_URL,
	EDTR_SOURCE = undefined,
	EDITOR_URL = undefined,
	SC_DOMAIN = 'localhost',
	SC_THEME = 'default',
	SC_TITLE = 'HPI Schul-Cloud',
	SC_SHORT_TITLE = 'HPI Schul-Cloud',
	DOCUMENT_BASE_DIR = 'https://s3.hidrive.strato.com/schul-cloud-hpi/',
	CONSENT_WITHOUT_PARENTS_MIN_AGE_YEARS,
	REDIS_URI,
	NODE_ENV = 'development',
	JWT_SHOW_TIMEOUT_WARNING_SECONDS = 3600, // 60 min
	JWT_TIMEOUT_SECONDS,
	MAXIMUM_ALLOWABLE_TOTAL_ATTACHMENTS_SIZE_BYTE = (5 * 1024 * 1024), // 5MB
	MINIMAL_PASSWORD_LENGTH = 12,
	FEATURE_INSIGHTS_ENABLED,
	INSIGHTS_COLLECTOR_URI,
	NOTIFICATION_SERVICE_ENABLED,
	FEATURE_TEAMS_ENABLED = 'true',
	LIBRE_OFFICE_CLIENT_URL,
	NEXBOARD_USER_ID,
	NEXBOARD_API_KEY,
	FEATURE_EXTENSIONS_ENABLED,
	SHOW_VERSION,
	SW_ENABLED,
	HOST,
	PORT = '3100',
	FEATURE_ENTERTHECLOUD,
	FEATURE_JWT_EXTENDED_TIMEOUT_ENABLED,
	FEATURE_CONTACT_FORM_ATTACHMENTS_ENABLED,
	FEATURE_MINT_PAGES_ENABLED,
	FEATURE_NEXBOARD_ENABLED,
	SC_DEMO_USER_PASSWORD = 'Schulcloud1!',
	SC_DEMO_USER_NAME = 'schueler@schul-cloud.org',
	SC_SUPERHERO_USER_PASSWORD = 'Schulcloud1!',
	SC_SUPERHERO_USER_NAME = 'superhero@schul-cloud.org',
	HELPAREA_URL,
} = process.env;

const exp = {
	KEEP_ALIVE,
	BACKEND_URL,
	PUBLIC_BACKEND_URL,
	EDTR_SOURCE,
	EDITOR_URL,
	SC_DOMAIN,
	SC_THEME,
	SC_TITLE,
	SC_SHORT_TITLE,
	DOCUMENT_BASE_DIR,
	CONSENT_WITHOUT_PARENTS_MIN_AGE_YEARS: parseInt(CONSENT_WITHOUT_PARENTS_MIN_AGE_YEARS || 16, 10),
	REDIS_URI,
	NODE_ENV,
	JWT_SHOW_TIMEOUT_WARNING_SECONDS,
	JWT_TIMEOUT_SECONDS,
	MAXIMUM_ALLOWABLE_TOTAL_ATTACHMENTS_SIZE_BYTE,
	MINIMAL_PASSWORD_LENGTH,
	FEATURE_INSIGHTS_ENABLED,
	INSIGHTS_COLLECTOR_URI,
	NOTIFICATION_SERVICE_ENABLED,
	FEATURE_TEAMS_ENABLED,
	LIBRE_OFFICE_CLIENT_URL,
	NEXBOARD_USER_ID,
	NEXBOARD_API_KEY,
	FEATURE_EXTENSIONS_ENABLED,
	SHOW_VERSION,
	SW_ENABLED,
	HOST,
	PORT,
	FEATURE_ENTERTHECLOUD,
	FEATURE_JWT_EXTENDED_TIMEOUT_ENABLED,
	FEATURE_CONTACT_FORM_ATTACHMENTS_ENABLED,
	FEATURE_MINT_PAGES_ENABLED,
	FEATURE_NEXBOARD_ENABLED,
	SC_DEMO_USER_PASSWORD,
	SC_DEMO_USER_NAME,
	SC_SUPERHERO_USER_PASSWORD,
	SC_SUPERHERO_USER_NAME,
	HELPAREA_URL,
};

// eslint-disable-next-line no-console
console.log(util.inspect(exp, { depth: 1, compact: false, sorted: true }));

module.exports = exp;
