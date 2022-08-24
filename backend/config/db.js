//const mongoose = require("mongoose")

const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://mobi1234:mobi1234@cluster0.juitfjy.mongodb.net/trav?retryWrites=true&w=majority"

async function main(){
  
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



module.exports = main