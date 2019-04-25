require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

var Phaser = {

   Cameras: {
       Scene2D: require('cameras/2d')
   },
   Events: require('events/EventEmitter'),
   Game: require('core/Game'),
   GameObjects: {
       DisplayList: require('gameobjects/DisplayList'),
       UpdateList: require('gameobjects/UpdateList'),
       Graphics: require('gameobjects/graphics/Graphics.js'),
       Factories: {
           Graphics: require('gameobjects/graphics/GraphicsFactory')
       },
       Creators: {
           Graphics: require('gameobjects/graphics/GraphicsCreator')
       }
   },
   Math: {
        Between: require('math/Between')
   }
};

//  Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
