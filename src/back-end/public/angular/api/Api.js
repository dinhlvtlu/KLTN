"use strict";

(function () {

    angular.module('dw-backend.service', [
        "ngFileUpload"
    ])
        .provider("beApi", function () {

            var serverUrl = "";

            this.setServerUrl = function (url) {
                serverUrl = url;
            };

            this.$get = function ($http) {

                var customHeaderFunc = null;

                function getHeaders() {
                    if (customHeaderFunc) {
                        return customHeaderFunc();
                    }
                }

                return {
                    getServerUrl: function () {
                        return serverUrl;
                    },
                    get: function (url) {
                        return $http.get(serverUrl + url, {withCredentials: true, headers: getHeaders()});
                    },
                    post: function (url, data) {
                        return $http.post(serverUrl + url, data, {withCredentials: true, headers: getHeaders()});
                    },
                    put: function (url, data) {
                        return $http.put(serverUrl + url, data, {withCredentials: true, headers: getHeaders()});
                    },
                    delete: function (url) {
                        return $http.delete(serverUrl + url, {withCredentials: true, headers: getHeaders()});
                    },
                    addCustomHeader: function (customHeaderFunc1) {
                        customHeaderFunc = customHeaderFunc1;
                    }
                };
            };
        })

        .factory("User", function() {
            return {
                isLogged: false,
                name: ''
            };
        })

        .run(function (beSecurityService, $state) {
            beSecurityService.initialize($state);
        })

        .run(function (beSecurityService, User, $rootScope) {
            beSecurityService.ready().then(function () {
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

                    if(!User.isLogged){
                        if (toState.name == "dashboard") {
                            ;
                        } else {
                            event.preventDefault();
                        }
                    }

                });
            });
        })

        .factory("beSecurityService", function (User, $state, $q, $window, beApi) {

            var deferInitialize = $q.defer();

            function checkLogin() {
                var token = $window.localStorage.token;
                var exp = $window.localStorage.exp;

                return beApi.post("/be/api/security",{token: token, exp: exp}).then(function (res) {
                    if (!res.data) {
                            ObjectUtil.clear(User);
                            $state.go("login");
                    } else {
                        User.isLogged = true;
                        User.name = res.data.name;
                    }
                })
            }

            beApi.addCustomHeader(function () {
                if ($window.localStorage.token && $window.localStorage.token != "null") {
                    return {"Authorization": "Bearer " + $window.localStorage.token};
                }
            });

            return {
                initialize: function () {
                    checkLogin().finally(function () {
                        deferInitialize.resolve();
                    });
                },
                ready: function () {
                    return deferInitialize.promise;
                },
                login: function (user) {
                    var defer = $q.defer();
                    beApi.post("/be/api/security/login", user).then(function (res) {
                        if (!res.data) {
                            ObjectUtil.clear(User);
                            defer.resolve();
                        } else {
                            User.isLogged = true;
                            User.name = res.data.name;
                            $window.localStorage.token = res.data.token;
                            $window.localStorage.exp = res.data.expires;
                            $state.go("dashboard");
                            defer.reject();
                        }
                    });
                    return defer.promise;
                },
                logout: function () {
                    $state.go("login");
                    ObjectUtil.clear(User);
                    delete $window.localStorage.token;
                    delete $window.localStorage.exp;
                }
            }
        })
    ;

})();
