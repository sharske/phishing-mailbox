FROM ruby:3.2.2
# 作業ディレクトリの作成
WORKDIR /app

# ホスト側（ローカル）（左側）のGemfileを、コンテナ側（右側）のGemfileへ追加
# ADD ./Gemfile /app/Gemfile
# ADD ./Gemfile.lock /app/Gemfile.lock
# COPY Gemfile Gemfile.lock ./

# Gemfileのbundle install
# RUN bundle install

COPY Gemfile Gemfile.lock ./
RUN bundle install
# CMD [ "rails","s" ]
# CMD [ "rails","s","-p","3001" ]