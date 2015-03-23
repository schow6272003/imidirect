app.controller("formController", function($scope,  $stateParams, $cookies, $cookieStore, Case, CaseInit, testResource, OptionResource, FeesResource, $resource) {

   $scope.current_case_id = $stateParams['case_id'] // 
    //Object containing I-130 relative application options 
    $scope.formOptions = {} ; 
    // To retain form options after the form has been submitted to determine button options.
    $scope.switchOptions = $stateParams ; 

    //remove cookie's content before form
    $scope.restCookie = function(){
        angular.forEach($cookies, function (v, k) {
            $cookieStore.remove(k);
        });
    };

    //catch form fields data and assign to cookie
    $scope.catchData = function(name, form_data){
         $cookieStore.put(name, form_data);
    };

    //function to choose forms
    $scope.chooseForm = function(category) {



    //generate case id with random characters
    function makeid()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for( var i=0; i < 10; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }

    $scope.case_id = makeid();

    //convert application code to app_id in order to assign specific application to the case
    switch (category) {
    case "f1us":
        $scope.app_id = 1;
        break;
    case "f2us":
        $scope.app_id = 2;
        break;
    case "f3us":
        $scope.app_id = 3;
        break;
    case "f4us":
        $scope.app_id = 4;
        break;
    case "f5us":
        $scope.app_id = 5;
        break;
    case "f1pr":
        $scope.app_id = 6;
        break;
    case "f2pr":
        $scope.app_id = 7;
        break;
    case "f3pr":
        $scope.app_id = 8;
        break;
    case "ead":
        $scope.app_id = 9;
        break;
    case "aos":
        $scope.app_id = 10;
        break;
}


    //populate cases table
    var InitializeCase = new CaseInit();
            InitializeCase.case = {
             case_id: $scope.case_id,
             application_id: 1,
             user_id: 1
            }; 

    InitializeCase.$save();  


    // Beginning Of the Option Block ///////////////////

    var settings = OptionResource($scope.formOptions, $scope.case_id );

    $scope.results = settings.initiate({id:1}); 
    $scope.results.$promise.then(function(data) {
    console.log(data);

    });


    // End of Option Block//////////////////////

    $scope.switchButtons = {}; //Create object to arrange form/section combination.
    var i = 3; 

    // Choose required fields based of type of application.
    if (category == "i130"){
        $scope.switchButtons["application_type"] = "i130";
        $scope.switchButtons["section1"] = "i130-applicant";
        $scope.switchButtons["section2"] = "i130-sponsor";
        $scope.switchButtons["section3"] = "i130-option";
    } else if (category == "i765"){
        $scope.switchButtons["application_type"] = "i765";
        $scope.switchButtons["section1"] = "i765-applicant";
        $scope.switchButtons["section2"] = "i765-sponsor";
        $scope.switchButtons["section3"] = "i765-option";
    } else if (category == "i485"){
        $scope.switchButtons["application_type"] = "i485";
        $scope.switchButtons["section1"] = "i485-applicant";
        $scope.switchButtons["section2"] = "i485-sponsor";
        $scope.switchButtons["section3"] = "i485-option";
    } else if (category == "i131"){
        $scope.switchButtons["application_type"] = "i131";
        $scope.switchButtons["section1"] = "i131-applicant";
        $scope.switchButtons["section2"] = "i131-sponsor";
        $scope.switchButtons["section3"] = "i131-option";
    } 


    // Loop through formOptions to assign form to specific switch button.
    for (key in $scope.formOptions){
        if($scope.formOptions[key] == true){
            i++;
            $scope.switchButtons["section" + i] = key;  
        }
    }
    // Assign submit button to the last section.
    i++;
    $scope.switchButtons["section" + i] = "submit";

    location.assign('#form/section1?case_id=' + $scope.case_id +'&application_type='+ $scope.switchButtons["application_type"] + '&section1=' + $scope.switchButtons["section1"] + '&section2=' + $scope.switchButtons["section2"]
                + '&section3=' + $scope.switchButtons["section3"] + '&section4=' + $scope.switchButtons["section4"] + '&section5=' + $scope.switchButtons["section5"] 
                + '&section6=' + $scope.switchButtons["section6"] + '&section7=' + $scope.switchButtons["section7"] + '&section8=' + $scope.switchButtons["section8"] 
                + '&section9=' + $scope.switchButtons["section9"]
                );
    };
    
    // function to process the form
    $scope.processForm = function(current_case_id) {
        $scope.current_case_id = current_case_id; 

        var count = 1 ;
        var individualFieldData = $cookieStore.get('form' + '1') ;
        $scope.fieldData = {};

        // pull data from partial forms from cookie and combine into one object.
        while (individualFieldData) {
            for (var key in individualFieldData) {
                $scope.fieldData[key] = individualFieldData[key] ;
             }
            count++ ;
            individualFieldData = $cookieStore.get('form' + count) ;
        }

      $scope.restCookie();

      var formFieldData = new testResource({id: 1});
           formFieldData.i130test = {
             first_name: $scope.fieldData["firstname"] ,
             last_name: $scope.fieldData["lastname"],  
             pod: $scope.fieldData['pod'],  
             dob: $scope.fieldData['dob'],  
             sponsor_name: $scope.fieldData['sponsor_name'],  
             nationality: $scope.fieldData['nationality'],  
             country_of_destination: $scope.fieldData['country_of_destination'],  
             date_of_return: $scope.fieldData['date_of_return'],  
             counsol: $scope.fieldData['counsol'],  
             spouse: $scope.fieldData['spouse'],  
             previous_application: $scope.fieldData['previous_application'],   
             office: $scope.fieldData['office']}; 

            formFieldData.optiontest = {
             name: "Joseph",
             age: "3"
            }; 

            formFieldData.user = {
                id: 1
            };
        
            formFieldData.$save();  

  

     };

    /*****************Total Fees Calculation Functions**********************/

    // var totalFees = new FeesResource({case_id: '85ca593dda42ad89bfdf4155618f4071'});
     // console.log("api call test: " + totalFees);
        // totalFees.query({case_id: '85ca593dda42ad89bfdf4155618f4071'});

     var Fee =  $resource('/api/cases/:case_id/charges/:case_id', {id:'@case_id'}) ;

        Fee.get({case_id: '85ca593dda42ad89bfdf4155618f4071'}, function(data){
            console.log("Rendered Test Data: " + data);
        });




    /*****************End of Total Fees Calculation Functions***************/



    
});