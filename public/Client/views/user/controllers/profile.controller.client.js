/**
 * Created by viran on 19-07-2017.
 */
/**
 *
 * Created by viran on 17-07-2017.
 */
// (function () {
//
//
//     angular
//         .module("WamApp")
//         .controller("profileController", profileController);
//
//     function profileController($routeParams, $location, userService, $rootScope){
//         var model = this;
//         model.userId = $routeParams["userId"];
//         model.updateUser = updateUser;
//         model.unregister = unregister;
//         function init(){
//         model.user = userService.findUserById(model.userId);
//         }
//
//         init();
//
//         function updateUser(){
//             userService.updateUser(model.userId,model.user);
//         }
//
//         function unregister() {
//
//         }
//     }
// })();

// imediately invoked finction expression

(function () {

    angular
        .module("WamApp")
        .controller("profileController", profileController)

    function profileController($routeParams, userService) {
        var model = this;
        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.unregister = unregister;

        function init() {
            userService.findUserById(userId)
                .then(function (response) {
                    model.user = response.data;
                });
        }
        init();

        function updateUser(user) {
            userService.updateUser(user._id, user);
        }

        function unregister() {

        }
    }

})();