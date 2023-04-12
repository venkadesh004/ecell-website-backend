const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true
    },
    subject: {
        type: "String",
        required: true
    },
    message: {
        type: "String",
        required: true
    }
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;