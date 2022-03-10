const donationValidation = (data) => {
    let validation = {};
    var phoneNoRegex = /^\d{10}$/;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!data.name) {
        return validation = {error:'Please provide name'}
    } else if (!data.mobile){
        return validation = {error:'Please provide mobile number'}
    } else if (data.mobile && !data.mobile.match(phoneNoRegex)){
        return validation = {error:'Please provide valid mobile number'}
    } else if (data.email && !data.email.match(emailRegex)){
        return validation = {error:'Please provide valid mobile number'}
    } else if (!data.amount){
        return validation = {error:'Please provide amount'}
    }
    return validation;
}

module.exports = donationValidation;