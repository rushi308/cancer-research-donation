const Donation = function (params) {
    this.name = params.name;
    this.email = params.email;
    this.mobile = params.mobile;
    this.amount = params.amount;
}

module.exports = Donation;