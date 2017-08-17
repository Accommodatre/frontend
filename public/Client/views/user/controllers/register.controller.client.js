(function () {
    angular
        .module("WamApp")
        .controller("registerController", registerController);

    function registerController(userService, $location) {
        var model = this;

        model.registerUser = registerUser;

        function init() {

        }
        init();

         function registerUser(user) {
             model = this;
             if (typeof user === 'undefined' || typeof user.email === 'undefined') {
                 model.emailError = "Please provide valid email address.";
             }
             else if (typeof user.first_name === "undefined") {
                 model.fnameError = "Please provide first name.";
             }
             else if (typeof user.last_name === "undefined") {
                 model.lnameError = "Please provide last name.";
             }
             else if (typeof user.password === "undefined") {
                 model.passwordError = "Invalid password provided.";
             }
             else if (user.password !== user.password_confirmation) {
                 model.cpasswordError = "Confirmation password not match.";
             }
             // else if (typeof user.dob === "undefined") {
             //     model.dobError = "Please provide your birthdate.";
             // }
             else {
                 userService.registerUser(user)
                     .then(function (response) {
                         _user = response.data;
                         //$location.url("/profile/" + _user._id);
                     })
             };
         }
    }
})();