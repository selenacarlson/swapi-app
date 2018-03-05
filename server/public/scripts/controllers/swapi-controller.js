app.controller('StarController', ['StarService', function(StarService){
    
    let self = this;

    self.searchResult = StarService.searchResult;
    self.favorites = StarService.favorites;

    self.SWAPISearch = self.StarService;

    self.getSwapi = StarService.getSwapi;
    self.favoriteResult = StarService.favoriteResult;
    self.getFavorites = StarService.getFavorites;

    self.getFavorites();

    self.deleteFavorite = StarService.deleteFavorite;

}])