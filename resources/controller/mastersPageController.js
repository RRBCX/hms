'use strict';

valourcabs.controller('mastersPageController',['$scope','$http','$rootScope', '$stateParams',function($scope, $http, $rootScope, $stateParams) {
	
}]);

valourcabs.controller('doctorsPageController',['$scope','$http','$rootScope', '$stateParams',function($scope, $http, $rootScope, $stateParams) {
	
	$scope.addDoctor = {};
	$scope.submitDoctorDetails = function(addDoctor) {
		console.log(JSON.stringify(addDoctor))
		$http({
			method: "POST",
			url: "doctordetails/save",
			data : JSON.stringify(addDoctor)
		}).success(function(data, status) {
			console.log(data);
		})
	}
	
	$http({
		method: "GET",
		url: "doctordetails/fetch",
	}).success(function(data, status) {
		console.log(data)
	})
}]);

valourcabs.controller('pateintPageController',['$scope','$http','$rootScope', '$stateParams','$location', function($scope, $http, $rootScope, $stateParams, $location) {
	
	$scope.addpatient = {};
	$scope.doctorNames = [];
	$rootScope.patientDetails = [];
	
	$scope.submitpatientDetails = function(addpatient) {
		console.log(JSON.stringify(addpatient))
		$http({
			method: "POST",
			url: "patientdetails/save",
			data : JSON.stringify(addpatient)
		}).success(function(data, status) {
			console.log(data);
		})
	}
	
	$scope.getPatientDetails = function() {
		
		$http({
			method: "GET",
			url: "patientdetails/fetch",
		}).success(function(data, status) {
			$location.path('/patientdahboard')
			data.forEach(function(d) {
				$rootScope.patientDetails.push({patientName : d.tbladdress.tbluser.firstName.concat(" ", d.tbladdress.tbluser.lastName), 
					patientCode : d.patientCode, age : d.tbladdress.age, date : d.dateAndTime, insuranceName : d.insuranceName, mobileNumber : d.tbladdress.mobileNum})
			})
		})
	}
	
	$http({
		method: "GET",
		url: "doctordetails/fetch",
	}).success(function(data, status) {
		data.forEach(function(d) {
			$scope.doctorNames.push({doctorId : d.doctorID, doctorName : d.tbladdress.tbluser.firstName.concat(" ", d.tbladdress.tbluser.lastName)})
		})
	})
	
	$http({
		method: "GET",
		url: "patientcode/fetch",
	}).success(function(data, status) {
		$scope.addpatient["patientCode"]  = data.patientCode;
	})
}]);

valourcabs.controller('serviceCategoryPageController',['$scope','$http','$rootScope', '$stateParams','$location', function($scope, $http, $rootScope, $stateParams, $location) {
	
	$scope.addcategory = {};
	$scope.categoryMaster = [];
	
	$scope.submitServiceCategorytDetails = function(addcategory) {
		console.log(JSON.stringify(addcategory))
		$http({
			method: "POST",
			url: "categorymaster/save",
			data : JSON.stringify(addcategory)
		}).success(function(data, status) {
			console.log(data);
		})
	}
	
	$http({
		method: "GET",
		url: "categorymaster/fetch",
	}).success(function(data, status) {
		console.log(data);
	})
}]);

valourcabs.controller('hospitalItemmasterPageController',['$scope','$http','$rootScope', '$stateParams','$location', function($scope, $http, $rootScope, $stateParams, $location) {
	
	$scope.hospitalItem = {};
	$scope.categoryMaster = [];
	
	$scope.submitHospitalItemtDetails = function(hospitalItem) {
		console.log(JSON.stringify(hospitalItem))
		$http({
			method: "POST",
			url: "hospitalitem/save",
			data : JSON.stringify(hospitalItem)
		}).success(function(data, status) {
			console.log(data);
		})
	}
	
	$http({
		method: "GET",
		url: "categorymaster/fetch",
	}).success(function(data, status) {
		$scope.categoryMaster = data;
	})
}]);

valourcabs.controller('labItemmasterPageController',['$scope','$http','$rootScope', '$stateParams','$location', function($scope, $http, $rootScope, $stateParams, $location) {
	
	$scope.labItem = {};
	$scope.categoryMaster = [];
	
	$scope.submitLabItemtDetails = function(labItem) {
		console.log(JSON.stringify(labItem))
		$http({
			method: "POST",
			url: "labitem/save",
			data : JSON.stringify(labItem)
		}).success(function(data, status) {
			console.log(data);
		})
	}
	
	$http({
		method: "GET",
		url: "categorymaster/fetch",
	}).success(function(data, status) {
		$scope.categoryMaster = data;
	})
}]);

