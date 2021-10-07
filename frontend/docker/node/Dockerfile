FROM node:14.15.4-alpine

WORKDIR /app

COPY ./frontend/package*.json /app

RUN npm install

COPY ./frontend /app

CMD ["npm", "start"]