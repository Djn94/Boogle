const mongoose = require("mongoose");
const bd = require("../models");

mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost/googlebooks"
);

const testSeed = [

    {
        title: "Test Book",
        author: "Jeffrey Schmittywerbenjagermanjensen",
        description: "An epic tale of one smol turtle in a very large pond",
        image: "https://images.unsplash.com/photo-1501224307784-d38c497e1fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        link: "https://www.google.com"
    }
];

db.searchResults.remove({}).then(() => db.Googlebooks.collection.insertMany(testSeed))
    .then(data => {
        console.log(data.result.n + "book inserted");
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(1);
    })