/**
 * Created by viran on 19-07-2017.
 */
/**
 *
 * Created by viran on 17-07-2017.
 */
// (function () {
//     angular
//         .module("WamApp")
//         .controller("loginController", loginController);
//
// // shuffel data between data and controller
//     function loginController($location, userService, $rootScope) {
//         var model = this;
//         model.login = login;
//         function init() {
//         }
//         init();
//
//         function login(user) {
//             if(!user) {
//                 model.errorMessage = "User not found";
//                 return;
//             }
//             var promise = userService.findUserByUsernameAndPassword(user.username, user.password);
//             promise
//                 .then(function (response) {
//                     user = response.data;
(function () {

    angular
        .module("WamApp")
        .controller("loginController", loginController);

    function loginController($location, userService, $rootScope) {
        var model = this;

        model.login = login;

        function init() {

        }
        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            var promise = userService.findUserByUsernameAndPassword(user.username, user.password);
            promise
                .then(function (response) {
                    user = response.data;
                    if(user === null) {
                        model.errorMessage = "User not found";
                    } else {
                        $rootScope.currentUser = user;
                        $location.url("profile/"+user._id);
                    }
                });
        }
    }
})();
//                     if(user === null) {
//                         model.errorMessage = "User not found";
//                     } else {
//                         $rootScope.currentUser = user;
//                         $location.url("profile/"+user._id);
//                     }
//                 });
//         }
//
//     }
// })();

// imediately invoked finction expression

