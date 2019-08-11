const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials:true}));

const db = require("./models");


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/flashcards";

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

}
else{
    app.use(express.static(__dirname+"/static"));
}

app.get("/api/flashcard/:id", function(req,res){
    db.FlashCard.findOne({_id: req.params.id})
    .then(flashcard => res.json(flashcard))
    .catch(err => res.json(err));
});

app.get("/api/flashcards", function(req,res){
    db.FlashCard.find()
    .then(flashcards => res.json(flashcards))
    .catch(err => res.json(err));
});

app.post("/api/flashcard", function(req,res){
    let flashcard = req.body;
    db.FlashCard.create(flashcard)
    .then(flashcards => res.json(flashcards))
    .catch(err => res.json(err));
});



app.delete("/api/flashcard/:id", function(req,res){
    db.FlashCard.remove({_id: req.params.id })
    .then(()=> res.send("success"))
    .catch(err => res.json(err));
});

//THIS CODE IS FOR CONNECTIONG TO DB//
mongoose.connect(MONGODB_URI).then( () =>{
    console.log("connected to database");
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
}
    // () => {db.User.remove({},err => console.log(err))}
).catch(err => console.log(err));

app.listen(PORT, function(){

    console.log(`server now active on port ${PORT}`);

});

