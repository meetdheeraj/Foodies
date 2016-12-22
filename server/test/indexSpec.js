var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");
var server = supertest.agent("http://localhost:8080");
/*
describe("Testing the third route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/data")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Amit");
          myObj.age.should.be.equal("26");
          myObj.location.should.be.equal("Bangalore");
          done();
        });

  });
  it("should handle and send the JSON data", function(done){
    url
        .get("/data/js")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.product.should.be.equal("Mobile");
          myObj.price.should.be.equal("12000");
          done();
        });

  });
});

*/
/*
describe("Testing register route", function(err){
  it("should handle and send the success message", function(done){
	  var det={"username":"Punit","password":"1234","name":"Punit"};
    url
        .post("/register")
		.send(det)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Saved Successfully",res.text, "res.text is not matching with Saved Successfully");
          done();
        });

  });
  
});
*/

describe("Testing login route", function(err){
  it("should handle and send the success message", function(done){
	  var lo={"username":"Punit","password":"1234","name":"Punit"};
    url
        .post("/users/login")
		.send(lo)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });

  });
  
});


describe("Testing login route", function(err){
	it("should handle and send the success message", function(done){
	  var lo={"username":"Punit","password":"1234","name":"Punit"};
    server
        .post("/users/login")
		.send(lo)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });

  
  
  it("should handle and send the success message", function(done){
	  var dt={

    "author": "Chris Velazco",
    "title": "Samsung Gear S3 Frontier review: Lots of features, not enough apps",
    "description": "$350 gets you a great design and a very limited ecosystem.",
    "url": "https://www.engadget4.com/2016/12/20/samsung-gear-s3-frontier-review/",
    "urlToImage": "https://s.aolcdn.com/dims5/amp:5064dcd1a093da615a253d3a3a1a0763f846eebf/t:1200,630/q:80/?url=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F59f272bccaa2401725265c7886c2a322%2F204714931%2Fgears3-frontier.jpg",
    "publishedAt": "2016-12-20T18:00:00Z"

};
    server
	.post("/newsGet/saveNews")
		.send(dt)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Saved Successfully",res.text, "res.text is not matching with Saved Successfully");
          done();
        });

  });
  
  });
});

describe("Testing login route", function(err){
	it("should handle and send the success message", function(done){
	  var lo={"username":"Punit","password":"1234","name":"Punit"};
    server
        .post("/users/login")
		.send(lo)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });

  
  
  it("should handle and send the success message", function(done){
	  var dt={

    "author": "Chris Velazco",
    "title": "Samsung Gear S3 Frontier review: Lots of features, not enough apps",
    "description": "$350 gets you a great design and a very limited ecosystem.",
    "url": "https://www.engadget.com/2016/12/20/samsung-gear-s3-frontier-review/",
    "urlToImage": "https://s.aolcdn.com/dims5/amp:5064dcd1a093da615a253d3a3a1a0763f846eebf/t:1200,630/q:80/?url=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F59f272bccaa2401725265c7886c2a322%2F204714931%2Fgears3-frontier.jpg",
    "publishedAt": "2016-12-20T18:00:00Z"

};
    server
	.post("/newsGet/saveNews")
		.send(dt)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Saved Successfully",res.text, "res.text is not matching with Saved Successfully");
          done();
        });

  });
  
  });
});


describe("Testing update news route", function(err){
	it("should handle and send the success message", function(done){
	  var lo={"username":"Punit","password":"1234","name":"Punit"};
    server
        .post("/users/login")
		.send(lo)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });

  
  
  it("should handle and send the success message", function(done){
	  var up={

    "author": "Chris Velazco",
    "title": "Samsung Gear S3 Frontier review: Lots of features, not enough apps",
    "description": "$350 gets you a great design and a very limited ecosystem.",
    "url": "https://www.engadget4.com/2016/12/20/samsung-gear-s3-frontier-review/",
    "urlToImage": "https://s.aolcdn.com/dims5/amp:5064dcd1a093da615a253d3a3a1a0763f846eebf/t:1200,630/q:80/?url=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F59f272bccaa2401725265c7886c2a322%2F204714931%2Fgears3-frontier.jpg",
    "publishedAt": "2016-12-20T18:00:00Z","tags":"train"

};
    server
	.put("/newsGet/updateNews")
		.send(up)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("succesfully saved",res.text, "res.text is not matching with succesfully saved");
          done();
        });

  });
  
  });
});


describe("Testing delete news route", function(err){
	it("should handle and send the success message", function(done){
	  var del={"username":"Punit","password":"1234","name":"Punit"};
    server
        .post("/users/login")
		.send(del)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Successfully Logged In!",res.text, "res.text is not matching with credentials");
          done();
        });

  
  
  it("should handle and send the success message", function(done){
	  var up={

    "author": "Chris Velazco",
    "title": "Samsung Gear S3 Frontier review: Lots of features, not enough apps",
    "description": "$350 gets you a great design and a very limited ecosystem.",
    "url": "https://www.engadget.com/2016/12/20/samsung-gear-s3-frontier-review/",
    "urlToImage": "https://s.aolcdn.com/dims5/amp:5064dcd1a093da615a253d3a3a1a0763f846eebf/t:1200,630/q:80/?url=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F59f272bccaa2401725265c7886c2a322%2F204714931%2Fgears3-frontier.jpg",
    "publishedAt": "2016-12-20T18:00:00Z","tags":"train"

};
    server
	.delete("/newsGet/deleteNews")
		.send(up)
        .expect(200)
        
        .end(function(err,res){
          should.not.exist(err);
          		  assert.equal("Deleted Successfully",res.text, "res.text is not matching with Deleted Successfully");
          done();
        });

  });
  
  });
});



