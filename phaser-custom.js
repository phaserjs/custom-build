require('phaser/src/polyfills');

// We use "var" instead of "const" and "let" since this file will actually be included in client code.

var CONST = require('phaser/src/const');
var Extend = require('phaser/src/utils/object/Extend');

var Phaser = {
    Cameras: {
        Scene2D: require('phaser/src/cameras/2d')
    },
    Events: require('phaser/src/events/EventEmitter'),
    Game: require('phaser/src/core/Game'),
    GameObjects: {
        DisplayList: require('phaser/src/gameobjects/DisplayList'),
        UpdateList: require('phaser/src/gameobjects/UpdateList'),
        Graphics: require('phaser/src/gameobjects/graphics/Graphics.js'),
        Factories: {
            Graphics: require('phaser/src/gameobjects/graphics/GraphicsFactory')
        },
        Creators: {
            Graphics: require('phaser/src/gameobjects/graphics/GraphicsCreator')
        }
    },
    Math: {
        Between: require('phaser/src/math/Between')
    }
}

//  Merge in the consts
Phaser = Extend(false, Phaser, CONST);

//  Export it
module.exports = Phaser;
global.Phaser = Phaser;
