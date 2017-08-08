/**
 * Created by viran on 19-07-2017.
 */
/**
 *
 * Created by viran on 17-07-2017.
 */
(function myFunction () {


    angular
        .module("WamApp")
        .config(configuration);

  //  function configuration($routeProvider) {
    function configuration($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';

        $routeProvider
            .when("/",{
                templateUrl:"views/home/home.view.client.html",
                controller:"homeController",
                controllerAs:"model"
            })
            .when("/login",{
                templateUrl:"views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/register",{
                templateUrl:"views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/profile/:userId", {
                templateUrl:"views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/user/:userId/website",{
                templateUrl:"views/website/templates/website-list.view.client.html",
                controller:"websiteListController",
                controllerAs:"model"
            })
            .when("/user/:userId/website/new",{
            templateUrl:"views/website/templates/website-new.view.client.html",
            controller:"websiteNewController",
            controllerAs:"model"
        })
            //widget
            .when("/user/:userId/website/:websiteId/page/:pageId/widget", {
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId", {
                templateUrl: "views/website/templates/website-edit.view.client.html",
                controller: "websiteEditController",
                controllerAs: "model"
            })
    }
})();

// imediately invoked finction expression