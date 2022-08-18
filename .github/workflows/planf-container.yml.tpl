serviceName: ${SERVICE_NAME}
containers:
  strapi:
    command: []
    environment:
      AWS_ACCESS_KEY_ID: "${AWS_ACCESS_KEY_ID}"
      AWS_S3_REGION_NAME: "${AWS_S3_REGION_NAME}"
      APP_KEYS: "${APP_KEYS}"
      ADMIN_JWT_SECRET: "${ADMIN_JWT_SECRET}"
      API_TOKEN_SALT: "${API_TOKEN_SALT}"
      DATABASE_HOST: "${DATABASE_HOST}"
      DATABASE_NAME: "${DATABASE_NAME}"
      DATABASE_PASSWORD: "${DATABASE_PASSWORD}"
      DATABASE_USER: "${DATABASE_USER}"
      JWT_SECRET: "${JWT_SECRET}"
    image: public.ecr.aws/n0p8j4k5/plan-f/cms:${GITHUB_SHA}
    ports:
      "1337": HTTP
publicEndpoint:
  containerName: strapi
  containerPort: 1337
  healthCheck:
    healthyThreshold: 2
    intervalSeconds: 20
    path: /
    successCodes: 200-499
    timeoutSeconds: 4
    unhealthyThreshold: 2
