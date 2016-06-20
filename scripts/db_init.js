var conf = {
    _id: "rs0",
    members: [{
        _id: 1,
        host: "localhost:27017"
    }]
};

if(!db.isMaster().ismaster) {
    rs.initiate(conf);
    printjson("Replication set initialized.");
} else {
    print("Replicate set has already been initialized.");
}
