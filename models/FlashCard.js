var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FlashCardSchema = new Schema({
    
    hint:{
        type: String, 
        required: true
    }, 
    answer:{
        type: String, 
        required: true
    },
    guessedWrong:{
        type: Number,
        default: 0
    },
    bin:{
        type: Number,
        default: 0
    },
    lastViewed:{
        type:Date,
        default: Date.now
    }
});


var FlashCard = mongoose.model("FlashCard", FlashCardSchema);

module.exports = FlashCard;