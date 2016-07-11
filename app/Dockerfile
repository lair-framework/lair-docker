FROM node:0.10.41

EXPOSE 11014

WORKDIR /root/app
RUN curl -SLO "https://github.com/lair-framework/lair/releases/download/v2.4.1/lair-v2.4.1-linux-amd64.tar.gz" \
    && tar -zxf lair-v2.4.1-linux-amd64.tar.gz \
    && cd bundle/programs/server \
    && npm i

ENV ROOT_URL=http://0.0.0.0
ENV PORT 11014
ENV MONGO_URL=mongodb://lairdb:27017/lair
ENV MONGO_OPLOG_URL=mongodb://lairdb:27017/local

CMD sleep 4 && node /root/app/bundle/main.js