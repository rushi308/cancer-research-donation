const donationController = require('./controller/donationController');
const Donation = require('./models/donation');
const response = require('./helper/response');
const publishSNS = require('./helper/publishSNS');

exports.handler = async function(event, context, callback) {
    const data = new Donation(event);

    // Check Mobile Number in data model
    if(!data.mobile) {
      // Sending response for the unsuccessful innvocation
      return response(400,'Please provide mobile number',false);
    }
    
    // Insert Data
    donationController.insertDonation(data);
    // Check User donated for multiple time
    const checkUser = await donationController.checkDonor(data.mobile);
    if(checkUser.donationCount > 1) {
        // If Yes publish sns
        var params = {
            PhoneNumber: data.mobile,
            Message: `Thank you for your donation for the ${checkUser.donationCount} time at Cancer Reserach UK. You are such a human being!!`
        };
        publishSNS(params);
    }

    // Sending response for the successful innvocation
    return response(200,'Thank you for your donation!!',false);
};
