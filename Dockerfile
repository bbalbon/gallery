FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 6969

CMD ["npm", "run", "start"]