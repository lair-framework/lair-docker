FROM busybox:ubuntu-14.04

ADD https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip /
RUN unzip ngrok-stable-linux-amd64.zip -d /bin && \
    rm -f ngrok-stable-linux-amd64.zip && \
    mkdir /.ngrok2 && chmod 755 /.ngrok2

RUN mkdir -p /var/log/ngrok && chmod 755 /var/log/ngrok

CMD if [ $ENABLED -eq 1 ]; then \
    echo "To view full logs run: docker exec lair_ngrok cat /var/log/ngrok/debug.log" && \
    /bin/ngrok authtoken $AUTH_TOKEN | tee /var/log/ngrok/debug.log && \
    /bin/ngrok tcp -log stdout -log-level debug -log-format term $HTTPS_LISTENER | \
    tee /var/log/ngrok/debug.log | \
    awk -v date="$(date +"%Y/%m/%d %T") Lair is available at" '/URL:tcp:/ {gsub("URL:tcp:","https:",$10); print date, $10}'; \
    fi
    