var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var bcrypt = require("bcrypt-nodejs");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("POST /register", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({
      force: true
    });
  });

  it("should register a new user", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      userName: "John Smith",
      email: "jsmith@example.com",
      password: "notAP@ssw0rd"
    };

    // POST the request body to the server
    request
      .post("/register")
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        var requestBody = {
          userName: reqBody.userName,
          email: reqBody.email
        };

        expect(responseBody)
          .to.be.an("object")
          .that.includes(requestBody);

        expect(bcrypt.compareSync(reqBody.password, responseBody.password));
        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});

describe("POST favorite book", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({
      force: true
    });
  });

  it("should register a new user", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      userName: "John Smith",
      email: "jsmith@example.com",
      password: "notAP@ssw0rd"
    };

    // POST the request body to the server
    request
      .post("/register")
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        var requestBody = {
          userName: reqBody.userName,
          email: reqBody.email
        };

        expect(responseBody)
          .to.be.an("object")
          .that.includes(requestBody);

        expect(bcrypt.compareSync(reqBody.password, responseBody.password));
        // The `done` function is used to end any asynchronous tests
        done();
      });
  });

  it("should add some books for the new user", function(done) {
    db.favoriteBook
      .bulkCreate([
        {
          title: "A Game of Thrones",
          author: "George R.R. Martin",
          genre: "Fiction",
          ISBN: 9780553386790,
          year: 2011,
          UserId: 1
        }
      ])
      .then(function() {
        request.get("/user/1").then(function() {
          var responseStatus = res.status;
          // var responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);
        });
      });

    done();
  });
});
