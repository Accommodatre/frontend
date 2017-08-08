(function () {
    angular
        .module("WamApp")
        .controller("homeController", homeController);

    function homeController($rootScope) {
        var model = this;
        function init() {
            console.log($rootScope.currentUser)
        }
        init();
    }
})();