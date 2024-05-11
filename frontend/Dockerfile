# angular-build exec
FROM node:18.20.2 as build-stage

WORKDIR /frontend
COPY package*.json .
RUN npm install

COPY . .
RUN npm run build


# reverse proxy set
FROM nginx:1.15

COPY --from=build-stage /frontend/dist/frontend/browser /usr/share/nginx/html
COPY /proxy/nginx.conf /etc/nginx/nginx.conf