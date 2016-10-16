/**
 * leaderRouter
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Leadership = require('../models/leaderships')
/*var hostname = 'localhost';
 var port = 3000;

var app = express();

app.use(morgan('dev'));*/

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .get(function(req,res,next){
        Leadership.find({}, function (err, leadership) {
            if (err) throw(err);

            res.json(leadership);
        });
    })

    .post(function(req, res, next){
        Leadership.create(req.body, function (err, leadership) {
            if (err)throw(err);
            console.log("Created Leadership");
            var id = leadership._id;
            res.writeHead(200,{"Content-Type": "text/plain"});

            res.end('add the  leadershipes with id:'+ id);
        });
    })
    .delete(function(req, res, next){
        Leadership.remove({}, function (err, resp) {
            if (err)throw(err);
            res.json(resp);
        });
    });

leaderRouter.route('/:leadershipId')
    .get(function(req,res,next){
        Leadership.findById(req.params.leadershipId, function (err, leadership) {
            if (err)throw(err);
            res.json(leadership);
        });
    })

    .put(function(req, res, next){
        Leadership.findByIdAndUpdate(req.params.leadershipId, {
            $set:req.body
        },{new: true},function (err, leadership) {
            if (err)throw(err);
            res.json(leadership);
        })
    })

    .delete(function(req, res, next){
        Leadership.findByIdAndRemove(req.params.leadershipId, function (err, resp) {
            if (err)throw(err);
            res.json(resp);
        });
    });


/*app.use('/leaderships',leaderRouter);

app.use(express.static(__dirname + '/public'));

 app.listen(port, hostname, function(){
 console.log('Server running at http:/'+hostname+':'+port+'/');
 });*/
module.exports = leaderRouter;