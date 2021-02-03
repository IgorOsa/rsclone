FROM library/node:12.20.1-alpine
RUN apk update && apk upgrade &&     apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
COPY ./dist/apps /usr/src/app/
RUN chmod -R 777 /usr/src/app/
RUN mkdir -p /usr/src/logs/
RUN chmod -R 777 /usr/src/logs/
RUN npm install --production && npm cache clean --force
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]
