FROM golang:1.8.1

EXPOSE 11015

RUN go get -v github.com/lair-framework/api-server
ADD plugins /plugins
WORKDIR /plugins
RUN rm .keep
RUN for file in *.go;                                         \
        do                                                    \
                echo "Making so for $file"  &&                \
                so=$(echo $file | sed 's/\.go$/\.so/g') &&    \
                go build -v -buildmode=plugin -o $so $file && \
                rm $file ;                                    \
        done
WORKDIR /root
ENV TRANSFORM_DIR=/plugins
ENV MONGO_URL=mongodb://lairdb:27017/lair
ENV API_LISTENER=0.0.0.0:11015
CMD api-server
