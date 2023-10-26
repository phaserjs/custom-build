/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

require('polyfills/requestVideoFrame');

var CONST = require('const');
var Extend = require('utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {

    Actions: {
        AlignTo: require('actions/AlignTo'),
        Angle: require('actions/Angle'),
        Call: require('actions/Call'),
        GetFirst: require('actions/GetFirst'),
        GetLast: require('actions/GetLast'),
        GridAlign: require('actions/GridAlign'),
        IncAlpha: require('actions/IncAlpha'),
        IncX: require('actions/IncX'),
        IncXY: require('actions/IncXY'),
        IncY: require('actions/IncY'),
        PlaceOnCircle: require('actions/PlaceOnCircle'),
        PlaceOnEllipse: require('actions/PlaceOnEllipse'),
        PlaceOnLine: require('actions/PlaceOnLine'),
        PlaceOnRectangle: require('actions/PlaceOnRectangle'),
        PlaceOnTriangle: require('actions/PlaceOnTriangle'),
        PlayAnimation: require('actions/PlayAnimation'),
        PropertyValueInc: require('actions/PropertyValueInc'),
        PropertyValueSet: require('actions/PropertyValueSet'),
        RandomCircle: require('actions/RandomCircle'),
        RandomEllipse: require('actions/RandomEllipse'),
        RandomLine: require('actions/RandomLine'),
        RandomRectangle: require('actions/RandomRectangle'),
        RandomTriangle: require('actions/RandomTriangle'),
        Rotate: require('actions/Rotate'),
        RotateAround: require('actions/RotateAround'),
        RotateAroundDistance: require('actions/RotateAroundDistance'),
        ScaleX: require('actions/ScaleX'),
        ScaleXY: require('actions/ScaleXY'),
        ScaleY: require('actions/ScaleY'),
        SetAlpha: require('actions/SetAlpha'),
        SetBlendMode: require('actions/SetBlendMode'),
        SetDepth: require('actions/SetDepth'),
        SetHitArea: require('actions/SetHitArea'),
        SetOrigin: require('actions/SetOrigin'),
        SetRotation: require('actions/SetRotation'),
        SetScale: require('actions/SetScale'),
        SetScaleX: require('actions/SetScaleX'),
        SetScaleY: require('actions/SetScaleY'),
        SetScrollFactor: require('actions/SetScrollFactor'),
        SetScrollFactorX: require('actions/SetScrollFactorX'),
        SetScrollFactorY: require('actions/SetScrollFactorY'),
        SetTint: require('actions/SetTint'),
        SetVisible: require('actions/SetVisible'),
        SetX: require('actions/SetX'),
        SetXY: require('actions/SetXY'),
        SetY: require('actions/SetY'),
        ShiftPosition: require('actions/ShiftPosition'),
        Shuffle: require('actions/Shuffle'),
        SmootherStep: require('actions/SmootherStep'),
        SmoothStep: require('actions/SmoothStep'),
        Spread: require('actions/Spread'),
        ToggleVisible: require('actions/ToggleVisible'),
        WrapInRectangle: require('actions/WrapInRectangle')
    },
    Animations: require('animations'),
    BlendModes: require('renderer/BlendModes'),
    Cache: require('cache'),
    Cameras: {
        Controls: require('cameras/controls'),
        Scene2D: require('cameras/2d')
    },
    Core: require('core'),
    Class: require('utils/Class'),
    Create: {
        GenerateTexture: require('create/GenerateTexture'),
        Palettes: {
            ARNE16: require('create/palettes/Arne16'),
            C64: require('create/palettes/C64'),
            CGA: require('create/palettes/CGA'),
            JMP: require('create/palettes/JMP'),
            MSX: require('create/palettes/MSX')
        }
    },
    Curves: {
        Path: require('curves/path/Path'),
        MoveTo: require('curves/path/MoveTo'),
        CubicBezier: require('curves/CubicBezierCurve'),
        Curve: require('curves/Curve'),
        Ellipse: require('curves/EllipseCurve'),
        Line: require('curves/LineCurve'),
        QuadraticBezier: require('curves/QuadraticBezierCurve'),
        Spline: require('curves/SplineCurve')
    },
    Data: require('data'),
    Display: {
        Align: require('display/align'),
        BaseShader: require('display/shader/BaseShader'),
        Bounds: require('display/bounds'),
        Canvas: require('display/canvas'),
        Color: require('display/color'),
        ColorMatrix: require('display/ColorMatrix'),
        Masks: require('display/mask'),
        RGB: require('display/RGB')
    },
    DOM: require('dom'),
    Events: require('events'),
    FX: {
        Barrel: require('fx/Barrel'),
        Controller: require('fx/Controller'),
        Bloom: require('fx/Bloom'),
        Blur: require('fx/Blur'),
        Bokeh: require('fx/Bokeh'),
        Circle: require('fx/Circle'),
        ColorMatrix: require('fx/ColorMatrix'),
        Displacement: require('fx/Displacement'),
        Glow: require('fx/Glow'),
        Gradient: require('fx/Gradient'),
        Pixelate: require('fx/Pixelate'),
        Shadow: require('fx/Shadow'),
        Shine: require('fx/Shine'),
        Vignette: require('fx/Vignette'),
        Wipe: require('fx/Wipe')
    },
    Game: require('core/Game'),
    GameObjects: {
        Events: require('gameobjects/events'),

        DisplayList: require('gameobjects/DisplayList'),
        GameObjectCreator: require('gameobjects/GameObjectCreator'),
        GameObjectFactory: require('gameobjects/GameObjectFactory'),
        UpdateList: require('gameobjects/UpdateList'),

        Components: require('gameobjects/components'),
        GetCalcMatrix: require('gameobjects/GetCalcMatrix'),

        BuildGameObject: require('gameobjects/BuildGameObject'),
        BuildGameObjectAnimation: require('gameobjects/BuildGameObjectAnimation'),
        GameObject: require('gameobjects/GameObject'),
        BitmapText: require('gameobjects/bitmaptext/static/BitmapText'),
        Blitter: require('gameobjects/blitter/Blitter'),
        Bob: require('gameobjects/blitter/Bob'),
        Container: require('gameobjects/container/Container'),
        DOMElement: require('gameobjects/domelement/DOMElement'),
        DynamicBitmapText: require('gameobjects/bitmaptext/dynamic/DynamicBitmapText'),
        Extern: require('gameobjects/extern/Extern.js'),
        Graphics: require('gameobjects/graphics/Graphics.js'),
        Group: require('gameobjects/group/Group'),
        Image: require('gameobjects/image/Image'),
        Layer: require('gameobjects/layer/Layer'),
        Particles: require('gameobjects/particles'),
        PathFollower: require('gameobjects/pathfollower/PathFollower'),
        RenderTexture: require('gameobjects/rendertexture/RenderTexture'),
        RetroFont: require('gameobjects/bitmaptext/RetroFont'),
        Rope: require('gameobjects/rope/Rope'),
        Sprite: require('gameobjects/sprite/Sprite'),

        Text: require('gameobjects/text/Text'),
        GetTextSize: require('gameobjects/text/GetTextSize'),
        MeasureText: require('gameobjects/text/MeasureText'),
        TextStyle: require('gameobjects/text/TextStyle'),

        TileSprite: require('gameobjects/tilesprite/TileSprite'),
        Zone: require('gameobjects/zone/Zone'),
        Video: require('gameobjects/video/Video'),

        //  WebGL only
        Shader: require('gameobjects/shader/Shader'),
        Mesh: require('gameobjects/mesh/Mesh'),
        NineSlice: require('gameobjects/nineslice/NineSlice'),
        PointLight: require('gameobjects/pointlight/PointLight'),
        Plane: require('gameobjects/plane/Plane'),
        Light: require('gameobjects/lights/Light'),
        LightsManager: require('gameobjects/lights/LightsManager'),
        LightsPlugin: require('gameobjects/lights/LightsPlugin'),

        //  Shapes

        Shape: require('gameobjects/shape/Shape'),
        Arc: require('gameobjects/shape/arc/Arc'),
        Curve: require('gameobjects/shape/curve/Curve'),
        Ellipse: require('gameobjects/shape/ellipse/Ellipse'),
        Grid: require('gameobjects/shape/grid/Grid'),
        IsoBox: require('gameobjects/shape/isobox/IsoBox'),
        IsoTriangle: require('gameobjects/shape/isotriangle/IsoTriangle'),
        Line: require('gameobjects/shape/line/Line'),
        Polygon: require('gameobjects/shape/polygon/Polygon'),
        Rectangle: require('gameobjects/shape/rectangle/Rectangle'),
        Star: require('gameobjects/shape/star/Star'),
        Triangle: require('gameobjects/shape/triangle/Triangle'),

        //  Game Object Factories

        Factories: {
            Blitter: require('gameobjects/blitter/BlitterFactory'),
            Container: require('gameobjects/container/ContainerFactory'),
            DOMElement: require('gameobjects/domelement/DOMElementFactory'),
            DynamicBitmapText: require('gameobjects/bitmaptext/dynamic/DynamicBitmapTextFactory'),
            Extern: require('gameobjects/extern/ExternFactory'),
            Graphics: require('gameobjects/graphics/GraphicsFactory'),
            Group: require('gameobjects/group/GroupFactory'),
            Image: require('gameobjects/image/ImageFactory'),
            Layer: require('gameobjects/layer/LayerFactory'),
            Particles: require('gameobjects/particles/ParticleEmitterFactory'),
            PathFollower: require('gameobjects/pathfollower/PathFollowerFactory'),
            RenderTexture: require('gameobjects/rendertexture/RenderTextureFactory'),
            Rope: require('gameobjects/rope/RopeFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            StaticBitmapText: require('gameobjects/bitmaptext/static/BitmapTextFactory'),
            Text: require('gameobjects/text/TextFactory'),
            TileSprite: require('gameobjects/tilesprite/TileSpriteFactory'),
            Zone: require('gameobjects/zone/ZoneFactory'),
            Video: require('gameobjects/video/VideoFactory'),

            //  Shapes
            Arc: require('gameobjects/shape/arc/ArcFactory'),
            Curve: require('gameobjects/shape/curve/CurveFactory'),
            Ellipse: require('gameobjects/shape/ellipse/EllipseFactory'),
            Grid: require('gameobjects/shape/grid/GridFactory'),
            IsoBox: require('gameobjects/shape/isobox/IsoBoxFactory'),
            IsoTriangle: require('gameobjects/shape/isotriangle/IsoTriangleFactory'),
            Line: require('gameobjects/shape/line/LineFactory'),
            Polygon: require('gameobjects/shape/polygon/PolygonFactory'),
            Rectangle: require('gameobjects/shape/rectangle/RectangleFactory'),
            Star: require('gameobjects/shape/star/StarFactory'),
            Triangle: require('gameobjects/shape/triangle/TriangleFactory'),

            //  WebGL only
            Shader: require('gameobjects/shader/ShaderFactory'),
            Mesh: require('gameobjects/mesh/MeshFactory'),
            NineSlice: require('gameobjects/nineslice/NineSliceFactory'),
            PointLight: require('gameobjects/pointlight/PointLightFactory'),
            Plane: require('gameobjects/plane/PlaneFactory'),
        },

        Creators: {
            Blitter: require('gameobjects/blitter/BlitterCreator'),
            Container: require('gameobjects/container/ContainerCreator'),
            DynamicBitmapText: require('gameobjects/bitmaptext/dynamic/DynamicBitmapTextCreator'),
            Graphics: require('gameobjects/graphics/GraphicsCreator'),
            Group: require('gameobjects/group/GroupCreator'),
            Image: require('gameobjects/image/ImageCreator'),
            Layer: require('gameobjects/layer/LayerCreator'),
            Particles: require('gameobjects/particles/ParticleEmitterCreator'),
            RenderTexture: require('gameobjects/rendertexture/RenderTextureCreator'),
            Rope: require('gameobjects/rope/RopeCreator'),
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            StaticBitmapText: require('gameobjects/bitmaptext/static/BitmapTextCreator'),
            Text: require('gameobjects/text/TextCreator'),
            TileSprite: require('gameobjects/tilesprite/TileSpriteCreator'),
            Zone: require('gameobjects/zone/ZoneCreator'),
            Video: require('gameobjects/video/VideoCreator'),

            //  WebGL only
            Shader: require('gameobjects/shader/ShaderCreator'),
            Mesh: require('gameobjects/mesh/MeshCreator'),
            NineSlice: require('gameobjects/nineslice/NineSliceCreator'),
            PointLight: require('gameobjects/pointlight/PointLightCreator'),
            Plane: require('gameobjects/plane/PlaneCreator'),
        }

    },
    Geom: {
        Circle: require('geom/circle'),
        Ellipse: require('geom/ellipse'),
        Intersects: require('geom/intersects'),
        Line: require('geom/line'),
        Mesh: require('geom/mesh'),
        Point: require('geom/point'),
        Polygon: require('geom/polygon'),
        Rectangle: require('geom/rectangle'),
        Triangle: require('geom/triangle')
    },
    Input: {
        CreatePixelPerfectHandler: require('input/CreatePixelPerfectHandler'),
        CreateInteractiveObject: require('input/CreateInteractiveObject'),
        Events: require('input/events'),
        Gamepad: require('input/gamepad'),
        InputManager: require('input/InputManager'),
        InputPlugin: require('input/InputPlugin'),
        InputPluginCache: require('input/InputPluginCache'),
        Keyboard: require('input/keyboard'),
        Mouse: require('input/mouse'),
        Pointer: require('input/Pointer'),
        Touch: require('input/touch')
    },
    Loader: {
        Events: require('loader/events'),
        FileTypes: {
            AnimationJSONFile: require('loader/filetypes/AnimationJSONFile'),
            AsepriteFile: require('loader/filetypes/AsepriteFile'),
            AtlasJSONFile: require('loader/filetypes/AtlasJSONFile'),
            AtlasXMLFile: require('loader/filetypes/AtlasXMLFile'),
            AudioFile: require('loader/filetypes/AudioFile'),
            AudioSpriteFile: require('loader/filetypes/AudioSpriteFile'),
            BinaryFile: require('loader/filetypes/BinaryFile'),
            BitmapFontFile: require('loader/filetypes/BitmapFontFile'),
            CompressedTextureFile: require('loader/filetypes/CompressedTextureFile'),
            CSSFile: require('loader/filetypes/CSSFile'),
            GLSLFile: require('loader/filetypes/GLSLFile'),
            HTML5AudioFile: require('loader/filetypes/HTML5AudioFile'),
            HTMLFile: require('loader/filetypes/HTMLFile'),
            HTMLTextureFile: require('loader/filetypes/HTMLTextureFile'),
            ImageFile: require('loader/filetypes/ImageFile'),
            JSONFile: require('loader/filetypes/JSONFile'),
            MultiAtlasFile: require('loader/filetypes/MultiAtlasFile'),
            MultiScriptFile: require('loader/filetypes/MultiScriptFile'),
            OBJFile: require('loader/filetypes/OBJFile'),
            PackFile: require('loader/filetypes/PackFile'),
            PluginFile: require('loader/filetypes/PluginFile'),
            SceneFile: require('loader/filetypes/SceneFile'),
            ScenePluginFile: require('loader/filetypes/ScenePluginFile'),
            ScriptFile: require('loader/filetypes/ScriptFile'),
            SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
            SVGFile: require('loader/filetypes/SVGFile'),
            TextFile: require('loader/filetypes/TextFile'),
            TilemapCSVFile: require('loader/filetypes/TilemapCSVFile'),
            TilemapImpactFile: require('loader/filetypes/TilemapImpactFile'),
            TilemapJSONFile: require('loader/filetypes/TilemapJSONFile'),
            UnityAtlasFile: require('loader/filetypes/UnityAtlasFile'),
            VideoFile: require('loader/filetypes/VideoFile'),
            XMLFile: require('loader/filetypes/XMLFile')
        },
        File: require('loader/File'),
        FileTypesManager: require('loader/FileTypesManager'),
        GetURL: require('loader/GetURL'),
        LoaderPlugin: require('loader/LoaderPlugin'),
        MergeXHRSettings: require('loader/MergeXHRSettings'),
        MultiFile: require('loader/MultiFile'),
        XHRLoader: require('loader/XHRLoader'),
        XHRSettings: require('loader/XHRSettings')
    },
    Math: {
        //  Collections of functions
        Angle: require('math/angle/'),
        Distance: require('math/distance/'),
        Easing: require('math/easing/'),
        Fuzzy: require('math/fuzzy/'),
        Interpolation: require('math/interpolation/'),
        Pow2: require('math/pow2/'),
        Snap: require('math/snap/'),

        //  Expose the RNG Class
        RandomDataGenerator: require('math/random-data-generator/RandomDataGenerator'),

        //  Single functions
        Average: require('math/Average'),
        Bernstein: require('math/Bernstein'),
        Between: require('math/Between'),
        CatmullRom: require('math/CatmullRom'),
        CeilTo: require('math/CeilTo'),
        Clamp: require('math/Clamp'),
        DegToRad: require('math/DegToRad'),
        Difference: require('math/Difference'),
        Euler: require('math/Euler'),
        Factorial: require('math/Factorial'),
        FloatBetween: require('math/FloatBetween'),
        FloorTo: require('math/FloorTo'),
        FromPercent: require('math/FromPercent'),
        GetSpeed: require('math/GetSpeed'),
        IsEven: require('math/IsEven'),
        IsEvenStrict: require('math/IsEvenStrict'),
        Linear: require('math/Linear'),
        LinearXY: require('math/LinearXY'),
        MaxAdd: require('math/MaxAdd'),
        Median: require('math/Median'),
        MinSub: require('math/MinSub'),
        Percent: require('math/Percent'),
        RadToDeg: require('math/RadToDeg'),
        RandomXY: require('math/RandomXY'),
        RandomXYZ: require('math/RandomXYZ'),
        RandomXYZW: require('math/RandomXYZW'),
        Rotate: require('math/Rotate'),
        RotateAround: require('math/RotateAround'),
        RotateAroundDistance: require('math/RotateAroundDistance'),
        RotateTo: require('math/RotateTo'),
        RoundAwayFromZero: require('math/RoundAwayFromZero'),
        RoundTo: require('math/RoundTo'),
        SinCosTableGenerator: require('math/SinCosTableGenerator'),
        SmootherStep: require('math/SmootherStep'),
        SmoothStep: require('math/SmoothStep'),
        ToXY: require('math/ToXY'),
        TransformXY: require('math/TransformXY'),
        Within: require('math/Within'),
        Wrap: require('math/Wrap'),

        //  Vector classes
        Vector2: require('math/Vector2'),
        Vector3: require('math/Vector3'),
        Vector4: require('math/Vector4'),
        Matrix3: require('math/Matrix3'),
        Matrix4: require('math/Matrix4'),
        Quaternion: require('math/Quaternion'),
        RotateVec3: require('math/RotateVec3')

    },
    Physics: {
        Arcade: require('physics/arcade'),
        Matter: require('physics/matter-js')
    },
    Plugins: require('plugins'),
    Renderer: {
        Canvas: require('renderer/canvas'),
        Events: require('renderer/events'),
        Snapshot: require('renderer/snapshot'),
        WebGL: require('renderer/webgl')
    },
    Scale: require('scale'),
    ScaleModes: require('renderer/ScaleModes'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Structs: require('structs'),
    Textures: require('textures'),
    Tilemaps: require('tilemaps'),
    Time: require('time'),
    Tweens: require('tweens'),
    Utils: {
        Array: require('utils/array/'),
        Base64: require('utils/base64/'),
        Objects: require('utils/object/'),
        String: require('utils/string/'),
        NOOP: require('utils/NOOP'),
        NULL: require('utils/NULL')
    }

};

//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND)
{
    Phaser.Sound = {
        SoundManagerCreator: require('sound/SoundManagerCreator'),

        Events: require('sound/events'),

        BaseSound: require('sound/BaseSound'),
        BaseSoundManager: require('sound/BaseSoundManager'),

        WebAudioSound: require('sound/webaudio/WebAudioSound'),
        WebAudioSoundManager: require('sound/webaudio/WebAudioSoundManager'),

        HTML5AudioSound: require('sound/html5/HTML5AudioSound'),
        HTML5AudioSoundManager: require('sound/html5/HTML5AudioSoundManager'),

        NoAudioSound: require('sound/noaudio/NoAudioSound'),
        NoAudioSoundManager: require('sound/noaudio/NoAudioSoundManager')
    };
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
