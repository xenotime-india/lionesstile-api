/**
 * The configuration file.
 */
require('dotenv/config');

module.exports = {
  PORT: process.env.PORT || '3000',
  WINSTON_LEVEL: process.env.WINSTON_LEVEL || 'debug',
  DISABLE_AUTH: process.env.DISABLE_AUTH === 'true',
  RATE_LIMIT_REQUESTS_PER_MINUTE: parseInt(
    process.env.RATE_LIMIT_REQUESTS_PER_MINUTE
  ),
  RATE_LIMIT_MINUTES_TILL_RESET: parseInt(
    process.env.RATE_LIMIT_MINUTES_TILL_RESET
  ),
  IS_LOCAL_DEVELOPMENT: process.env.NODE_ENV !== 'production',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  DATABASE_URL: process.env.DATABASE_URL || '',
  cartTitle: 'CLOTH',
  cartDescription: 'expressCart',
  cartLogo: '',
  baseUrl: 'http://localhost:1111',
  emailHost: 'smtp-mail.outlook.com',
  emailPort: 587,
  emailSecure: false,
  emailUser: 'hi@markmoffat.com',
  emailPassword: 'this_is_the_smtp_password',
  emailAddress: 'hi@markmoffat.com',
  productsPerRow: 3,
  productsPerPage: 6,
  footerHtml:
    '&lt;h4 class=&quot;text-center&quot;&gt;Powered by expressCart&lt;/h4&gt;',
  googleAnalytics: '',
  injectJs: '',
  customCss: '',
  currencySymbol: '£',
  paymentGateway: 'stripe',
  databaseConnectionString: process.env.DATABASE_URL || '',
  theme: 'Cloth',
  trackStock: false,
  orderHook: '',
  availableLanguages: ['en', 'it'],
  defaultLocale: 'en',
  maxQuantity: 25,
  twitterHandle: '',
  facebookAppId: '',
  productOrderBy: 'date',
  productOrder: 'descending',
  modules: {
    enabled: {
      shipping: 'shipping-basic',
      discount: 'discount-voucher',
    },
    loaded: {
      shipping: {},
      discount: {},
    },
  },
  showRelatedProducts: true,
  showHomepageVariants: false,
};
