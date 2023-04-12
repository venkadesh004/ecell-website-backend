const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://venkadesh:venkadesh@cluster0.bzzcnw1.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectDB = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("test").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

const db = client.db('test');
const collection = db.collection('messages');

module.exports.connectDB = connectDB;
module.exports.db = db;
module.exports.collection = collection;