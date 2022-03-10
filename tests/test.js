const expect = require("chai").expect;
const proxyquire = require("proxyquire");
const lambdaTester = require("lambda-tester");

// Import mock functions from mock.js
const { validInput, invalidInput } = require("./mock");

// Define a common test suite
describe("Make Donation Request Lambda Unit Test", function () {
  let lambda = null;

  beforeEach(function () {
    // Exporting the lambda function
    lambda = proxyquire.noCallThru().load("../index.js",{});
  });

  describe("Successful Invocation", function () {
    let mockData = null;

    before(function () {
      // Get valid inputs from mock.js
      mockData = validInput();
    });

    it("with code = 200 (OK)", function (done) {
      // Execute lambda function using lambdaTester package
      lambdaTester(lambda.handler)
        .event(mockData) // Passing input data
        .expectResult((result) => {

          // Check if code exist
          expect(result.statusCode).to.exist;

          // Check if code = 200
          expect(result.statusCode).to.equal(200);

          // Check if body exist
          expect(result.body).to.exist;

          // Check if data is an array
          expect(result.body).to.be.a("string");

          done();
        })
        .catch(done); // Catch assertion errors
    });
  });

  describe("Unsuccessful Invocation", function () {
    let mockData = null;

    before(function () {
      // Get invalid inputs from mock.js
      mockData = invalidInput();
    });

    it("with code = 400 (Bad Request)", function (done) {
      // Execute lambda function using lambdaTester package
      lambdaTester(lambda.handler)
        .event(mockData) // Passing input data
        .expectResult((result) => {

          // Check if code exist
          expect(result.statusCode).to.exist;

          // Check if code = 400
          expect(result.statusCode).to.equal(400);

          // Check if body exist
          expect(result.body).to.exist;

          // Check if data is an array
          expect(result.body).to.be.a("string");

          done();
        })
        .catch(done); // Catch assertion errors
    });
  });
});