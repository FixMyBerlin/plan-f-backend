serviceName: ${SERVICE_NAME}
containers:
  strapi:
    command: []
    environment:
      AWS_ACCESS_KEY_ID: "${LIGHTSAIL_STORAGE_ACCESS_KEY_ID}"
      AWS_S3_REGION_NAME: "${LIGHTSAIL_STORAGE_REGION_NAME}"
      AWS_SECRET_ACCESS_KEY: "${LIGHTSAIL_STORAGE_SECRET_ACCESS_KEY}"
    image: public.ecr.aws/n0p8j4k5/plan-f/cms:${GITHUB_SHA}
    ports:
      "80": HTTP
publicEndpoint:
  containerName: strapi
  containerPort: 80
  healthCheck:
    healthyThreshold: 2
    intervalSeconds: 20
    path: /
    successCodes: 200-499
    timeoutSeconds: 4
    unhealthyThreshold: 2
