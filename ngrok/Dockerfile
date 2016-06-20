FROM busybox:ubuntu-14.04

ADD https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip /
RUN unzip ngrok-stable-linux-amd64.zip -d /bin && \
    rm -f ngrok-stable-linux-amd64.zip && \
    touch /.ngrok

RUN mkdir -p /var/log/ngrok && chmod 755 /var/log/ngrok

CMD /bin/ngrok http -log stdout -log-level debug -log-format term $HTTP_LISTENER | \
    tee /var/log/ngrok/debug.log | \
    awk -v date="$(date +"%Y/%m/%d %T") Lair is available at" '/URL:https:/ {gsub("URL:","",$10); print date, $10}'