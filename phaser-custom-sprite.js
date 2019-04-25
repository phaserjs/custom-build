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

        Image: require('gameobjects/image/Image'),
        Sprite: require('gameobjects/sprite/Sprite'),

        Factories: {
            Image: require('gameobjects/image/ImageFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory')
        },

        Creators: {
            Image: require('gameobjects/image/ImageCreator'),
            Sprite: require('gameobjects/sprite/SpriteCreator')
        }
    },
    Loader: require('loader'),
    Math: {
        Between: require('math/Between')
    }
};

//  Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
