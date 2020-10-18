// JavaScript Document
    function validateName() {
            var name = document.getElementById('name').value;
            if(name.length == 0) {
              name = document.getElementById('email').value;
              return true;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }

          function validatePhone() {
            var phone = document.getElementById('phone').value;
            if(phone.length == 0) {
              alert("Phone number can't be blank") ;//Validation Message
              return false;
            }

            if(!phone.match(/^[0]?[789]\d{9}$/)) {
             alert("Please enter a correct phone number") ;//Validation Message
             return false;
           }

           return true;

         }

         function validateEmail () {

          var email = document.getElementById('email').value;
          if(email.length == 0) {
            email = document.getElementById('emailSub').value;
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }

         function validateEmailSub () {

          var emailSub = document.getElementById('emailSub').value;
          if(emailSub.length == 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!emailSub.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }




        function validateForm() {
          if (!validateEmail()) {

            alert("Form not submitted");//Validation Message
            return false;
          }
          else {
            submitted=true;
            return true;
          }
        }