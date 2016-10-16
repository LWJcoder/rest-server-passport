/**
 * Created by Joh on 2016/10/13.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
//create a schema
var promotionsSchema = new Schema({
    name:{type: String, require: true},
    image:{type: String, require: true},
    label:{type: String, default: ""},
    price:{type: Currency, require: true, Fixed: 2},
    description:{type: String, require: true}
});

var Promotions = mongoose.model("Promotion", promotionsSchema);

module.exports = Promotions;