# FROM node:18-alpine3.16

# WORKDIR /app/

# COPY package*.json ./

# RUN npm install

# COPY . ./

# RUN npm run build



# FROM nginx:1.23.2-alpine

# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=0 /app/build /usr/share/nginx/html
# RUN touch /var/run/nginx.pid
# RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
# USER nginx
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]

FROM node:18-alpine3.16
WORKDIR /app
COPY ./package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html
