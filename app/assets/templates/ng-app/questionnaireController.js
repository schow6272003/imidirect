app.controller("questionnaireController", function($scope, $stateParams, $cookies, 
                                          $cookieStore, myCache, generateCase) {
   
  console.log("Outside of questionnaireController");
  //remove cookie's content before form
  $scope.restCookie = function(){
      var cache = myCache.get('myData');
      if (cache){
          cache.removeAll();
      }
  };

  // Initializing Case at the beginning of the case.
  $scope.initCase = function (user_id, app_id ) {
     generateCase.initiate(user_id, app_id); // generateCase factory method
  };
}); // end of questionnaireController Controller
    
                                    