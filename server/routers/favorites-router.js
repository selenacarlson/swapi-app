const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema(
    {
        name: String
    }
);

const Favorite = mongoose.model('Favorite', FavoriteSchema, 'favorites');

router.get('/', (request, response) => {
    Favorite.find({}, (error, foundFavorites) => {
      if (error){
        console.log('error on find favorites:', error);
        response.sendStatus(500);
      } else {
        response.send(foundFavorites);
      }
    })
  });
  
  router.post('/', (request, response) => {
    let newFavorite = new Favorite(request.body);
    console.log('saving favorite:', request.body);
    newFavorite.save((error, savedGame) => {
      if (error){
        console.log('error on add favorite:', error);
        response.sendStatus(500);
      } else {
        response.sendStatus(201);
      }
    })
  });

  module.exports = router;