const ValidateWarehouse = ( formData ) => {
  const requiredFields = [
    "warehouse_name",
    "address",
    "city",
    "country",
    "contact_name",
    "contact_position",
    "contact_phone",
    "contact_email"
  ];
  const error = {};

  const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //validate email pattern
  const phone_number = /^\+\d{1,4}\s?\(\d{1,4}\)\s?\d{1,}[-\s]?\d{1,}$/; //validate phone number pattern

  requiredFields.forEach(field => {
    //if form field is empty it returns error
    if(formData[field] === "") {
        error[field] = "This field is required";
        //if email does not match pattern it returns error
    } else if (field === 'contact_email' && !email.test(formData[field])) {
        error[field] = "Please enter a valid email address";
        //if phone number does not match pattern it returns error
    } else if (field === 'contact_phone' && !phone_number.test(formData[field])) {
        error[field] = "Please enter a valid phone number";
    }
  });
  return error;
};

export default ValidateWarehouse;
