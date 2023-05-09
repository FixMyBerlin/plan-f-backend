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
          accessKeyId: env("S3_ACCESS_KEY_ID"),
          secretAccessKey: env("S3_SECRET_ACCESS_KEY"),
          region: env("S3_REGION"),
          params: {
            ACL: 'public-read',
            signedUrlExpires: 60 * 60 * 24,
            Bucket: env("S3_BUCKET_NAME"),
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
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::example.example",
          modelName: "example",
          transliterate: false,
          queryConstraints: {
            where: {
              $and: [
                {
                  publishedAt: { $notNull: true },
                },
              ],
            },
          },
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -600,
            limit: 3,
            keys: [
              {
                name: "title",
                weight: 100,
              },
              {
                name: "description",
                weight: 10,
              },
            ],
          },
        },
        {
          uid: "api::topic.topic",
          modelName: "topic",
          fuzzysortOptions: {
            characterLimit: 500,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "description",
                weight: 10,
              },
            ],
          },
        },
        {
          uid: "api::measure.measure",
          modelName: "measure",
          fuzzysortOptions: {
            characterLimit: 500,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "description",
                weight: 10,
              },
            ],
          },
        },
      ],
    },
  },
});
