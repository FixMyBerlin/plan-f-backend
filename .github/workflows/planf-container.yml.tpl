serviceName: ${SERVICE_NAME}
containers:
  app:
    command: []
    environment:
      AWS_ACCESS_KEY_ID: "${AWS_ACCESS_KEY_ID}"
      AWS_S3_REGION_NAME: "${AWS_S3_REGION_NAME}"
      APP_KEYS: "${APP_KEYS}"
      ADMIN_JWT_SECRET: "${ADMIN_JWT_SECRET}"
      API_TOKEN_SALT: "${API_TOKEN_SALT}"
      TRANSFER_TOKEN_SALT: "${TRANSFER_TOKEN_SALT}"
      DATABASE_HOST: "${DATABASE_HOST}"
      DATABASE_NAME: "${DATABASE_NAME}"
      DATABASE_PASSWORD: "${DATABASE_PASSWORD}"
      DATABASE_USER: "${DATABASE_USER}"
      JWT_SECRET: "${JWT_SECRET}"
      PORT: "80"
      NODE_ENV: "${NODE_ENV}"
      MAILJET_PUBLIC_KEY: "${MAILJET_PUBLIC_KEY}"
      MAILJET_SECRET_KEY: "${MAILJET_SECRET_KEY}"
      S3_REGION: "${S3_REGION}"
      S3_BUCKET_NAME: "${S3_BUCKET_NAME}"
      S3_ACCESS_KEY_ID: "${S3_ACCESS_KEY_ID}"
      S3_SECRET_ACCESS_KEY: "${S3_SECRET_ACCESS_KEY}"
    image: public.ecr.aws/n0p8j4k5/plan-f/cms:${GITHUB_SHA}
    ports:
      "80": HTTP
publicEndpoint:
  containerName: app
  containerPort: 80
  healthCheck:
    path: /_health
    timeoutSeconds: 8
    healthyThreshold: 2
    unhealthyThreshold: 3
    intervalSeconds: 20
    successCodes: 200-299
