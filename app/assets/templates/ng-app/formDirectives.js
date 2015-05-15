app.directive('ngCaseForm', function(){
  var fields_template, app_type; 

// custom directive to dynamically assign form fields 
  return {
    restrict: "E",
    scope: {
      applicationType: '=',
      formTemplate: '='
    },
    link: function($scope) {
      $scope.$watch('formTemplate', function(formTemplate){
        fields_template = formTemplate ;
      });
      $scope.$watch('applicationType', function(applicationType){ 
        app_type = applicationType ; 
        $scope.contentUrl = 'templates/forms/fields/' + app_type + '/' + fields_template + '-fields.html'
      });      
    },
    template: '<ng-include src="contentUrl"></ng-include>'   
  } // end of return
})

// custom directive to dynamically assign form button
.directive('ngCaseFormButton', function(){
  var fields_template, app_type; 
  return {
    restrict: "E",
    scope: {
      applicationTypeButton: '=', 
      formTemplateButton: '='
    },
    link: function($scope) {
      $scope.$watch('formTemplateButton', function(formTemplateButton){
         fields_template = formTemplateButton;
      });
      $scope.$watch('applicationTypeButton', function(applicationTypeButton){
         app_type = applicationTypeButton
         $scope.content_button_url = 'templates/forms/buttons/' + app_type + '/' + fields_template + '-button.html'
      });
    },
    template: '<ng-include src="content_button_url"></ng-include>'   
  } // end of return
});