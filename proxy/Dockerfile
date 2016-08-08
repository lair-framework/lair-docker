FROM alpine:edge

RUN apk --no-cache add tini git \
    && apk --no-cache add --virtual devs tar curl && rm -rf /var/cache/apk/*

#Install Caddy Server, and All Middleware
RUN curl "https://caddyserver.com/download/build?os=linux&arch=amd64&features=git,hugo,ipfilter,jwt,mailout,prometheus,realip,search" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy

#Remove build devs
RUN apk del devs

#Copy over a default Caddyfile
COPY ./Caddyfile /etc/Caddyfile
#Copy over tls files
COPY ./cert.pem /root/cert.pem
COPY ./key.pem /root/key.pem

ENTRYPOINT ["/sbin/tini"]

CMD ["caddy", "--conf", "/etc/Caddyfile"]