FROM node:18-alpine
# Installing libvips-dev for sharp Compatability
RUN apk upgrade && apk add vips && apk add bash
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/planf
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/planf/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install --ignore-engines
WORKDIR /opt/planf/app
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]
