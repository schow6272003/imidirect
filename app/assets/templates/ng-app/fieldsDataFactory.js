app.factory('fieldsData', ['myCache', function(myCache) {
  var fetched_cache = myCache.get('myData'); // Retrieve Cache
  var service = {}; // Object with methods and variables available for access
  var fields_data = {};  
  var previous_fields_cache ;

  service.formFieldData = {}; // This object is to store form fields being shared between two scopes.

  service.assignData = function(form_data){
    service.formFieldData = form_data;
  }; // End of service.assignData function

  service.retrieveData = function(){
    return service.formFieldData;
  }; // End of service.retrieveData function
  
  //Assign input data to cache from form fields submitted by the user;
  service.catchData = function(name, form_data){
    fields_data[name] = form_data;
    console.log("name: " + name);
    console.log("data: " + form_data);
    console.log(form_data);

    if(fetched_cache) {
      previous_fields_cache = fetched_cache ;
      previous_fields_cache[name] = form_data ;
      myCache.put('myData', previous_fields_cache);
      console.log("form 6: " + cache["form6"]["i765_date_of_previous_application"]);
    } else {
      myCache.put('myData', fields_data);
    }
  };



 return service ;
}]);