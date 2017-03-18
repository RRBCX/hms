'use strict';

/**
 * common generic functions for alert, logging, debug, error, loading, icon information, messages
 */
var validation;
var valrcrm;

var ENABLE_LOGGING = true;

if(typeof validation === 'undefined' || typeof validation === undefined)
	'use strict'
	validation = {
		validate_loginFunction : function() {
			
			return validateForm("login_screen", validate_loginForm_rules);
		}
	}

if (typeof valrcrm === 'undefined' || typeof valrcrm === undefined )
    'use strict'
valrcrm = {
    log : function(msg) {
        if (ENABLE_LOGGING)
            console.log(msg);
    },
	    /*
		sCallback -> Success callback
		eCallback -> Error callback
		tCallback -> Timeout callback
	
		timeout -> The timeout value in ms, default - 5s
		async -> Asynchronous param (true || false), default true
		method -> GET | POST, default GET
		headers -> List of HTTP headers to set [{key: "Accept", value: "text/xml"}, {key: "Content-Type", value: "text/xml"}]
		bodyParams -> Params to be passed in the request body should be an object otherwise throws rise 400 Bad Request
	
	*/
	makeAjax: function(url, options){
		var sCallback, eCallback, tCallback, xhr, method, timeout, async, headers, bodyParams, urlParams, data = null;
		sCallback = options.sCallback;
		eCallback = options.eCallback;
		tCallback = options.tCallback;
		timeout = options.timeout || 5000; // default - 5s
		async = options.async || true;
		bodyParams = options.bodyParams;
		method = options.method;
		headers = options.headers || [];
		
		//alert("we are in");
		if(bodyParams){
			data = bodyParams, true;
		}
		
		if(window.XMLHttpRequest)
			xhr = new XMLHttpRequest();
		else
			xhr = new ActiveXObject("Microsoft.XMLHttp");	// <=IE6
	
		try{
			xhr.open(method, url, async);
		
			// Params
			xhr.timeout = timeout;
			xhr.onreadystatechange = function()
			{
				
			},
			xhr.onload = function()
			{
				//alert("we are in:OL data -"+this.responseText);
				
				if(this.readyState == 4) {
					if(this.status == 200){
						//alert("we are in: data -"+this.responseText);
						// success
						sCallback && sCallback.call(this, this.responseText);
					} else {
						// failure
						eCallback && eCallback.call(this, this.statusText);
					}
				}
			},
			xhr.onerror = function() {
				// failure
				eCallback && eCallback.call(this, this.statusText);
			},
			xhr.ontimeout = function() {
				tCallback & tCallback.call(this);
			};
			
			// Request headers
			for(var i=0; i<headers.length; i++)
			{
				var key = headers[i].key;
				var value = headers[i].value;
				xhr.setRequestHeader(key, value);
			}
	
			// Finally send
			xhr.send(data);
		}catch (e) {
			if(typeof console != "undefined")
				valrcrm.log(e);
				
		}
		
	},
    closeInSeconds: 10,
    success: "success",
    error: "danger",
    icon: "warning",
    showLoader: function() {
        $("#preloader").show();
    },
    hideLoader: function() {
        $("#preloader").hide();
    },
    
    alert: function(options) {
        options = $.extend(true, {
            container: "", // alerts parent container(by default placed after the page breadcrumbs)
            place: "append", // "append" or "prepend" in container 
            type: 'success', // alert's type
            message: "", // alert's message
            close: true, // make alert closable
            reset: true, // close all previous alerts first
            focus: true, // auto scroll to the alert after shown
            closeInSeconds: 0, // auto close after defined seconds
            icon: "" // put icon before the message
        }, options);

        var id = getUniqueID("Incident_alert");

        var html = '<div id="' + id + '" class="Incident-alerts alert alert-' + options.type + ' fade in">' + (options.close ? '' : '') + (options.icon !== "" ? '<i class="fa-lg fa fa-' + options.icon + '"></i>  ' : '') + options.message + '</div>';

        if (options.reset) {
            $('.Incident-alerts').remove();
        }

        if (!options.container) {
            if ($('body').hasClass("page-container-bg-solid")) {
                $('.page-title').after(html);
            } else {
                if ($('.page-bar').size() > 0) {
                    $('.page-bar').after(html);
                } else {
                    $('.light-blue').after(html);
                }
            }
        } else {
            if (options.place == "append") {
                $(options.container).append(html);
            } else {
                $(options.container).prepend(html);
            }
        }

        if (options.closeInSeconds > 0) {
            setTimeout(function() {
                $('#' + id).remove();
                $('#' + id).hide();
            }, options.closeInSeconds * 1000);
        }

        return id;
    },
    messages: {
        INVALID_USER_OR_PASSWORD: "Invalid User Name or Password or Location",
        INVALID_INCIDENT_NUMBER: "Please Enter Valid Incident Number !",
        INVALID_PLANT_CODE: "Please Enter a Valid plant code!",
        INVALID_EMPLOYEE_ID: "Please Enter a Valid Eployee Id!",
        INVALID_INCIDENT_CLONEID: "Please Enter valid Incident Number to clone data"
    },
    isNumberKey : function(evt) 
	{
		if(!evt)
			evt = window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
	    if (charCode > 31 && (charCode < 48 || charCode > 57))
	        return false;
	    return true;
	},
	isDecimalKey : function(evt) 
	{
		if(!evt)
			evt = window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		var srcElement = evt.srcElement || evt.target;
	    if (charCode == 46 && srcElement.value.split('.').length>1)
	        return false;
	    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
	        return false;
	    return true;
	},
	// zip code TODO: Revisit
	isAlphaNumeric :function(evt) {
		var specialKeys = new Array();
	    specialKeys.push(8); //Backspace
	    specialKeys.push(9); //Tab
	    specialKeys.push(46); //Delete
	    specialKeys.push(36); //Home
	    specialKeys.push(35); //End
	    specialKeys.push(37); //Left
	    specialKeys.push(39); //Right
	    specialKeys.push(46); //DOT
	    specialKeys.push(95); //UNDER SCORE
	    
        var keyCode = evt.keyCode == 0 ? evt.charCode : evt.keyCode;
        return ((keyCode >= 48 && keyCode <= 57) || (keyCode == 46) || (keyCode == 95) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(evt.keyCode) != -1 && evt.charCode != evt.keyCode));
    },
    isUserIdKey : function(evt) 
	{
		var charCode = (evt.which) ? evt.which : event.keyCode;
	    if (charCode == 32 || charCode == 64)
	        return false;
	    
	    return true;
	},
    isAlphaNumericWithSpace :function(evt) {
		var specialKeys = new Array();
	    specialKeys.push(8); //Backspace
	    specialKeys.push(9); //Tab
	    specialKeys.push(46); //Delete
	    specialKeys.push(36); //Home
	    specialKeys.push(35); //End
	    specialKeys.push(37); //Left
	    specialKeys.push(39); //Right
	    
        var keyCode = evt.keyCode == 0 ? evt.charCode : evt.keyCode;
        return ((keyCode == 32) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(evt.keyCode) != -1 && evt.charCode != evt.keyCode));
    },
    isZipCode :function(evt) {
		var specialKeys = new Array();
	    specialKeys.push(8); //Backspace
	    specialKeys.push(9); //Tab
	    specialKeys.push(46); //Delete
	    specialKeys.push(36); //Home
	    specialKeys.push(35); //End
	    specialKeys.push(37); //Left
	    specialKeys.push(39); //Right
	    
        var keyCode = evt.keyCode == 0 ? evt.charCode : evt.keyCode;
        return ((keyCode == 45) || (keyCode == 32) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(evt.keyCode) != -1 && evt.charCode != evt.keyCode));
    },
    /*isDialogBox : function(msg) {
    	return bootbox.dialog({
            message: '<div class="row">  ' +
                '<div class="col-md-12"> ' +
                msg +
                '</div>  </div>',
            buttons: {
                success: {
                    label: "OK",
                    className: "btn-primary btn-sm"
                }
            }
        }
    );
    }*/
};


// generates a Unique Id for alert messages
function getUniqueID(prefix) {
    return 'prefix_' + Math.floor(Math.random() * (new Date()).getTime());
}
// Core methods
// Common validate method
function validateForm(formName, rules, messages) {

    return $('#' + formName).validate({
        rules: rules,
        messages: messages,

        // Misc
        onkeyup: jQueryValidator_onkeyupHandler,
        highlight: jQueryValidator_highlight,
        unhighlight: jQueryValidator_unhighlight,
        errorPlacement: jQueryValidator_errorPlacement,
        errorElement: 'span',
        errorClass: 'help-block'
    });
}

// Misc
function jQueryValidator_onkeyupHandler(element) {
    var element_id = $(element).attr('name');
    if (this.settings.rules[element_id] && this.settings.rules[element_id].onkeyup !== false) {
        jQuery.validator.defaults.onkeyup.apply(this, arguments);
    }
}

function jQueryValidator_highlight(element) {
    $(element).closest('input').addClass('error');
    $(element).closest('textarea').addClass('error');
    $(element).closest('select').addClass('error');
}

function jQueryValidator_unhighlight(element) {
    $(element).closest('input').removeClass('error');
    $(element).closest('textarea').removeClass('error');
    $(element).closest('select').removeClass('error');
}

function jQueryValidator_errorPlacement(error, element) {
    var after = element.attr('error-after-parent');
    var afterGP = element.attr('error-after-grandparent');
    var parent = element.parent();
    var gp = parent.parent();

    if (after)
        error.insertAfter(parent);
    else if (afterGP)
        error.insertAfter(gp);
    else
        error.insertAfter(element);
}

function validateLoginRules() {
	
	return validateForm("login_screen", validateLoginPage);
}

var validateLoginPage = {
		userName : {
			required : true,
			minlength : 5,
			maxlength : 12
		},
		password : {
			required : true,
			minlenght : 5,
			maxlength : 16
		}
}

function check_login_form() {
	
	return validateForm("login_screen", validate_loginForm_rules);
}

var validate_loginForm_rules = {
		userName : {
			required : true,
			minlength : 5,
			maxlength : 10
		},
		password : {
			required : true,
			minlength : 5,
			maxlength : 10
		}
}

function validateIncidentDetails(){
	return validateForm("component_form", validate_Incident_Rules);
}

var validate_Incident_Rules = {
		phnum : {
			required : true,
		},
		date : {
			required : true,
		},
		time : {
			required : true,
		},
		textarea : {
			required : true,
		}
		
}

function validateInvestigationDetails(){
	return validateForm("investigation_details", validate_Investigation_Rules);
}

var validate_Investigation_Rules = {
		investigationTitle : {
			required : true,
		},
		description : {
			required : true,
		},
		completeby : {
			required : true,
		},
		status : {
			required : true,
		},
		teamhead : {
			required : true,
		},
		findings : {
			required : true,
		},
		absentorfaileddefence : {
			required : true,
		},
		teamActions : {
			required : true,
		},
		taskorenvironmentalconditions : {
			required : true,
		},
		organizationalfactors : {
			required : true,
		}
}

function validateInjuredPersonDetails(){
	return validateForm("incident_details", validate_Injuredperson_Rules);
}

var validate_Injuredperson_Rules = {
		name : {
			required : true,
		},
		involvment : {
			required : true,
		},		
		injuryTitle : {
			required : true,
		},
		natureofinjury : {
			required : true,
		},
		mechanismOfInjury : {
			required : true,
		},
		injuryAgency : {
			required : true,
		}
}

function validateHazardDetails(){
	return validateForm("hazard_details", validate_Hazard_Rules);
}

var validate_Hazard_Rules = {
		title : {
			required : true,
		},
		dateofIdentifiaction : {
			required : true,
		},
		description : {
			required : true,
		},
		/*description : {
			required : true,
		},
		actionTaken : {
			required : true,
		},
		classification : {
			required : true,
		},
		severity : {
			required : true,
		},
		alcoholTesting : {
			required : true,
		}*/
}

function riskcolorForm() {
	return validateForm("riskcolor_form", riskcoloring_rules);
}

var riskcoloring_rules = {
		minor_ac_color : {
			required : true
		},
		minor_ac_text: {
			required : true
		},
		medium_ac_color: {
			required : true
		},
		medium_ac_text: {
			required : true
		},
		serious_ac_color: {
			required : true
		},
		serious_ac_text: {
			required : true
		},
		major_ac_color: {
			required : true
		},
		major_ac_text: {
			required : true
		},
		cr_ac_color: {
			required : true
		},
		cr_ac_text: {
			required : true
		},
		minor_li_color: {
			required : true
		},
		minor_li_text: {
			required : true
		},
		medium_li_text: {
			required : true
		},
		medium_li_color: {
			required : true
		},
		serious_li_color: {
			required : true
		},
		serious_li_text: {
			required : true
		},
		major_li_color: {
			required : true
		},
		major_li_text: {
			required : true
		},
		cr_li_color: {
			required : true
		},
		cr_li_text: {
			required : true
		},
		minor_pos_color: {
			required : true
		},
		minor_pos_text: {
			required : true
		},
		medium_pos_color: {
			required : true
		},
		medium_pos_text: {
			required : true
		},
		serious_pos_color: {
			required : true
		},
		serious_pos_text: {
			required : true
		},
		major_pos_color: {
			required : true
		},
		major_pos_text: {
			required : true
		},
		cr_pos_color: {
			required : true
		},
		cr_pos_text: {
			required : true
		},
		minor_un_color: {
			required : true
		},
		minor_un_text: {
			required : true
		},
		medium_un_color: {
			required : true
		},
		medium_un_text: {
			required : true
		},
		serious_un_color: {
			required : true
		},
		serious_un_text: {
			required : true
		},
		major_un_color: {
			required : true
		},
		major_un_text: {
			required : true
		},
		cr_un_color: {
			required : true
		},
		cr_un_text: {
			required : true
		},
		minor_rare_color: {
			required : true
		},
		minor_rare_text: {
			required : true
		},
		medium_rare_color: {
			required : true
		},
		medium_rare_text: {
			required : true
		},
		serious_rare_color: {
			required : true
		},
		serious_rare_text: {
			required : true
		},
		major_rare_color: {
			required : true
		},
		major_rare_text: {
			required : true
		},
		cr_rare_color: {
			required : true
		},
		cr_rare_text: {
			required : true
		}
		
}

function validateMyprofileDetails() {
	
	return validateForm("myprofile", validate_Myprofile_Rules)
}

var validate_Myprofile_Rules = {
		firstName : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		lastName : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		email : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		phoneNo : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		addressLine1 : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		addressLine2 : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		country : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		state : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		city : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		postalCode : {
			required : true,
			minlength : 10,
			maxlength : 20,
		}
}

function validateChangepasswordDetails(){
	return validateForm("changepassword", validate_Changepassword_Rules);
}

var validate_Changepassword_Rules = {
		oldPassword : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		newPassword : {
			required : true,
			minlength : 10,
			maxlength : 20,
		},
		conformPassword : {
			required : true,
			minlength : 10,
			maxlength : 20,
		}
}

function networkError () {
	valrcrm.alert( { type: valrcrm.error, message: "WE ARE CONNECTING !!! ERR_CONNECTION_REFUSED !!!", closeInSeconds: valrcrm.closeInSeconds, icon: valrcrm.icon } );
}

//validations for Incident analysis form starts here

function check_Incidentanalysis_form(){
	return validateForm("incidentanalysis_form", validate_Incidentanalysis_Rules);
}

var validate_Incidentanalysis_Rules = {
	failedDefences : {
		required : true,
	},
	absentDescription : {
		required : true,
		maxlength : 1024,
	},
	teamActions : {
		required : true,
	},
	teamDescription : {
		required : true,
		maxlength : 1024,
	},
	environmentalConditions : {
		required : true,
	},
	envDescription : {
		required : true,
		maxlength : 1024,
	},
	organizationalFactors : {
		required : true,
	},
	orgDescription : {
		required : true,
		maxlength : 1024,
	}
}
//validations for Incident analysis form ends here

//validations for Process investigation team form starts here

function check_Processinvestigationteam_form(){
	return validateForm("processinvestigationteam_form", validate_Processinvestigationteam_Rules);
}

var validate_Processinvestigationteam_Rules = {
	name : {
		required : true,
	},
	role : {
		required : true,
	},
	description : {
		required : true,
		maxlength : 1024,
	},
}

//validations for Process investigation team form ends here

//validations for Conclusion drawn form starts here

function check_Conclusiondrawn_form(){
	return validateForm("conclusiondrawn_form", validate_Conclusiondrawn_Rules);
}

var validate_Conclusiondrawn_Rules = {
	contrbutingFactors : {
		required : true,
	},
	importance : {
		required : true,
	},
	additionalText : {
		required : true,
		maxlength : 1024,
	},
	findings : {
		required : true,
		maxlength : 1024,
	},
	lessonsLearned : {
		required : true,
		maxlength : 1024,
	},
}

//validations for Conclusion drawn form ends here


//validations for Counter measures form starts here

function check_Countermeasures_form(){
	return validateForm("countermeasure_form", validate_Countermeasures_Rules);
}

var validate_Countermeasures_Rules = {
	title : {
		required : true,
	},
	type : {
		required : true,
	},
	assignedToEmployee : {
		required : true,
	},
	status : {
		required : true,
	},
	startDate : {
		required : true,
	},
	dueDate : {
		required : true,
	},
	reviewer : {
		required : true,
	},
	classificationA : {
		required : true,
	},
	classificationB : {
		required : true,
	},
	description : {
		required : true,
	},
	progressNotes : {
		required : true,
	}
}

//validations for Counter measures  form ends here


function validateMotorVehicleDetails() {
	return validateForm("motorvehicle_details", validate_MotorVehicle_Rules);
}

var validate_MotorVehicle_Rules = {
		
		subClassification : {
			required : true,
		},
		liabilityCode : {
			required : true,
		},
		locationType : {
			required : true,
		},
		roadType : {
			required : true,
		},
		roadSurface : {
			required : true,
		},
		weatherCondition : {
			required : true,
		},
		lighitingCondition : {
			required : true,
		},
		roadCondition : {
			required : true,
		},
		visisbilityCondition : {
			required : true,
		},
		manufacturer : {
			required : true,
		},
		model : {
			required : true,
		},
		year : {
			required : true,
		},
		country : {
			required : true,
		},
		state : {
			required : true,
		},
		registration : {
			required : true,
		},
		driversName : {
			required : true,
		},
		contactDetails : {
			required : true,
		},
		licence : {
			required : true,
		},
		driverType : {
			required : true,
		},
		damageDescription : {
			required : true,
		},
		purposeOfJourney : {
			required : true,
		},
		speedOfImpact : {
			required : true,
		},
		speedBeforeImpact : {
			required : true,
		},
		speedLimitOfRoad : {
			required : true,
		}
}

function validateEnvironmentImapactDetails() {
	return validateForm("envimpact_details", validate_EnvironmentImpact_Rules);
}

var validate_EnvironmentImpact_Rules = {
		
		overView : {
			required : true,
		},
		agency : {
			required : true,
		},
		methodRelease : {
			required : true,
		},
		substance : {
			required : true,
		},
		materialState : {
			required : true,
		},
		amount : {
			required : true,
		},
		units : {
			required : true,
		},
		initialRecovery : {
			required : true,
		},
		estimatedCost : {
			required : true,
		}
}

function validateLessonDetails() {
	return validateForm("lesson_details", validate_Lesson_Rules);
}

var validate_Lesson_Rules = {
		
		leasonLearned : {
			required : true,
		}
}

//Validations for Incident Investigation Team Starts Here

function validateIncidentInvestigationTeam(){
	return validateForm("incident_investigationTeam", validate_investigationTeam_rules);
}
var validate_investigationTeam_rules = {
		
		name : {
			required : true,
		},
		teamrole : {
			required : true,
		},
		phoneNumber : {
			required : true,
		},
		externalSupport : {
			required : true,
		},
		company : {
			required : true,
		},
		mainName :{
			required : true,
		},
		teamRole :{
			required : true,
		},
		mainPhoneNumber :{
			required : true,
		},
		emailAddress :{
			required : true,
		},
		purposeOfInvestigation :{
			required : true,
		},
		status :{
			required : true,
		}
		
}
//Validations for Incident Investigation Team Starts Here

function validateInjuryDetails(){
	
	return validateForm("injury_details", validate_injury_details_rules);
}

var validate_injury_details_rules = {
		equipmentType : {
			required : true
		},
		regulatoryAuthority : {
			required : true
		},
		injuryOutcomes : {
			required : true
		},
		injuryAgency : {
			required : true
		},
		equipmentAgency : {
			required : true
		},
		equipmentSubType : {
			required : true
		},
		effectiveness : {
			required : true
		},
		injuryDescription : {
			required : true
		},
		injuryMechanism : {
			required : true
		},
		activityAtInjury : {
			required : true
		},
		notes : {
			required : true
		},
		injuryResult : {
			required : true
		},
		injuryClassification : {
			required : true
		},
		followUpDate : {
			required : true
		}
	
}

function validatePropertyLoss(){

	return validateForm("property_loss", validate_property_loss_form_rules);
}

var validate_property_loss_form_rules = {
	
		longDescription : {
			required : true
		},
		itemDescription : {
			required : true
		},
		valueCurrency : {
			required : true
		},
		repairCost : {
			required : true
		},
		propertyType : {
			required : true
		},
		additionalInfo : {
			required : true
		},
		title : {
			required : true
		},
		firstName : {
			required : true
		},
		lastName : {
			required : true
		},
		organization : {
			required : true
		},
		email : {
			required : true
		},
		contactNumber : {
			required : true
		},
		addressLineA : {
			required : true
		},
		addressLineB : {
			required : true
		},
		country : {
			required : true
		},
		state : {
			required : true
		},
		city : {
			required : true
		},
		postalCode : {
			required : true
		}
	
}

function validateProactiveDetails(){

	return validateForm("proactive_details", validate_proactiveDetails_form_rules);
}

var validate_proactiveDetails_form_rules = {
	
		title : {
			required : true
		},
		proactiveDate : {
			required : true
		},
		proactiveDueDate : {
			required : true
		},
		personResponsible : {
			required : true
		},
		frequency : {
			required : true
		},
		status : {
			required : true
		},
		psitype : {
			required : true
		}
}



function validatecreateagentpage_form() {
    return validateForm("createagentpage_form", validate_createagentpage_form_rules);
}

var validate_createagentpage_form_rules = {

	role:{
	required: true	
	},	
	branch: {
    required: true
    },
    parent:{
    required: true	
    },
    password:{
	required: true	
	},	
	title: {
    required: true
    },
    firstName:{
    required: true	
    },
    lastName:{
	required: true	
	},	
	emailAddress: {
    required: true
    },
    phoneNumber:{
    required: true	
    },
    gender:{
	required: true	
	},	
	age: {
    required: true
    },
    adharNumber:{
    required: true	
    },
    proofId:{
	required: true	
	},	
	uniqueId: {
    required: true
    },
    dateOfJoin:{
    required: true	
    },
    addressline1:{
	required: true	
	},	
	city: {
    required: true
    },
    postalCode:{
    required: true	
    },
    uniqueId: {
    required: true
    },
    dateOfJoin:{
    required: true	
    },
    addressline1:{
	required: true	
	},	
	city: {
    required: true
    },
    postalCode:{
    required: true	
    },
    bankname:{
    required: true	
    },
    branchname:{
	required: true	
	},	
	acctnumber: {
    required: true
    },
    ifsccode:{
    required: true	
    }
}







function validatecrecustomerpage_form() {
    return validateForm("crecustomerpage_form", validate_crecustomerpage_form_rules);
}

var validate_crecustomerpage_form_rules = {

	branch:{
	required: true	
	},	
	title: {
    required: true
    },
    firstName:{
    required: true	
    },
    lastName:{
	required: true	
	},	
	gender: {
    required: true
    },
    birthdate:{
    required: true	
    },
    age:{
	required: true	
	},	
	adharNumber: {
    required: true
    },
    idProof:{
    required: true	
    },
    idProofUNo:{
	required: true	
	},	
	emailId: {
    required: true
    },
    mobileNo:{
    required: true	
    },
    addressLine1:{
	required: true	
	},	
	addressLine2: {
    required: true
    },
    postalCode:{
    required: true	
    },
    agentId:{
	required: true	
	}
}



function validateFindings(){

	return validateForm("findings", validate_findings_form_rules);
}

var validate_findings_form_rules = {
	
		findings : {
			required : true
		}
}

