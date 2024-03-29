/* The main purpose of this controller is to provide functions to generate the application case id 
   and to initiate the immigration application. */
app.controller("homePageController", function($scope, ActiveCaseStatusResource, generateCase) {
   /* This method is initiated at loading of the home index page. It will return user id if the active
      user is logged in and determine if the active user has on going active case. */
   $scope.getCurrentUserId = function(current_user_id){
     $scope.current_user_id = current_user_id; // assign current logged in user id if available
      // if the user log in, it will fetch active case state from the Rails API
     if ($scope.current_user_id){
        ActiveCaseStatusResource.get({id: $scope.current_user_id }, function(data){ 
         
          $scope.case_active_status = data["active_case_status"]; // fetch case status
          $scope.current_url = data["current_url"]; // fetch current url path of active case
          console.log("Active Case status: " + $scope.case_active_status );
        });// end of ActivCaeStatusResource method
      } // end of if statement 
   };// end of getCurrentUserId method

  /* This method is to initiate application process. It will reroute to the appropriate page based on
     the active state of the user and case activity. If the user is not logged in, it will redirect
     to log in page. The case id is generated if there is no active ongoing case under the user  */
   $scope.applyMyCase = function(app_id){
       if(!$scope.current_user_id){
          location.assign('/sessions/new');
       } else if($scope.current_user_id && ($scope.case_active_status == false)) {
          generateCase.initiate($scope.current_user_id, app_id);
        
          var form_url =  '/users/' + $scope.current_user_id + '/apps/1#/main/option?case_id=' + generateCase.case_id() + '&app_id=' + app_id;
          var firefox_detection = navigator.userAgent.indexOf("Firefox");
          var url_host = location.host;
          var url_protocol = location.protocol;

          // Firefox has issue with reroute to questionnaire page. The following block
          // will add protocol and host to the url link in order for Firefox to route
          // properly to questionnaire page.
          if (firefox_detection != -1){
            form_url = url_protocol + "//"+ url_host + form_url ;
          } // End of if statement.

          location.assign(form_url);

          //location.assign( '/users/' + $scope.current_user_id + '/apps/1#/main/option?case_id=' + generateCase.case_id() + '&app_id=' + app_id);
       } else {
          console.log("Active Case Already Exist");
       }
  };//end of applyMyCase function 
}); // end of initCaseController Controller
    
                                    