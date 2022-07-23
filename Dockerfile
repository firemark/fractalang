FROM node:16

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig-server.json .
COPY src src

RUN npm run build-webserver
RUN mv tsconfig-server.json tsconfig.json

EXPOSE 5000
ENV TS_NODE_BASEURL=dist-server

CMD [ "node", "-r", "tsconfig-paths/register", "dist-server/server/app.js" ]
