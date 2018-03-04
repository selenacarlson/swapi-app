// app.service('StarService', ['$http', function($http){

//     let self = this;

//     self.searchResult = { list: [] };

//     self.topic = '';
//     self.search = '/?search=';
//     self.keyword = '';

//     self.getSwapi = function(){
//         let url = `https://swapi.co/api/${self.topic}${self.search}${self.keyword}`;
//         $http({
//             method: 'GET',
//             url: `https://swapi.co/api/${self.topic}${self.search}${self.keyword}`
//         }).then(function(response){
//             console.log(response);
//             self.searchResult.list = response.data;
//         }).catch(function(error){
//             console.log(error);
//             console.log(url);
//         })
//     }

// }])