FROM node:alpine3.14

RUN mkdir -p /server
WORKDIR /server

COPY package*.json ./
RUN npm install -g typescript
RUN npm install
COPY . .

CMD [ "tsc" ]
CMD [ "node", "dist/app.js" ]
