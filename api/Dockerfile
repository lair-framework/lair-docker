FROM alpine:latest

EXPOSE 11015

RUN apk --update add curl && rm -fr /var/cache/apk/*
RUN curl -Lo /usr/bin/api-server https://github.com/lair-framework/api-server/releases/download/v1.1.0/api-server_linux_amd64 \
     && chmod +x /usr/bin/api-server

ENV MONGO_URL=mongodb://lairdb:27017/lair
ENV API_LISTENER=0.0.0.0:11015

CMD /usr/bin/api-server