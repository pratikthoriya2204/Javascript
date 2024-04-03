const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
var conn;

async function myData(){
    try{
        conn = client.connect();
        console.log("connected successfull...");
    }catch(e){
        console.log(e)
    }

    var db = await client.db("pratik");
    await db.collection("life");
    // await db.collection("life").insertMany([{"name":"pratik","mob":2444},{"name":"ayush","mob":4545}]);
    await db.collection("life").updateOne({"name":"pratik"},{$set:{mob:8401648553}});
    await db.collection("life").deleteOne({"name":"pratik"})
    console.log("update successfull");
    let showData = await db.collection("life").find().toArray();
    console.log(showData);
}
myData();