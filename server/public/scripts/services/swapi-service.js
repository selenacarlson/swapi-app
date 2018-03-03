app.service('StarService', ['$http', function($http){

    let self = this;

    self.searchResult = { list: [] };

    self.getSwapi = function(){
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/people/1/'
        }).then(function(response){
            console.log(response);
            self.searchResult.list = response.data;
        }).catch(function(error){
            console.log(error);
        })
    }

}])