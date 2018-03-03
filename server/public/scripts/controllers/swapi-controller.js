app.controller('StarController', ['StarService', function(StarService){
    
    let self = this;

    self.getSwapi = StarService.getSwapi;
    self.searchResult = StarService.searchResult;

    self.getSwapi();


}])