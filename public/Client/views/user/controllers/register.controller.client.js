/**
 * Created by viran on 19-07-2017.
 */
// (function(){
//     angular
//         .module("WamApp")
//         .controller("registerController",registerController);
//
//     function registerController(userService,$location){
//         var model = this;
//         function init(){
//             model.registerUser = registerUser;
//         }
//         init();
//
//         function registerUser(user) {
//             var _user = userService.findUserByUsername(user.username);
//             if (!_user) {
//                 var user = userService.registerUser(user);
//                 $location.url("/profile/" + user._id);
//             }
//             else{
//                 model.error = "User already exist."
//             }
//         }
//     }
// })();

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
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if(_user === "0") {
                        return userService.registerUser(user)
                    } else {
                        model.error = "User already exists";
                    }
                })
                .then(function (response) {
                    _user = response.data;
                    $location.url("/profile/" + _user._id);
                });
        }
    }
})();