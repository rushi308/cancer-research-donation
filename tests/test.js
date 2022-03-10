const expect = require("chai").expect;
const proxyquire = require("proxyquire");
const lambdaTester = require("lambda-tester");

// Import mock functions from mock.js
const { validInput, invalidAmountInput, invalidMobileInput, invalidEmailInput, invalidNameInput } = require("./mock");

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
          console.log(result,'---')
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

    it("with invalid name code = 400 (Bad Request)", function (done) {
      // Execute lambda function using lambdaTester package
      mockData = invalidNameInput();

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

    it("with invalid email code = 400 (Bad Request)", function (done) {
      // Execute lambda function using lambdaTester package
      mockData = invalidEmailInput();

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

    it("with invalid mobile code = 400 (Bad Request)", function (done) {
      // Execute lambda function using lambdaTester package
      mockData = invalidMobileInput();

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

    it("with invalid amount code = 400 (Bad Request)", function (done) {
      // Execute lambda function using lambdaTester package
      mockData = invalidAmountInput();

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