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
            characterLimit: 300,
            threshold: -1000,
            limit: 6,
            keys: [
              {
                name: "title",
                weight: 100,
              },
              {
                name: "subcategory",
                weight: 0,
              },
              {
                name: "goals",
                weight: 0,
              },
              {
                name: "particularities",
                weight: 0,
              },
              {
                name: "awards",
                weight: 0,
              },
              {
                name: "localChallenges",
                weight: 0,
              }
            ],
          },
        },
        {
          uid: "api::topic.topic",
          modelName: "topic",
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
            characterLimit: 300,
            threshold: -1000,
            limit: 4,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "description",
                weight: 0,
              },
            ],
          },
        },
        {
          uid: "api::measure.measure",
          modelName: "measure",
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
            characterLimit: 300,
            limit: 2,
            threshold: -1000,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "description",
                weight: 0,
              },
            ],
          },
        },
      ],
    },
  },
});
