app.service('StarService', ['$http', function($http){

    let self = this;

    self.searchResult = { list: [] };
    self.favorites = { list: [] };

    self.SWAPISearch = {};
    
    self.getSwapi = function(SWAPISearch){
        let search = '/?search=';
        let topic = SWAPISearch.topic;
        let keyword = SWAPISearch.keyword;
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${topic}${search}${keyword}`
        }).then(function(response){
            self.searchResult.list = response.data.results;
            self.SWAPISearch.topic = '';
            self.SWAPISearch.keyword = '';
        }).catch(function(error){
            console.log('error on get', error);
            console.log(self.topic, self.keyword);
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

}])