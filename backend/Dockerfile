FROM node:alpine

#create app dir
WORKDIR /app

#install deps ci-clean install exactly whats in package-lock.json, deleted node_modules before installing, --only=production - wont install devDependecsies
COPY package*.json ./
RUN npm ci --only=production

#copy source
COPY . .

#app has to listen on 0.0.0.0 inside containers
ENV PORT=4000
EXPOSE 4000

#
CMD ["npm", "start"]