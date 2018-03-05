app.controller('StarController', ['StarService', '$scope', '$route', function(StarService, $scope, $route){
    
    let self = this;

    self.searchResult = StarService.searchResult;
    self.favorites = StarService.favorites;

    self.SWAPISearch = self.StarService;

    self.getSwapi = StarService.getSwapi;
    self.favoriteResult = StarService.favoriteResult;

    self.refreshSearch = StarService.refreshSearch;
    
    self.getFavorites = StarService.getFavorites;
    self.getFavorites();

    self.deleteFavorite = StarService.deleteFavorite;

}])