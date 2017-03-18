<!-- 
index.jsp is the head of the page and has configured only css &amp; js plugins.
valourcabs maintain the customer relationship managemnt application UI (user interface) configured Angularjs plugin.
It has three directives (ng-app, ng-bind, ng-model)
where ng-app will define the application module and it is configued inside app.js
ng-bind &amp; ng-model are set and get information from form elements and html elements
 -->

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en" data-ng-app="valourcabs">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google. ">
        <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template,">
        <link rel="icon" href="resources/assets/images/logo_32X32.png" sizes="32x32">
        <title>HMS</title>

        <!-- Favicons-->
        <link rel="icon" href="resources/assets/images/favicon/logo_32X32.png" sizes="32x32">
        <!-- Favicons-->
        <link rel="apple-touch-icon-precomposed" href="images/favicon/apple-touch-icon-152x152.png">
        <!-- For iPhone -->
        <meta name="msapplication-TileColor" content="#00bcd4">
        <meta name="msapplication-TileImage" content="images/favicon/mstile-144x144.png">
        <!-- For Windows Phone -->


        <!-- CORE CSS-->
        <link href="resources/assets/css/valourcabs_crm.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/style.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/valour_filedset.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/valour_usercreations.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/valour_customtables.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/valour_dispatcher.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/main_buttons.css" type="text/css" rel="stylesheet" media="screen,projection">

        <!-- Custome CSS-->
        <link href="resources/assets/css/custom/custom.min.css" type="text/css" rel="stylesheet" media="screen,projection">

        <!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
        <link href="resources/assets/css/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/plugins/jvectormap/jquery-jvectormap.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="resources/assets/css/plugins/chartist-js/chartist.min.css" type="text/css" rel="stylesheet" media="screen,projection">
        
         <link href="resources/assets/data-tables/css/jquery.dataTables.css" type="text/css" rel="stylesheet" media="screen,projection">
         
         <link rel="stylesheet" href="resources/datepickers/jquery.datetimepicker.css" type="text/css"/>
    </head>

    <body>
        <!-- Start Page Loading -->
      <!--   <div id="loader-wrapper">
	        <div id="loader"></div>        
	        <div class="loader-section section-left"></div>
	        <div class="loader-section section-right"></div>
        </div> -->
        <!-- End Page Loading -->
        <div data-ng-controller="headerpagecontroller" style="height: auto;">
            <div data-ng-if="status">
                <div data-ng-include="'resources/tpls/header.html'"></div>
            </div>
            <div id="login-page" class="row" data-ng-if="!status">
                <div class="col s4 z-depth-4 card-panel"></div>
                  <div data-ng-include="'resources/views/login.html'"></div>
            </div>
        </div>

        <!-- ==== Scripts Tags STARTS here =====-->
        <!-- jQuery Library -->
        <script type="text/javascript" src="resources/assets/js/jquery/jquery-1.11.2.min.js"></script>
        <!--materialize js-->
        <script type="text/javascript" src="resources/assets/js/materialize.min.js"></script>
        <!--scrollbar-->
        <script type="text/javascript" src="resources/assets/js/perfect-scrollbar/perfect-scrollbar.min.js"></script>

        <!-- sparkline -->
        <script type="text/javascript" src="resources/assets/js/sparkline/jquery.sparkline.min.js"></script>
        <script type="text/javascript" src="resources/assets/js/sparkline/sparkline-script.js"></script>

        <!-- google map api -->
<!--         <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAZnaZBXLqNBRXjd-82km_NO7GUItyKek"></script>
 -->          
        <script src="resources/assets/data-tables/js/jquery.dataTables.js" type="text/javascript"></script>
        <script src="resources/assets/data-tables/js/colResizable-1.5.min.js" type="text/javascript"></script>
        
        <script src="resources/assets/js/validations/validations.js" type="text/javascript"></script>
        
        <!--jvectormap-->
        <script type="text/javascript" src="resources/assets/js/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
        <script type="text/javascript" src="resources/assets/js/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
        <script type="text/javascript" src="resources/assets/js/jvectormap/vectormap-script.js"></script>
        
        <!-- Date -->
        
		<script type="text/javascript" src="resources/datepickers/jquery.datetimepicker.js"></script>
    	 <script src="resources/datepickers/jquery.validate.min.js" type="text/javascript"></script>

        <!-- BEGIN CORE ANGULARJS PLUGINS -->
        <script src="resources/assets/angularjs/plugins/moment.min.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/angular.min.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/angular-resource.min.js"></script>
        <script src="resources/assets/angularjs/angular-sanitize.min.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/angular-touch.min.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/ng-table.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/plugins/angular-ui-router.min.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/plugins/ocLazyLoad.min.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/plugins/ui-bootstrap-tpls.min.js" type="text/javascript"></script>
        <script src="resources/assets/angularjs/plugins/angular-bootstrap-calendar-tpls.js" type="text/javascript"></script>
        <!-- END CORE ANGULARJS PLUGINS -->
       
        <!--materialize js-->
        <script type="text/javascript" src="resources/assets/js/materialize.min.js"></script>

        <script src="resources/app.js"></script>
        <!-- ==== Scripts Tags ENDS here =====-->
        
         <script src="resources/controller/TestingpageController.js" type="text/javascript"></script>
         <script src="resources/controller/fleetuserpagecontroller.js" type="text/javascript"></script>
         <script src="resources/controller/popuppagecontroller.js" type="text/javascript"></script>
         <script src="resources/controller/mastersPageController.js" type="text/javascript"></script>
    </body>

    </html>