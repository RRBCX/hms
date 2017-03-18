'use strict';

valourcabs.controller('fleetuserpagecontroller',['$scope','$http','$rootScope', '$stateParams',function($scope, $http, $rootScope, $stateParams) {
	
}]);

valourcabs.controller('fleetdriverpagecontroller',['$scope','$http','$rootScope', '$stateParams',function($scope, $http, $rootScope, $stateParams) {
	
	$scope.getuploads = function() {
		$("#upload").css("display", "block");
	}
	
	$scope.cancel = function() {
		$("#upload").css("display", "none");
	}
	
	$scope.licence = false;
	$scope.aadhar = false;
	$scope.voter = false;
	$scope.pan = false;
	$scope.ration	 = false;
	$scope.passport = false;
	$scope.photo	 = false;
	$scope.thumb = false;
	
	$scope.checkvalidity = function(checkbox , id) {
		if(checkbox==true && id ==1) {
			$scope.licence = true;
	    } else if(checkbox == false && id==1) {
	       $scope.licence = false;
	    }  
	    
	     if(checkbox==true && id ==2) {
	    	$scope.aadhar = true;
	    } else if(checkbox==false && id==2) {
	    	$scope.aadhar = false;
	    } 
	    
	    if(checkbox==true && id ==3) {
	    	$scope.voter = true;
	    } else if(checkbox==false && id ==3) {
	    	$scope.voter = false;
	    }
	    
	    if(checkbox==true && id ==4) {
	    	$scope.pan = true;
	    } else if(checkbox==false && id ==4) {
	    	$scope.pan = false;
	    }
	    
	    if(checkbox==true && id ==5) {
	    	$scope.ration = true;
	    } else if(checkbox==false && id ==5) {
	    	$scope.ration = false;
	    }
	    
	    if(checkbox==true && id ==6) {
	    	$scope.passport = true;
	    } else if(checkbox==false && id ==6) {
	    	$scope.passport = false;
	    }
	    
	    if(checkbox==true && id ==7) {
	    	$scope.photo = true;
	    } else if(checkbox==false && id ==7) {
	    	$scope.photo = false;
	    }
	    
	    if(checkbox==true && id ==8) {
	    	$scope.thumb = true;
	    } else if(checkbox==false && id ==8) {
	    	$scope.thumb = false;
	    }
	}
	
}]);


valourcabs.controller('fleetvehiclepagecontroller',['$scope','$http','$rootScope', '$stateParams',function($scope, $http, $rootScope, $stateParams) {
	
	$scope.getuploads = function() {
		$("#upload").css("display", "block");
	}
	
	$scope.cancel = function() {
		$("#upload").css("display", "none");
	}
	
	$scope.licence = false;
	$scope.aadhar = false;
	$scope.voter = false;
	$scope.pan = false;
	$scope.ration	 = false;
	$scope.passport = false;
	$scope.photo	 = false;
	$scope.thumb = false;
	
	$scope.checkvalidity = function(checkbox , id) {
		if(checkbox==true && id ==1) {
			$scope.licence = true;
	    } else if(checkbox == false && id==1) {
	       $scope.licence = false;
	    }  
	    
	     if(checkbox==true && id ==2) {
	    	$scope.aadhar = true;
	    } else if(checkbox==false && id==2) {
	    	$scope.aadhar = false;
	    } 
	    
	    if(checkbox==true && id ==3) {
	    	$scope.voter = true;
	    } else if(checkbox==false && id ==3) {
	    	$scope.voter = false;
	    }
	    
	    if(checkbox==true && id ==4) {
	    	$scope.pan = true;
	    } else if(checkbox==false && id ==4) {
	    	$scope.pan = false;
	    }
	    
	    if(checkbox==true && id ==5) {
	    	$scope.ration = true;
	    } else if(checkbox==false && id ==5) {
	    	$scope.ration = false;
	    }
	    
	    if(checkbox==true && id ==6) {
	    	$scope.passport = true;
	    } else if(checkbox==false && id ==6) {
	    	$scope.passport = false;
	    }
	    
	    if(checkbox==true && id ==7) {
	    	$scope.photo = true;
	    } else if(checkbox==false && id ==7) {
	    	$scope.photo = false;
	    }
	    
	    if(checkbox==true && id ==8) {
	    	$scope.thumb = true;
	    } else if(checkbox==false && id ==8) {
	    	$scope.thumb = false;
	    }
	}
	
}]);
