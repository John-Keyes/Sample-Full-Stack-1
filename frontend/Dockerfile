FROM node:16-alpine

WORKDIR /app

COPY package-lock.json .
RUN npm i

COPY . ./
RUN npm run build

CMD ["npm", "run", "start"]

