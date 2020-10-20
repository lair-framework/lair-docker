FROM alpine:edge

RUN apk --no-cache add tini git \
    && apk --no-cache add --virtual devs tar curl && rm -rf /var/cache/apk/*

#Install Caddy Server, and All Middleware
RUN curl https://caddyserver.com/download/linux/amd64?license=personal | tar --no-same-owner -C /usr/bin/ -xz caddy
RUN curl -L https://github.com/caddyserver/caddy/releases/download/v1.0.4/caddy_v1.0.4_linux_amd64.tar.gz | tar --no-same-owner -C /usr/bin/ -xz caddy

#Remove build devs
RUN apk del devs

#Copy over a default Caddyfile
COPY ./Caddyfile /etc/Caddyfile
#Copy over tls files
COPY ./cert.pem /root/cert.pem
COPY ./key.pem /root/key.pem

ENTRYPOINT ["/sbin/tini"]

CMD ["caddy", "--conf", "/etc/Caddyfile"]
