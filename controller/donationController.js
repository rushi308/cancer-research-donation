const query = require('../config/db') ;
const donationController= {};

donationController.checkDonor = async(mobileNumber) => {
    const statement = `SELECT count(id) as donationCount FROM donations WHERE mobile like '%${mobileNumber}%'`;
    return (await query(statement))[0];
};

donationController.insertDonation = async(data) => {
    const statement = `INSERT INTO donations(name,amount,mobile,email) VALUES ('${data.name}',${data.amount}, '${data.mobile}', '${data.email}')`;
    query(statement);
}

module.exports = donationController;