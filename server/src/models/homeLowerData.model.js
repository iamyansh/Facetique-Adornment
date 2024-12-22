const { Schema, model } = require('mongoose');


const reqString = { type: String, required: true };
const reqArray = { type: Array, required: true };

const homeLowerDataSchema = new Schema({
    heading: reqString,
    description: reqString,
    gender: reqString,
    img: reqArray,
}, {
    versionKey: false
});

module.exports = model("homeLowerData", homeLowerDataSchema);