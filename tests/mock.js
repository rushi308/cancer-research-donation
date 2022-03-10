exports.validInput = () => {
    let data = {
      name: "Rushi Patel",
      mobile: "9898786789",
      email:"rushi@mailinator.com",
      amount:111
    };
  
    return data;
  };


exports.invalidMobileInput = () => {
    let data = {
        name: "Rushi Patel",
        mobile:'',
        email:'rushi@mailinator.com',
        amount:34
    };

    return data;
};  

exports.invalidEmailInput = () => {
  let data = {
      name: "Rushi Patel",
      mobile:'8989676756',
      email:'rushi.com',
      amount:45
  };

  return data;
};  

exports.invalidAmountInput = () => {
  let data = {
      name: "Rushi Patel",
      mobile:'8989676756',
      email:'rushi@mailinator.com',
      amount:''
  };

  return data;
};  

exports.invalidNameInput = () => {
  let data = {
      name:'',
      mobile:'8989676756',
      email:'rushi@mailinator.com',
      amount:0
  };

  return data;
};  