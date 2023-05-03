module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `${env("S3_BUCKET_NAME")}.s3.${env("S3_REGION")}.amazonaws.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `${env("S3_BUCKET_NAME")}.s3.${env("S3_REGION")}.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
