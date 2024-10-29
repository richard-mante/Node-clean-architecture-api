FROM node:22-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . ./

EXPOSE 4500

CMD [ "npm","start"]
