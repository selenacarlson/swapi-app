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
        }).then(function(res){
            self.searchResult.list = res.data.results;
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
        }).then(function(res){
            self.getFavorites();
        }).catch(function(error){
            console.log('error on post', error);
        })
    }

    self.getFavorites = function(){
        $http({
            method: 'GET',
            url: '/favorites'
        }).then(function(res){
            self.favorites.list = res.data;
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
        }).then(function(res){
            self.getFavorites();
        }).catch(function(error){
            console.log('error on delete', error);
        })
    };

    self.refreshSearch = function() {
        self.searchResult.list = {};
        return self.searchResult.list;
     }

}])