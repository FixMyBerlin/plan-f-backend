module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://plan-f.tiummk647p9vk.eu-central-1.cs.amazonlightsail.com/',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
