var conf = {
    _id: "rs0",
    members: [{
        _id: 1,
        host: "lairdb:27017"
    }]
};

try {
    var rsConf = rs.conf();

    if (rsConf.members[0].host !== "lairdb:27017") {
        rs.initiate(conf);
        print("Replication set initialized.");
    } else {
        print("Replicate set has already been initialized.");
    }
} catch (err) {
    rs.initiate(conf);
    print("Replication set initialized.");
}
