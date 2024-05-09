# 1. ビルド生成
FROM node:18.20.2 as build-stage

## 先行してインストールパッケージを定義する
WORKDIR /ng-app
COPY package*.json .
RUN npm install


## ビルド開始
COPY . .
RUN npm run build


# 2. リバースプロキシの設定
FROM nginx:1.15

COPY --from=build-stage /ng-app/dist/ng-app/browser /usr/share/nginx/html

COPY /proxy/nginx.conf /etc/nginx/nginx.conf