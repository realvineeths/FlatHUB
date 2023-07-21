const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flatSchema = new Schema({
    
    BHK_NO:{
        type:Number,
        required: true,
    },
    ADDRESS:{
        type:String,
        required: true,
    },
    PRICE:{
        type:Number,
        required: true,
    },
    City:{
        type:String,
        required: true,
    },
    SQUARE_FT:{
        type:Number,
        required: true,
    },
    UNDER_CONSTRUCTION: { 
        type: Boolean,
        required: true,
    },
    POSTED_BY: {
        type: String,
        required: true,
    }    
}
);


const flats = mongoose.model('flats',flatSchema);

module.exports = flats;