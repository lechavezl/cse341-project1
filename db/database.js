const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

//Database variable
let database;

const initDb = (callback) => {
    if (database) {
        console.log("DB is already initialized!");
        return callback(null, database);
    }

    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            database = client;
            callback(null, database)
        })
        .catch((err) => {
            callback(err)
        });

};

const getDatabase = () => {
    if (!database) {
        throw Error("Database not initialize")
    }
    return database;
};

module.exports = {initDb, getDatabase};