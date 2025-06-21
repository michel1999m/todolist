# Use Node.js base image
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
