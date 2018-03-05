const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema(
    {
        name: String,
        birth_year: String,
        gender: String,
        hair_color: String,
        climate: String,
        terrain: String,
        classification: String,
        average_height: String,
        language: String,
        crew: String,
        starship_class: String
    }
);

const Favorite = mongoose.model('Favorite', FavoriteSchema, 'favorites');

router.get('/', function(req, res) {
    Favorite.find({}, function(error, foundFavorites) {
      if (error){
        console.log('error on find favorites:', error);
        res.sendStatus(500);
      } else {
        res.send(foundFavorites);
      }
    })
  });
  
  router.post('/', function(req, res) {
    let newFavorite = new Favorite(req.body);
    console.log('saving favorite:', req.body);
    newFavorite.save( function(error, savedGame) {
      if (error){
        console.log('error on add favorite:', error);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    })
  });

  router.delete('/:id', function(req, res) {
    let id = req.params.id;
    Favorite.findByIdAndRemove(
      {"_id": id}, 
      function(error, deletedFavorite) {
      if (error){
        console.log('error on delete favorite:', error);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    })
  })

  module.exports = router;