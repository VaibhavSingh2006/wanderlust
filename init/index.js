const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config();

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((ob) => ({
        ...ob,
        Owner: "652d0001ae547c5d37e56d5f",
        geometry: {
            type: "Point",
            coordinates: [77.209, 28.6139],
        },
    }));
    await Listing.insertMany(initData.data);
    console.log("DB initialized with sample data");
};
initDB();