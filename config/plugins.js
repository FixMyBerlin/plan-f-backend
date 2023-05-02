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
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("S3_PUBLIC_KEY"),
          secretAccessKey: env("S3_PRIVATE_KEY"),
          region: "eu-central-1",
          params: {
            ACL: 'private',
            signedUrlExpires: 60 * 60 * 24 * 7,
            Bucket: "plan-f",
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
