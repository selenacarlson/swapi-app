app.controller('StarController', ['$http', function($http){
    
    // let self = this;

    // self.topic = StarService.topic;
    // self.search = StarService.search;
    // self.keyword = StarService.keyword;

    // self.getSwapi = StarService.getSwapi;
    // self.searchResult = StarService.searchResult;
    
    let self = this;

    self.searchResult = { list: [] };

    self.topic = '';
    self.search = '/?search=';
    self.keyword = '';

    self.getSwapi = function(){
        let url = `https://swapi.co/api/${self.topic}${self.search}${self.keyword}`;
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${self.topic}${self.search}${self.keyword}`
        }).then(function(response){
            self.searchResult.list = response.data.results;
            console.log(self.searchResult.list);
        }).catch(function(error){
            console.log('error on get', error);
        })
    }

}])