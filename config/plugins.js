module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-mailjet",
        providerOptions: {
          publicApiKey: env("MAILJET_PUBLIC_KEY"),
          secretApiKey: env("MAILJET_SECRET_KEY"),
        },
        settings: {
          defaultFrom: "no-reply@plan-f.info",
          defaultFromName: "Plan F Team",
          defaultTo: "info@fixmycity.de",
          defaultToName: "FixMyCity",
        },
      },
    },
  graphql: {
    config: {
      endpoint: "/graphql",
      apolloServer: {
        introspection: true,
      },
    },
  },
});
