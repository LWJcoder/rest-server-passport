/**
 * promoRouter
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Promotions = require('../models/promotions');
/*
var hostname = 'localhost';
var port = 3001;

var app = express();

app.use(morgan('dev'));
*/

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .get(function(req,res,next){
        Promotions.find({}, function (err, promotion) {
            if (err) throw(err);

            res.json(promotion);
        });
    })

    .post(function(req, res, next){
        Promotions.create(req.body, function (err, promotion) {
            if (err)throw(err);
            console.log("Created Promotions");
            var id = promotion._id;
            res.writeHead(200,{"Content-Type": "text/plain"});

            res.end('add the  Promotions with id:'+ id);
        });
    })
    .delete(function(req, res, next){
        Promotions.remove({}, function (err, resp) {
            if (err)throw(err);
            res.json(resp);
        });
    });

promoRouter.route('/:promoId')
    .get(function(req,res,next){
        Promotions.findById(req.params.promoId, function (err, promotion) {
            if (err)throw(err);
            res.json(promotion);
        });
    })

    .put(function(req, res, next){
        Promotions.findByIdAndUpdate(req.params.promoId, {
            $set:req.body
        },{new: true},function (err, promotion) {
            if (err)throw(err);
            res.json(promotion);
        })
    })

    .delete(function(req, res, next){
        Promotions.findByIdAndRemove(req.params.promoId, function (err, resp) {
            if (err)throw(err);
            res.json(resp);
        });
    });

promoRouter.route('/:promoId/comments/:commentId')
    .get(function (req, res, next) {
        Promotions.findById(req.params.promoId, function (err, promotion) {
            if (err) throw err;
            res.json(promotion.comments.id(req.params.commentId));
        });
    })

    .put(function (req, res, next) {
        // We delete the existing commment and insert the updated
        // comment as a new comment
        Promotions.findById(req.params.promoId, function (err, promotion) {
            if (err) throw err;
            promotion.comments.id(req.params.commentId).remove();
            promotion.comments.push(req.body);
            promotion.save(function (err, promotion) {
                if (err) throw err;
                console.log('Updated Comments!');
                res.json(promotion);
            });
        });
    })

    .delete(function (req, res, next) {
        Promotions.findById(req.params.promoId, function (err, promotion) {
            promotion.comments.id(req.params.commentId).remove();


            promotion.save(function (err, resp) {
                if (err) throw err;
                res.json(resp);
            });
        });
    });


/*app.use('/promotions',promoRouter);

app.use(express.static(__dirname + '/public'));
app.listen(port, hostname, function(){
    console.log('Server running at http:/'+hostname+':'+port+'/');
});*/
module.exports = promoRouter;