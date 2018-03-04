app.controller('StarController', ['$http', function($http){
    
let self = this;

    self.searchResult = { list: [] };
    self.favorites = { list: [] };

    self.topic = '';
    self.search = '/?search=';
    self.keyword = '';
    

    self.getSwapi = function(){
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${self.topic}${self.search}${self.keyword}`
        }).then(function(response){
            self.searchResult.list = response.data.results;
        }).catch(function(error){
            console.log('error on get', error);
        })
    }

    self.favoriteResult = function(result){
        $http({
            method: 'POST',
            url: '/favorites',
            data: result
        }).then(function(response){
            self.getFavorites();
        }).catch(function(error){
            console.log('error on post', error);
        })
    }

    self.getFavorites = function(){
        $http({
            method: 'GET',
            url: '/favorites'
        }).then(function(response){
            self.favorites.list = response.data;
        }).catch(function(error){
            console.log('error on get', error);
        })
    }

    self.getFavorites();

    self.deleteFavorite = function(favorite){
        let id = favorite._id;
        $http({
            method: 'DELETE',
            url: `/favorites/${id}`
        }).then(function(response){
            self.getFavorites();
        }).catch(function(error){
            console.log('error on delete', error);
        })
    };

    // let self = this;

    // self.topic = StarService.topic;
    // self.search = StarService.search;
    // self.keyword = StarService.keyword;

    // self.getSwapi = StarService.getSwapi;
    // self.searchResult = StarService.searchResult;

}])