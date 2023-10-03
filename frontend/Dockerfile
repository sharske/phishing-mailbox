# メインイメージを軽いnodeに
FROM node:lts-buster-slim

RUN apt-get update && apt-get install -y \
  openssl

WORKDIR /app

# ファイルをコピーする
COPY package.json package-lock.json ./

# package-lock.lockを変更させないinstall
RUN npm ci