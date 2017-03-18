/**
 * 
 */
valourcabs.controller('popuppagecontroller', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {
 
	$scope.getpopup = function() {
		$("#popup").css("display" , "block");
	}
	$scope.cancelpopup = function() {
		$("#popup").css("display" , "none");
	}
	$scope.getpopup2 = function() {
		$("#popup2").css("display" , "block");
	}
	$scope.cancelpopup2 = function() {
		$("#popup2").css("display" , "none");
	}
	$scope.getpopup3 = function() {
		$("#popup3").css("display" , "block");
	}
	$scope.cancelpopup3 = function() {
		$("#popup3").css("display" , "none");
	}
	$scope.getpopup4 = function() {
		$("#popup4").css("display" , "block");
	}
	$scope.cancelpopup4 = function() {
		$("#popup4").css("display" , "none");
	}
	
	
	$scope.getpopup5 = function() {
		$("#popup5").css("display" , "block");
		}
		$scope.cancelpopup5 = function() {
		$("#popup5").css("display" , "none");
		}
		$scope.getpopup6 = function() {
		$("#popup6").css("display" , "block");
		}
		$scope.cancelpopup6 = function() {
		$("#popup6").css("display" , "none");
		}
		$scope.getpopup7 = function() {
		$("#popup7").css("display" , "block");
		}
		$scope.cancelpopup7 = function() {
		$("#popup7").css("display" , "none");
		}
		$scope.getpopup8 = function() {
		$("#popup8").css("display" , "block");
		}
		$scope.cancelpopup8 = function() {
		$("#popup8").css("display" , "none");
		}
		$scope.getpopup9 = function() {
		$("#popup9").css("display" , "block");
		}
		$scope.cancelpopup9 = function() {
		$("#popup9").css("display" , "none");
		}

		$scope.choosefile = false;
		$scope.scan = false;
		$scope.upload = false;
		$scope.vehiclecreation = {};

		$scope.getvaluedropdown = function(vehiclecreation) {

		if(vehiclecreation.select == "choosefile") {
		$scope.choosefile = true;
		$scope.scan = false;
		$scope.upload = false;
		console.log("choose file");
		} else if (vehiclecreation.select == "scan") {
		$scope.scan = true;
		$scope.choosefile = false;
		$scope.upload = false;
		} else if (vehiclecreation.select == "upload") {
		$scope.upload = true;
		$scope.choosefile = false;
		$scope.scan = false;
		}

		}
	 
 }]);

valourcabs.controller('calltrackerpagecontroller', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {
	$scope.gettransfer = function() {
		$("#transfer").css("display" , "block");
	}
	$scope.canceltransfer = function() {
		$("#transfer").css("display" , "none");
	}
	$scope.getendcall = function() {
		$("#endcall").css("display" , "block");
	}
	$scope.cancelendcall = function() {
		$("#endcall").css("display" , "none");
	}
	$scope.getholdcall = function() {
		$("#holdcall").css("display" , "block");
	}
	$scope.cancelholdcall = function() {
		$("#holdcall").css("display" , "none");
	}
	
	$scope.getfollwup = function () {
		$("followup").css("display", "block");
		
	}
	$scope.cancelfollowup = function() {
		$("#followup").css("display" , "none");
	}
	
	
	$scope.recent = true;
	$scope.pending = false;
	$scope.complete = false;
	$scope.cancel = false;
	
	$scope.getrecentcalldata = function(){
		$scope.recent = true;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = false;
	}
	$scope.getpendingdata = function(){
		$scope.recent = false;
		$scope.pending = true;
		$scope.complete = false;
		$scope.cancel = false;
			
	}
	$scope.getcompletedata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = true;
		$scope.cancel = false;
	}
	$scope.getcanceldata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = true;
		
	}
	
}]);
valourcabs.controller('dispatcherpagecontroller', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {
	$scope.gettransfer = function() {
		$("#transfer").css("display" , "block");
	}
	$scope.canceltransfer = function() {
		$("#transfer").css("display" , "none");
	}
	$scope.getendcall = function() {
		$("#endcall").css("display" , "block");
	}
	$scope.cancelendcall = function() {
		$("#endcall").css("display" , "none");
	}
	$scope.getholdcall = function() {
		$("#holdcall").css("display" , "block");
	}
	$scope.cancelholdcall = function() {
		$("#holdcall").css("display" , "none");
	}
	
	$scope.getfollwup = function () {
		$("followup").css("display", "block");
		
	}
	$scope.cancelfollowup = function() {
		$("#followup").css("display" , "none");
	}
	
	
	$scope.recent = true;
	$scope.pending = false;
	$scope.complete = false;
	$scope.cancel = false;
	
	$scope.getrecentcalldata = function(){
		$scope.recent = true;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = false;
	}
	$scope.getpendingdata = function(){
		$scope.recent = false;
		$scope.pending = true;
		$scope.complete = false;
		$scope.cancel = false;
			
	}
	$scope.getcompletedata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = true;
		$scope.cancel = false;
	}
	$scope.getcanceldata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = true;
		
	}
	
}]);

valourcabs.controller('sdispatcherpagecontroller', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {
	$scope.gettransfer = function() {
		$("#transfer").css("display" , "block");
	}
	$scope.canceltransfer = function() {
		$("#transfer").css("display" , "none");
	}
	$scope.getendcall = function() {
		$("#endcall").css("display" , "block");
	}
	$scope.cancelendcall = function() {
		$("#endcall").css("display" , "none");
	}
	$scope.getholdcall = function() {
		$("#holdcall").css("display" , "block");
	}
	$scope.cancelholdcall = function() {
		$("#holdcall").css("display" , "none");
	}
	
	$scope.getfollwup = function () {
		$("#followup").css("display", "block");
		
	}
	$scope.cancelfollowup = function() {
		$("#followup").css("display" , "none");
	}
	
	
	/*$scope.recent = true;
	$scope.pending = false;
	$scope.complete = false;
	$scope.cancel = false;
	
	$scope.getrecentcalldata = function(){
		$scope.recent = true;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = false;
	}
	$scope.getpendingdata = function(){
		$scope.recent = false;
		$scope.pending = true;
		$scope.complete = false;
		$scope.cancel = false;
			
	}
	$scope.getcompletedata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = true;
		$scope.cancel = false;
	}
	$scope.getcanceldata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = true;
		
	}*/
	
}]);

valourcabs.controller('calltaker1pagecontroller', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {
	
	$scope.gettransfer = function() {
		$("#transfer").css("display" , "block");
	}
	$scope.canceltransfer = function() {
		$("#transfer").css("display" , "none");
	}
	$scope.getendcall = function() {
		$("#endcall").css("display" , "block");
	}
	$scope.cancelendcall = function() {
		$("#endcall").css("display" , "none");
	}
	$scope.getholdcall = function() {
		$("#holdcall").css("display" , "block");
	}
	$scope.cancelholdcall = function() {
		$("#holdcall").css("display" , "none");
	}
	
	$scope.getfollwup = function () {
		$("followup").css("display", "block");
		
	}
	$scope.cancelfollowup = function() {
		$("#followup").css("display" , "none");
	}
	
	 //search
	$scope.getsering = function() {
		$("#sering").css("display" , "block");
		
	}
	$scope.cancelsearch = function() {
		$("#sering").css("display" , "none");
		$("#searchinfo").css("checked", "checked");
	}
	
	
	
	$scope.recent = true;
	$scope.pending = false;
	$scope.complete = false;
	$scope.cancel = false;
	
	$scope.getrecentcalldata = function(){
		$scope.recent = true;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = false;
	}
	$scope.getpendingdata = function(){
		$scope.recent = false;
		$scope.pending = true;
		$scope.complete = false;
		$scope.cancel = false;
			
	}
	$scope.getcompletedata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = true;
		$scope.cancel = false;
	}
	$scope.getcanceldata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = true;
		
	}
	
}]);

valourcabs.controller('calltaker2pagecontroller', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {
	
	$scope.hatchback = false;
    $scope.sedan = false;
    $scope.muv = false;
    $scope.vehicletype = {};

    $scope.getvaluedropdown = function(vehicletype) {

        if(vehicletype.select == "hatchback") {
            $scope.hatchback = true;
            $scope.sedan = false;
            $scope.muv = false;
        } else if (vehicletype.select == "sedan") {
            $scope.sedan = true;
            $scope.hatchback = false;
            $scope.muv = false;
        } else if (vehicletype.select == "muv") {
            $scope.muv = true;
            $scope.hatchback = false;
            $scope.sedan = false;
        }

    } 
	
	
	$scope.gettransfer = function() {
		$("#transfer").css("display" , "block");
	}
	$scope.canceltransfer = function() {
		$("#transfer").css("display" , "none");
	}
	$scope.getendcall = function() {
		$("#endcall").css("display" , "block");
	}
	$scope.cancelendcall = function() {
		$("#endcall").css("display" , "none");
	}
	$scope.getholdcall = function() {
		$("#holdcall").css("display" , "block");
	}
	$scope.cancelholdcall = function() {
		$("#holdcall").css("display" , "none");
	}
	
	$scope.getfollwup = function () {
		$("followup").css("display", "block");
		
	}
	$scope.cancelfollowup = function() {
		$("#followup").css("display" , "none");
	}
	
	 //search
	$scope.getsering = function() {
		$("#sering").css("display" , "block");
	}
	$scope.cancelsearch = function() {
		$("#sering").css("display" , "none");
	}
	
	
	
	$scope.recent = true;
	$scope.pending = false;
	$scope.complete = false;
	$scope.cancel = false;
	
	$scope.getrecentcalldata = function(){
		$scope.recent = true;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = false;
	}
	$scope.getpendingdata = function(){
		$scope.recent = false;
		$scope.pending = true;
		$scope.complete = false;
		$scope.cancel = false;
			
	}
	$scope.getcompletedata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = true;
		$scope.cancel = false;
	}
	$scope.getcanceldata = function(){
		$scope.recent = false;
		$scope.pending = false;
		$scope.complete = false;
		$scope.cancel = true;
		
	}
	
}]);
valourcabs.controller('usermasterpagecontroller', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {

	//User Master Frame table

	    $scope.choosefile = false;
	    $scope.scan = false;
	    $scope.upload = false;
	    $scope.vehiclecreation = {};

	    $scope.getvaluedropdown = function(vehiclecreation) {

	        if(vehiclecreation.select == "choosefile") {
	            $scope.choosefile = true;
	            $scope.scan = false;
	            $scope.upload = false;
	            console.log("choose file");
	        } else if (vehiclecreation.select == "scan") {
	            $scope.scan = true;
	            $scope.choosefile = false;
	            $scope.upload = false;
	        } else if (vehiclecreation.select == "upload") {
	            $scope.upload = true;
	            $scope.choosefile = false;
	            $scope.scan = false;
	        }
	    }
}]);
valourcabs.controller('reportspageController', ['$scope', '$http', '$location', '$filter', '$rootScope','$timeout', function($scope, $http, $location, $filter, $rootScope, $timeout) {

	$scope.closeSettingsDropdown = function() {
		$('#settings-dropdownone').hide();
	}
	$scope.closeSettingsDropdownTwo = function() {
		$('#settings-dropdowntwo').hide();
	}
	$scope.getmailpopup = function() {
		$("#mailpopup").css("display" , "block");
	}
	$scope.cancelmailpopup = function() {
		$("#mailpopup").css("display" , "none");
	}
}]); 