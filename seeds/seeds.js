const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGOD_URI ||
    "mongodb://localhost/hidden_talents"
);

const talentSeed = [
    {
        username: "aaa",
        password: "aaa",
        talent: "tutor",
        name: "Paul Miller",
        contact: "",
        bio: "Math tutor for $5 an hour",
        zipcode: 27612

    },
    {
        username: "",
        password: "",
        talent: "tutor",
        name: "Laura Daniels",
        contact: "",
        bio: "Spanish tutor",
        zipcode: 27609

    },
    {
        username: "",
        password: "",
        talent: "web developer",
        name: "Scott Smith",
        contact: "",
        bio: "freelance front end web developer",
        zipcode: 27608
    },
    {
        username: "",
        password: "",
        talent: "home improvement",
        name: "Mike Johnson",
        contact: "",
        bio: "landscape crew for 8 dollars an hour",
        zipcode: 27610
    },
    {
        username: "",
        password: "",
        talent: "web developer",
        name: "Allison Webb",
        contact: "",
        bio: "full stack web developer for hire",
        zipcode: 27612
    },
    {
        username: "",
        password: "",
        talent: "home improvement",
        name: "George Williams",
        contact: "",
        bio: "contractor for hire, good with custom woodworking",
        zipcode: 27609
    },
    {
        username: "",
        password: "",
        talent: "web developer",
        name: "Jordan Howard",
        contact: "",
        bio: "enjoy using reactjs and prefer back end development, contact for prices on custom web apps",
        zipcode: 27608
    },
    {
        username: "",
        password: "",
        talent: "tutor",
        name: "Harrison Mills",
        contact: "",
        bio: "English tutor for hire. Can help with papers and improve your grades",
        zipcode: 27612
    }

]

db.Talent
    .remove({})
    .then(() => db.Talent.collection.insertMany(talentSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });