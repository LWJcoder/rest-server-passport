/**
 * Created by Joh on 2016/10/13.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var leadership = new Schema({
    name: {type: String, require: true},
    image: {type: String , require: true},
    description: {type: String , require: true},
    abbr: {type: String , require: true},
    destination: {type: String , require: true}
});

var Leadershipes = mongoose.model("Leadership", leadership);

module.exports = Leadershipes;