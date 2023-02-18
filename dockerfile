FROM node:19-alpine3.15 as build
RUN apk update
WORKDIR /app
COPY . /app/
RUN npm ci
RUN npm run build

FROM nginx:1.23.2-alpine 
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
