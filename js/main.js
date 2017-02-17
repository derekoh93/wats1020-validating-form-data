/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function() {
  //Adding validation to recognize states by abbreviated form
  jQuery.validator.addMethod("isState", function(value) { 
  var abrevState = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"];
  return $.inArray(value,toUpperCase(), states) != -1;
  }, "This is not a valid state. Please input State in abbreviated form.");
  
  // For Validation section
  $('#order-form').validate( {
    submitHandler: function(form) {
      form.submit();
    },
    //rules section for form
    rules: {
      
      "your-name": {
         required: true,
         maxlength: 128,
      },
      "your-address": {
         required: true,
      },
      "your-city": {
         required: true,
      },
      "your-state": {
         required: true,
         maxlength: 2,
      },
      "your-zip": {
         required: true,
         digits: true,
         minlength: 5,
      },
    //payment rules section
      "card-holder-name": {
         required: true,
         maxlength: 128
      },
      "card-number": {
         required: true,
         creditcard: true,
      },
      "expiry-month": {
         required: true,
      },
      "expiry-year": {
         required: true,
      },
      "cvv": {
         required: true,
         maxlength: 3,
         minlength: 3,
         digits: true,
      },
      //Shipping section
      "shipping-method": {
         required: true,
      },
      //instructions section
      "comments": {
         required: false,
         maxlenght: 500,
      }, 
    }
  });
});