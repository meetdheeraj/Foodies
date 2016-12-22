var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Restaurant=require("../models/restaurant.js");



//http://localhost:8080/restaurantdetails/updateRestaurant
router.put('/updateRestaurant',function(req, res, next) {

  console.log("updateRestaurant");
  var query = {'id':req.body.id};
  console.log(query);
  req.body.review = req.body.review;
  console.log("review :: "+req.body.review);

  Restaurant.findOneAndUpdate(query, req.body.tags, {upsert:false}, function(err, doc){
    if (err) return res.send("Error during save");
    return res.send("succesfully saved");
});


});


//http://localhost:8080/restaurantdetails/deleteRestaurant
router.delete('/deleteRestaurant',function(req, res, next) {

  console.log("deleteRestaurant");
  Restaurant.remove({ "id": req.body.id }, function(err) {
    if (!err) {
            //message.type = 'notification!';
            console.log("Deleted Successfully");
    }
    else {
            //message.type = 'error';
            console.log("Error");
    }
});
  res.send(req.body);
});

//view
//http://localhost:8080/restaurantdetails/viewRestaurant
router.get('/viewRestaurant',function(req, res, next) {
var restaurant;
  console.log("viewRestaurant");
  Restaurant.find(function(err, restaurantDetail) {

  if (err){
console.log("---------------There was an error while fetching data-----------------------");
    return console.error(err);

}
  restaurant=restaurantDetail;
  console.log(restaurant);
  res.json(restaurant);
});

});


//http://localhost:8091/restaurantdetails/saveRestaurant
router.post('/saveRestaurant',function(req, res, next) {

  console.log("saveRestaurant");
  console.log(req.body);
  var restaurantdetail=new Restaurant();
   restaurantdetail.id=req.body.id;
   restaurantdetail.name=req.body.name;
   restaurantdetail.url=req.body.url;
   restaurantdetail.location=req.body.location;
   restaurantdetail.address=req.body.address;
   restaurantdetail.locality=req.body.locality;
   restaurantdetail.city=req.body.city;
   restaurantdetail.zipcode=req.body.zipcode;
   restaurantdetail.country_id=req.body.country_id;
   restaurantdetail.cuisines=req.body.cuisines;
   restaurantdetail.thumb=req.body.thumb;
   restaurantdetail.menu_url=req.body.menu_url;
   restaurantdetail.user_rating=req.body.user_rating;
   restaurantdetail.aggregate_rating=req.body.aggregate_rating;

   //save
    restaurantdetail.save(function (err, savedRestaurant) {
    if (err) {

      console.error(err);
      return res.send("Error during save");
    }
    else{
    //console.log(savedNews);
    console.log(restaurantdetail.name);

    return res.send("Saved Successfully");
  }

    });


});


module.exports = router;
