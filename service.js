var app = angular.module('userProfiles'); //wow

app.service('mainService', function($http) {

	// var data = [
 //    {
 //        "id": 1,
 //        "first_name": "george",
 //        "last_name": "bluth",
 //        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
 //    },
 //    {
 //        "id": 2,
 //        "first_name": "lucille",
 //        "last_name": "bluth",
 //        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
 //    },
 //    {
 //        "id": 3,
 //        "first_name": "oscar",
 //        "last_name": "bluth",
 //        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
 //    }
 //  ];


    this.getUsers = function() {
    return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    });
  };


  // this.getUser = function(id) {
  //   return $http.get(baseUrl + id).then(function(response) {
  //       if(response != 200) {
  //           alert("crap didn't work try again")
  //       }
  //       return response.data.name
  //   })
  // }


});
