var AWS = require("aws-sdk");
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

module.exports = publishSNS;