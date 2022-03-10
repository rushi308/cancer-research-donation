var AWS = require("aws-sdk");
const donationController = require('./controller/donationController');
const Donation = require('./models/donation');

var SNS = new AWS.SNS();

const publishSNS = async(data) => {
     return new Promise((resolve,reject) => {
         SNS.publish(data, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
     });
};

exports.handler = async function(event, context, callback) {
    const data = new Donation(event);
    // Insert Data
    donationController.insertDonation(data);
    // Check User donated for multiple time
    const checkUser = await donationController.checkDonor(data.mobile);
    if(checkUser.donationCount > 1) {
        // If Yes publish sns
        var params = {
            PhoneNumber: data.mobile,
            Message: 'Thank you for your donation at Cancer Reserach UK. You are such a human being!!'
        };
        publishSNS(params);
    }
    // Send Response
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Thank you for donation`,
      }),
      isBase64Encoded:false
    };
    return response;
};
