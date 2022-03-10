exports.validInput = () => {
    let data = {
      name: "Rushi Patel",
      mobile: "+44 89897665",
      email:"rushi@mailinator.com",
      amount:111
    };
  
    return data;
  };


exports.invalidInput = () => {
    let data = {
        name: "Rushi Patel",
        mobile:'',
    };

    return data;
  };  