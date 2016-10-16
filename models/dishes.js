/**
 * Created by Joh on 2016/10/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
//create a schema
var commentSchema = new Schema({
    rating: {
        type:Number,
        min: 1,
        max: 5
    },
    comment:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
},{ timestamp: true});



//create a schema
var dishSchema = new Schema({
    name: {type: String, require: true},
    image: {type: String , require: true},
    category: {type: String , require: true},
    label: {type: String , default: ""},
    price: { type: Currency,required: true},
    description: {type: String , require: true},
    comments: [commentSchema]

},{
    timestamp:true
});

//创建一个model
var Dishes = mongoose.model('Dish', dishSchema);
/*Dishes.price.toFixed(2);*/
module.exports= Dishes;