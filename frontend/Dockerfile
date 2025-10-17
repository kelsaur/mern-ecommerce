#BUILD stage
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
#rename .env.production to .env since Vite looks for .env
COPY .env.production ./.env
RUN npm run build


#SERVE stage (nginx - official, lightweight Nginx container image)
FROM nginx:alpine

#remove default site and add nginx
RUN rm -rf /usr/share/nginx/html/*

#copy react build output from dist folder and serve them from usr/... by default
COPY --from=build /app/dist /usr/share/nginx/html

#nginx config - tell nginx to serve the React app, forward /api calls to the backend container
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]