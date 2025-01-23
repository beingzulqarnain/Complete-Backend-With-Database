const { MongoClient } = require('mongodb');
const dbConnectionUrl = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(dbConnectionUrl);

const dbConnection = async () => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("MongoDBProject");
    return db;
}

module.exports = {dbConnection}