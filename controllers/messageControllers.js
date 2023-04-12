const { Router } = require('express');
const Model = require('../models/message');
const {collection, connectDB} = require('../db/db');
const postData = async (req, res) => {
    connectDB();
    try {
        const userMessage = req.body;
        console.log(userMessage);

        await collection.insertOne(userMessage).then(result => {
            res.send("Done");
        }).catch(err => {
            res.send("Failed");
        });
    } catch (err) {
        console.log(`Error ${err}`)
    }
};

const getData = async (req, res) => {
    console.log("Getting data");
    connectDB();
    try {
        await collection.find({}).toArray(function(err, result) {
            if (err) throw err;

            console.log(result);
            res.send(result);
        });
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};

module.exports.postData = postData;
module.exports.getData = getData;