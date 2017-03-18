/*******************************************************************************
 * Valourcabs AngularJS App Main Script
 ******************************************************************************/
var valour;
/* Valourcabs App */
var valourcabs = angular.module("valourcabs", ["ui.router", "ui.bootstrap",
    "oc.lazyLoad", "ngSanitize", "mwl.calendar", "ngTable"
]);

valourcabs.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$ocLazyLoadProvider',
    '$httpProvider',
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,
        $httpProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        $urlRouterProvider.otherwise('/login.html');

        $stateProvider

            .state('login', {
                url: '/login.html',
                templateUrl: 'resources/views/login.html',
            })

            //admin
            
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'resources/views/dashboards/dashboard.html',
            })
            
            .state('components', {
                url: '/components',
                templateUrl: 'resources/views/srikanth/components.html',
            })
            
            .state('userCreation', {
                url: '/userCreation',
                templateUrl: 'resources/views/srikanth/userCreation.html',
            })
            
            .state('vehicleCreation', {
                url: '/vehicleCreation',
                templateUrl: 'resources/views/srikanth/vehicleCreation.html',
            })
            
            .state('calltacker', {
                url: '/calltacker',
                templateUrl: 'resources/views/srikanth/calltacker.html',
                controller: 'calltrackerpagecontroller'
            })
            
            .state('dispatcher', {
                url: '/dispatcher',
                templateUrl: 'resources/views/srikanth/dispatcher.html',
                controller: "dispatcherpagecontroller",
            })
            
            .state('tablewithlookup1', {
                url: '/tablewithlookup/20',
                templateUrl: 'resources/views/srikanth/tablelookup20.html',
                controller: 'reportspageController'
            })
            
            .state('tablewithlookup2', {
                url: '/tablewithlookup/24',
                templateUrl: 'resources/views/srikanth/tablelookup24.html',
                controller: 'reportspageController'
            })
            
            .state('tablewithoutlookup1', {
                url: '/tablewithoutlookup/20',
                templateUrl: 'resources/views/srikanth/tabwlookup20.html',
                controller: 'reportspageController'
            })
            
             .state('tablewithoutlookup2', {
                url: '/tablewithoutlookup/24',
                templateUrl: 'resources/views/srikanth/tabwlookup24.html',
                controller: 'reportspageController'
            })
            
             .state('components1', {
                url: '/components1',
                templateUrl: 'resources/views/srikanth/components_1.html',
            })
            
            .state('components2', {
                url: '/components2',
                templateUrl: 'resources/views/srikanth/components_2.html',
                controller: "popuppagecontroller",
            })
            
            .state('components3', {
                url: '/components3',
                templateUrl: 'resources/views/srikanth/components_3.html',
            })
            
             .state('fieldsetstats', {
                 url : '/vijay/fieldsetstats',
                 templateUrl :'resources/views/vijay/fieldsetstats.html',
             })

             .state('fieldsettable', {
                 url : '/vijay/fieldsettable',
                 templateUrl :'resources/views/vijay/fieldsettable.html',
             }) 
             
             .state('fieldinput', {
	            url: '/anil/fieldinput',
	            templateUrl: 'resources/views/anil/fieldinput.html',
              })

		    .state('fieldwizard', {
	            url: '/anil/fieldwizard',
	            templateUrl: 'resources/views/anil/fieldwizard.html',
		     })
		     
		     .state('tabledoublelookup', {
                url: '/anil/tabledoublelookup',
                templateUrl: 'resources/views/anil/controlview.html',
              })
            
             .state('associatecreation', {
	             url: '/bhavani/associatecreation',
	             templateUrl: 'resources/views/bhavani/associatecreation.html',
		     })
		     
		     .state('chat', {
	             url: '/bhavani/chats',
	             templateUrl: 'resources/views/bhavani/chat.html',
	             controller: 'popuppagecontroller'
		     })
		     
		       .state('reportwithlookup', {
                url: '/bhavani/reportwithlookup',
                templateUrl: 'resources/views/bhavani/reportwithlookup.html',

            })
            .state('reportwithoutlookup', {
                url: '/bhavani/reportwithoutlookup',
                templateUrl: 'resources/views/bhavani/reportwithoutlookup.html',

            }) 
            
            .state('format2', {
                url: '/secondformat',
                templateUrl: 'resources/views/secondformat.html',
            })

            .state('fleetdashboard', {
                url: '/fleetdashboard',
                templateUrl: 'resources/views/fleetdashboard.html',
            })

            .state('ccdashboard', {
                url: '/ccdashboard',
                templateUrl: 'resources/views/ccdashboard.html',
            })
            .state('reportdashboard', {
                url: '/reportdashboard',
                templateUrl: 'resources/views/reportdashboard.html',
            })
            .state('financedashboard', {
                url: '/financedashboard',
                templateUrl: 'resources/views/financedashboard.html',
            })

            .state('Testing', {
                url: '/testing',
                templateUrl: 'resources/views/testing.html',
                controller: 'TestingpageController'
            })

            .state('Testing1', {
                url: '/testing1',
                templateUrl: 'resources/views/testing1.html',
            })

            .state('objectregistration', {
                url: '/admin/roles/objectregistration',
                templateUrl: 'resources/views/admin/objectregistration.html',
            })

            .state('createrole', {
                url: '/admin/roles/createrole',
                templateUrl: 'resources/views/admin/createrole.html',
            })
            .state('attendance1', {
                url: '/admin/attendance/attendancereportformonth',
                templateUrl: 'resources/views/admin/attendance1.html',
            })
            .state('attendance2', {
                url: '/admin/attendance/attendancereportforweek',
                templateUrl: 'resources/views/admin/attendance2.html',
            })

            .state('user1', {
                url: '/admin/user/user1',
                templateUrl: 'resources/views/admin/user1.html',
            })

            //fleet
           /* 
            .state('vehicleinformation', {
				url: '/balaram/vehicleinformation',
				templateUrl: 'resources/views/balaram/vehicleinformation.html',
				controller: 'popuppagecontroller'
				})*/
				  
            .state('vehicleinformation', {
				url: '/manikanta/vehicleinformation',
				templateUrl: 'resources/views/manikanta/vehicleinformation.html',
				controller: 'popuppagecontroller'
				})

            .state('employee', {
                url: '/employee',
                templateUrl: 'resources/views/employee.html',
            })

            .state('drivercreation', {
                url: '/fleet/user/drivercreation',
                templateUrl: 'resources/views/fleet/drivercreation.html',
                controller: 'fleetdriverpagecontroller'
            })

            .state('drivercreationtwo', {
                url: '/fleet/user/drivercreationtwo',
                templateUrl: 'resources/views/fleet/drivercreation2.html',
                controller: 'fleetdriverpagecontroller'
            })

            .state('vehiclecreation', {
                url: '/fleet/fleetvehiclecreation1',
                templateUrl: 'resources/views/fleet/fleetvehiclecreation.html',
                controller: 'fleetvehiclepagecontroller'
            })

            .state('fleetvehiclecreationsec', {
                url: '/fleet/fleetvehiclecreation2',
                templateUrl: 'resources/views/fleet/fleetvehiclecreationsec.html',
            })

            .state('vehiclemonthreport', {
                url: '/fleet/Tripsheet/vehiclemonthreport',
                templateUrl: 'resources/views/Reports/vehiclemonthreport.html',
            })

            .state('tripsheet1', {
                url: '/fleet/Tripsheet/tripsheet1',
                templateUrl: 'resources/views/fleet/tripsheet.html',
            })

            .state('ownercumdriver', {
                url: '/ownercumdriver',
                templateUrl: 'resources/views/fleet/ownercumdriver.html',
            })


            //CC

            .state('paymentreceipt', {
                url: '/cc/reports/paymentreceipt',
                templateUrl: 'resources/views/cc/paymentreceipt.html',
            })

            .state('paymentvoucher', {
                url: '/cc/reports/paymentvoucher',
                templateUrl: 'resources/views/cc/paymentvoucher.html',
            })

            .state('walkinform', {
                url: '/cc/corporate/walkinform',
                templateUrl: 'resources/views/cc/walkinform.html',
            })

            .state('walkinform2', {
                url: '/walkinform2',
                templateUrl: 'resources/views/cc/walkinform2.html',
            })

            .state('lookup', {
                url: '/cc/corporate/lookup',
                templateUrl: 'resources/views/cc/lookupstatic.html',
            })


            //report

            .state('hospital_invoice', {
                url: '/hospital_invoice',
                templateUrl: 'resources/views/hospital_invoice.html',
            })

            .state('add_category', {
                url: '/add_category',
                templateUrl: 'resources/views/add_category.html',
                controller: 'serviceCategoryPageController'
            })

            .state('add_hospital_item_master', {
                url: '/add_hospital_item_master',
                templateUrl: 'resources/views/add_hospital_item_master.html',
                controller: 'hospitalItemmasterPageController'
            })
            
            .state('hospital_item_dashbord', {
                url: '/hospital_item_dashbord',
                templateUrl: 'resources/views/hospital_item_dashbord.html',
            })

            .state('add_lab_items', {
                url: '/add_lab_items',
                templateUrl: 'resources/views/add_lab_items.html',
                controller: 'labItemmasterPageController'
            })
             .state('lab_item_dashbord', {
                url: '/lab_item_dashbord',
                templateUrl: 'resources/views/lab_item_dashbord.html',
            })

            .state('adddoctor', {
                url: '/adddoctor',
                templateUrl: 'resources/views/adddoctor.html',
                controller: "doctorsPageController"
            })
            
            .state('insurence', {
                url: '/insurence',
                templateUrl: 'resources/views/insurence.html',
            })

             .state('addpatient', {
                url: '/addpatient',
                templateUrl: 'resources/views/addpatient.html',
                controller: 'pateintPageController'
            })
            
            .state('patientdahboard', {
            	url: '/patientdahboard',
                templateUrl: 'resources/views/patientdahboard.html',
            })
    }
]);

/* Init global settings and run the app */
valourcabs.run(["$rootScope", "$state", "$http", "$location", function($rootScope, $state, $http, $location) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$on('$locationChangeStart', function(event) {
        $http({
            method: 'GET',
            url: 'scope/user.json'
        }).success(function(data, status) {
            if (data != "" && data != null) {
                /* $location.path("/dashboard");*/
            } else {
                $location.path("/login.html");
            }
        });

    });
}]);

valourcabs
    .controller(
        'headerpagecontroller', [
            '$scope',
            '$http',
            '$location',
            '$filter',
            '$rootScope',
            '$timeout',
            '$window',
            function($scope, $http, $location, $filter, $rootScope,
                $timeout, $window) {
                $rootScope.status = false;
                $scope.login = {};
                $rootScope.role;
                
                $http({
                    method: 'GET',
                    url: 'scope/user.json'
                }).success(function(data, status) {
                    if (data != "" && data != null) {
                        if (data.tblrole.roleId == '300') {
                            $location.path("/dashboard");
                        } else if (data.tblrole.roleId == '301') {
                            $location.path("/fleetdashboard");
                        } else if (data.tblrole.roleId == '302') {
                            $location.path("/ccdashboard");
                        } else if (data.tblrole.roleId == '303') {
                            $location.path("/reportdashboard");
                        } else if (data.tblrole.roleId == '304') {
                            $location.path("/financedashboard")
                        }

                        $rootScope.status = true;
                        $rootScope.role = data.tblrole.roleId;
                        $scope.username = data.firstName;
                        $location.path(window.location.hash.split('#/')[1]);//For Current page
                         
                    } else {
                        $location.path("/login.html");
                    }
                });

                $scope.checkLoginFunction = function(login) {

                    /*
                     * var validator = check_login_form();
                     * if(!$('#login_screen').valid()) {
                     * validator.focusInvalid(); return; }
                     */
                    /* payrl.showLoader(); */
                    console.log(JSON.stringify(login))
                    $http({
                            method: 'POST',
                            url: 'loginSubmit/user',
                            data: JSON.stringify(login)
                        })
                        .success(
                            function(data, status) {
                                if (data.status === 'success') {
                                    $rootScope.status = true;
                                    $scope.username = data.firstName;
                                    $rootScope.role = data.role;
                                    $scope.login = {};
                                    if (data.role == '300') {
                                        $location
                                            .path("/dashboard");
                                    } else if (data.role == '301') {
                                        $location
                                            .path("/fleetdashboard");
                                    } else if (data.role == '302') {
                                        $location
                                            .path("/ccdashboard");
                                    } else if (data.role == '303') {
                                        $location
                                            .path("/reportdashboard");
                                    } else if (data.role == '304') {
                                        $location
                                            .path("/financedashboard")
                                    }

                                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                                        .test(navigator.userAgent)) {
                                        valour
                                            .log(navigator.userAgent);
                                    }
                                } else if (data.status === 'Invalid User Name or Password') {
                                    /*
                                     * $rootScope.showInvaliderror =
                                     * true;
                                     * $timeout(function() {
                                     * $rootScope.showInvaliderror =
                                     * false; },20000)
                                     */
                                    /* payrl.hideLoader(); */
                                }
                            })

                    // f-11 
              /*      var
                        el = document.documentElement,
                        rfs =
                        el.requestFullScreen ||
                        el.webkitRequestFullScreen ||
                        el.mozRequestFullScreen;
                    rfs.call(el);*/
                }

                $scope.logout = function() {
                    $rootScope.status = false;
                    $scope.login = {};
                    $http({
                        method: 'GET',
                        url: 'scope/clear'
                    }).success(function(data, status) {
                        $location.path("/login.html");
                    });
                }

                $scope.idle = false;
                $scope.ready = true;
                $scope.breaks = false;

                $scope.getReadydata = function() {
                    $scope.idle = true;
                    $scope.ready = false;
                    $("#incoming").css("display", "block");
                }
                $scope.cancel = function() {
                    $("#incoming").css("display", "none");
                }

                $scope.getoutboundcall = function() {
                    $("#outgoing").css("display", "block");
                }
                $scope.canceloutcall = function() {
                    $("#outgoing").css("display", "none");
                }

                $scope.getredial = function() {
                    $("#redial").css("display", "block");
                }

                $scope.cancelredial = function() {
                    $("#redial").css("display", "none");
                }

                $scope.getBreakdata = function() {
                    $scope.breaks = true;
                    $scope.ready = false;
                    $scope.idle = false;
                }

            }
        ]);

function logoutFunction(location, scope, http) {
    $rootScope.status = false;
    http({
        method: 'GET',
        url: 'scope/clear'
    }).success(function(data, status) {
        $window.scrollTo(0, 0);
        location.path("/login.html");
    });
}
$(document).on("keypress", "input[type='number']", function() {
    return valrcrm.isNumberKey();
});
$(document).on("keypress", "#checknumberonly", function() {
    return valrcrm.isNumberKey()
});
$(document).on("click", "input[type='text']", function() {
    $('[data-toggle="tooltip"]').tooltip('hide');
});
$(document).on("click", "input[type='number']", function() {
    $('[data-toggle="tooltip"]').tooltip('hide');
});
$(document).on("click", "textarea", function() {
    $('[data-toggle="tooltip"]').tooltip('hide');
}); 
$(document).on("keypress", "#checknumberonly", function() {
    return valrcrm.isNumberKey()
});
$(document).on("keypress", "#checknumberonly1", function() {
    return valrcrm.isNumberKey()
});
$(document).on("keypress", "#checknumberonly2", function() {
    return valrcrm.isNumberKey()
});
$(document).on("keypress", "#checknumberonly3", function() {
    return valrcrm.isNumberKey()
});
$(document).on("keypress", "#checknumberonly4", function() {
    return valrcrm.isNumberKey()
}); 