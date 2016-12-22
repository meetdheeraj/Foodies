import React from 'react';
export default class SearchComponent extends React.Component{

    constructor()
        {
          super();

          this.fetchRestaurantDetails=this.fetchRestaurantDetails.bind(this);
          this.fetchCityFromExternalAPI=this.fetchCityFromExternalAPI.bind(this);
          this.fetchRestaurantsFromExtAPI=this.fetchRestaurantsFromExtAPI.bind(this);
        }

fetchRestaurantDetails(){ 
        var city=this.refs.city.value;
        var cuisine=this.refs.cuisine.value;
        console.log("main-fetchRestaurantDetails : "+city+" "+cuisine);

        this.fetchCityFromExternalAPI(city,cuisine);
    
    }

fetchCityFromExternalAPI(city,cuisine) {
console.log("inside fetchCityFromExternalAPI: "+city);

$.ajax({
url: "https://developers.zomato.com/api/v2.1/cities?q="+city+"&apikey=45cb6ccebe1e43ef9876553d9ba792c5",
type: "GET",
dataType: 'JSON',

success : function(msg){
var city_Id=msg.location_suggestions[0].id;
console.log("City Id is "+city_Id);
this.fetchRestaurantsFromExtAPI(city_Id,cuisine);

}.bind(this),
error: function(err){
cosnole.log("Main-Error Fetching News");
}.bind(this)
});
}

fetchRestaurantsFromExtAPI(cityId,cuisine) {
console.log("inside fetchCuisineFromExternalAPI: "+cityId);
console.log("inside fetchCuisineFromExternalAPI: "+cuisine);

$.ajax({
url: "https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&entity_type=city&count=5&cuisines="+cuisine+"&apikey=45cb6ccebe1e43ef9876553d9ba792c5",

type: "GET",
dataType: 'JSON',
success : function(msg){

  var name=msg.restaurants[0].restaurant.name;
                            
  
  var restaurantUrl= msg.restaurants[0].restaurant.url;
   var address=msg.restaurants[0].restaurant.location.address;
    var locality=msg.restaurants[0].restaurant.location.locality;
    console.log(name);
           
         }.bind(this),
error: function(err){
cosnole.log("Main-Error Fetching News");
}.bind(this)
});


        }



    
	render(){       

            return (

                <div>
                    
                    <div className="input-group" id="input-group">
                        <input type="text" className="form-control" ref="city" placeholder="Enter City"/>
                         <input type="text" className="form-control" ref="cuisine" placeholder="Enter Cuisine"/>
                    		<div className="input-group-btn" id="input-group-btn">
                         	 <button className="btn btn-default" type="button" onClick={this.fetchRestaurantDetails}>
                       		</button>
                        	</div>
                    </div>

                </div>

             )
    }   


} 