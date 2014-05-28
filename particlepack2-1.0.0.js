/**
* For a walkthrough on setting up the particle pack plugin check the <a href="https://github.com/gamelab/particle-pack-1-plugin/blob/master/README.md"><README./a> 
* @module Kiwi
* @submodule Kiwi.Plugins
* @namespace Kiwi.Plugins
* @class ParticlePack1
* @main
*/
Kiwi.Plugins.ParticlePack2 = {
  
  /**
  * The name of this plugin.
  * @property name
  * @type String
  * @public
  */
  name:'ParticlePack2',

  /**
  * The version of this plugin in semver (semantic versioning) format
  * @property version
  * @type String
  * @public
  */
  version:'1.0.0',

  /**
  * The minimum version of Kiwi.js required to run this plugin in semver (semantic versioning) format
  * @property minimumKiwiVersion
  * @type String
  * @public
  */
  minimumKiwiVersion:'1.0.0',

  /**
  * Other plugins required for this plugin to run. 
  * @property pluginDependencies
  * @type Array
  * @public
  */
  pluginDependencies: [
    {
      name:'ParticlesGL',
      minimumVersion:'1.0.2'
    }

  ]

};



/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register(Kiwi.Plugins.ParticlePack2);


 

 

/**
  * ParticlePack2 Explosiveflash Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Explosiveflashblue = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 2,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 150,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}


  this.flares2Config = {
  "numParts": 9,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 100,
  "velOffsetY": 0,
  "velAngMin": -2,
  "velAngMax": 2,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
 "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Flamethrowerblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Flamethrowerblue = function (state,x,y) { 
  this.config = {
  "numParts": 25,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 300,
  "velOffsetY": 0,
  "velAngMin": -6,
  "velAngMax": 6,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0.0004784919240787009,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.6,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 5,
  "endSize": 80,
  "loop": true,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
 "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Laserflashblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Laserflashblue = function (state,x,y) { 

  this.flares1Config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 110.8,
  "posRadialStart": 0,
  "posRadialEnd": 3.1419999999999995,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 10,
  "velOffsetY": 0,
  "velAngMin": -20,
  "velAngMax": 21,
  "velRadius": 1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 10,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
    "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": true,
  "cells": [
    5,
    6
  ],
  "textureID": "_128x128"
}
  

  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}

/**
  * ParticlePack2 Machinegunflashblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Machinegunflashblue = function (state,x,y) { 
 this.flares1Config ={
  "numParts": 6,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 50,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    3
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
   "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
  this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 15,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 50,
  "minVel": 50,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 50,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.08,
  "maxLifespan": 0.08,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 40,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.8"
  ],
  "additive": true,
  "cells": [
    15,
    17
  ],
  "textureID": "_128x128"
}



  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  return group;
}

/**
  * ParticlePack2 Pistolflashblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Pistolflashblue = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": -10,
  "velAngMax": 10,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    13
  ],
  "textureID": "_128x128"
}
  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 20,
  "posOffsetY": 0,
  "posRadius": 3,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 5,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 80,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Rifleflashblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashblue = function (state,x,y) { 
  this.bamConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 20,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    2,
    3,
    4
  ],
  "textureID": "_128x128"
}
  this.starsConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.1,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 60,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11,
    12
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var bam = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.bamConfig);
  var stars = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.starsConfig);
  group.addChild(bam);
  group.addChild(stars);

  return group;
}

/**
  * ParticlePack2 Shotgunflashblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Shotgunflashblue = function (state,x,y) { 
   this.config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.4,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    4,
    16,
    17
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Sniperflashblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Sniperflashblue = function (state,x,y) { 
  this.flares1Config ={
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 200,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    12
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.3,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.07,
  "maxLifespan": 0.07,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 90,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    ".4",
    ".2",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    15
  ],
  "textureID": "_128x128"
}
  this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
  this.flares5Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": -100,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  var flares5 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares5Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  group.addChild(flares5);
  return group;
}

/**
  * ParticlePack2 Explosiveflashgreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Explosiveflashgreen = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 2,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 150,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}


  this.flares2Config = {
  "numParts": 9,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 100,
  "velOffsetY": 0,
  "velAngMin": -2,
  "velAngMax": 2,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
 "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Flamethrowergreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Flamethrowergreen = function (state,x,y) { 
  this.config = {
  "numParts": 25,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 300,
  "velOffsetY": 0,
  "velAngMin": -6,
  "velAngMax": 6,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0.0004784919240787009,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.6,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 5,
  "endSize": 80,
  "loop": true,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
"colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Laserflashgreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Laserflashgreen = function (state,x,y) { 

  this.flares1Config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 110.8,
  "posRadialStart": 0,
  "posRadialEnd": 3.1419999999999995,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 10,
  "velOffsetY": 0,
  "velAngMin": -20,
  "velAngMax": 21,
  "velRadius": 1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 10,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
    "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": true,
  "cells": [
    5,
    6
  ],
  "textureID": "_128x128"
}
  

  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}

/**
  * ParticlePack2 Machinegunflashgreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Machinegunflashgreen = function (state,x,y) { 
 this.flares1Config ={
  "numParts": 6,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 50,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    3
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
   "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
 this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 15,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 50,
  "minVel": 50,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 50,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.08,
  "maxLifespan": 0.08,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 40,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.8"
  ],
  "additive": true,
  "cells": [
    15,
    17
  ],
  "textureID": "_128x128"
}



  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  return group;
}

/**
  * ParticlePack2 Pistolflashgreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Pistolflashgreen = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": -10,
  "velAngMax": 10,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    13
  ],
  "textureID": "_128x128"
}
  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 20,
  "posOffsetY": 0,
  "posRadius": 3,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 5,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 80,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Rifleflashgreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashgreen = function (state,x,y) { 
  this.bamConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 20,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    2,
    3,
    4
  ],
  "textureID": "_128x128"
}
  this.starsConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.1,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 60,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11,
    12
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var bam = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.bamConfig);
  var stars = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.starsConfig);
  group.addChild(bam);
  group.addChild(stars);

  return group;
}

/**
  * ParticlePack2 Shotgunflashgreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Shotgunflashgreen = function (state,x,y) { 
   this.config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.4,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    4,
    16,
    17
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Sniperflashgreen Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Sniperflashgreen = function (state,x,y) { 
  this.flares1Config ={
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 200,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    12
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.3,
 "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_128x128"
}
 this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.07,
  "maxLifespan": 0.07,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 90,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
"colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    ".4",
    ".2",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    15
  ],
  "textureID": "_128x128"
}
  this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
"colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
  this.flares5Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": -100,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.8745098039215686,
    0.9803921568627451,
    0.6745098039215687
  ],
  "colEnv1": [
    0.5294117647058824,
    0.9725490196078431,
    0.34509803921568627
  ],
  "colEnv2": [
    0.24313725490196078,
    0.9686274509803922,
    0.06666666666666667
  ],
  "colEnv3": [
    0,
    0.9686274509803922,
    0.2
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  var flares5 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares5Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  group.addChild(flares5);
  return group;
}

/**
  * ParticlePack2 Explosiveflashorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Explosiveflashorange = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 2,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 150,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}


  this.flares2Config = {
  "numParts": 9,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 100,
  "velOffsetY": 0,
  "velAngMin": -2,
  "velAngMax": 2,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Flamethrowerorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Flamethrowerorange = function (state,x,y) { 
  this.config = {
  "numParts": 25,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 300,
  "velOffsetY": 0,
  "velAngMin": -6,
  "velAngMax": 6,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0.0004784919240787009,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.6,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 5,
  "endSize": 80,
  "loop": true,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Laserflashorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Laserflashorange = function (state,x,y) { 

  this.flares1Config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 110.8,
  "posRadialStart": 0,
  "posRadialEnd": 3.1419999999999995,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 10,
  "velOffsetY": 0,
  "velAngMin": -20,
  "velAngMax": 21,
  "velRadius": 1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 10,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
    "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": true,
  "cells": [
    5,
    6
  ],
  "textureID": "_128x128"
}
  

  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}

/**
  * ParticlePack2 Machinegunflashorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Machinegunflashorange = function (state,x,y) { 
 this.flares1Config ={
  "numParts": 6,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
   "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 50,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    3
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
   "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
 this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 15,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 50,
  "minVel": 50,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 50,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.08,
  "maxLifespan": 0.08,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 40,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.8"
  ],
  "additive": true,
  "cells": [
    15,
    17
  ],
  "textureID": "_128x128"
}



  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  return group;
}

/**
  * ParticlePack2 Pistolflashorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Pistolflashorange = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": -10,
  "velAngMax": 10,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
   "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    13
  ],
  "textureID": "_128x128"
}
  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 20,
  "posOffsetY": 0,
  "posRadius": 3,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 5,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 80,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Rifleflashorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashorange = function (state,x,y) { 
  this.bamConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 20,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    2,
    3,
    4
  ],
  "textureID": "_128x128"
}
  this.starsConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.1,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 60,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11,
    12
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var bam = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.bamConfig);
  var stars = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.starsConfig);
  group.addChild(bam);
  group.addChild(stars);

  return group;
}

/**
  * ParticlePack2 Shotgunflashorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Shotgunflashorange = function (state,x,y) { 
   this.config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.4,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    4,
    16,
    17
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Sniperflashorange Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Sniperflashorange = function (state,x,y) { 
  this.flares1Config ={
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 200,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    12
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.3,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_128x128"
}
 this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.07,
  "maxLifespan": 0.07,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 90,
  "loop": false,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    ".4",
    ".2",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    15
  ],
  "textureID": "_128x128"
}
  this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
  this.flares5Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": -100,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.996078431372549,
    0.9137254901960784,
    0.7294117647058823
  ],
  "colEnv1": [
    0.9921568627450981,
    0.792156862745098,
    0.20392156862745098
  ],
  "colEnv2": [
    0.9921568627450981,
    0.6,
    0.2901960784313726
  ],
  "colEnv3": [
    0.996078431372549,
    0.32941176470588235,
    0.17254901960784313
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  var flares5 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares5Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  group.addChild(flares5);
  return group;
}

/**
  * ParticlePack2 Explosiveflashpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Explosiveflashpurple = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 2,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 150,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}


  this.flares2Config = {
  "numParts": 9,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 100,
  "velOffsetY": 0,
  "velAngMin": -2,
  "velAngMax": 2,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Flamethrowerpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Flamethrowerpurple = function (state,x,y) { 
  this.config = {
  "numParts": 25,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 300,
  "velOffsetY": 0,
  "velAngMin": -6,
  "velAngMax": 6,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0.0004784919240787009,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.6,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 5,
  "endSize": 80,
  "loop": true,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Laserflashpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Laserflashpurple = function (state,x,y) { 

  this.flares1Config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 110.8,
  "posRadialStart": 0,
  "posRadialEnd": 3.1419999999999995,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 10,
  "velOffsetY": 0,
  "velAngMin": -20,
  "velAngMax": 21,
  "velRadius": 1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 10,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
   "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": true,
  "cells": [
    5,
    6
  ],
  "textureID": "_128x128"
}
  

  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}

/**
  * ParticlePack2 Machinegunflashpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Machinegunflashpurple = function (state,x,y) { 
 this.flares1Config ={
  "numParts": 6,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 50,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    3
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
 this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 15,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 50,
  "minVel": 50,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 50,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.08,
  "maxLifespan": 0.08,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 40,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.8"
  ],
  "additive": true,
  "cells": [
    15,
    17
  ],
  "textureID": "_128x128"
}



  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  return group;
}

/**
  * ParticlePack2 Pistolflashpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Pistolflashpurple = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": -10,
  "velAngMax": 10,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    13
  ],
  "textureID": "_128x128"
}
  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 20,
  "posOffsetY": 0,
  "posRadius": 3,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 5,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 80,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Rifleflashpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashpurple = function (state,x,y) { 
  this.bamConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 20,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    2,
    3,
    4
  ],
  "textureID": "_128x128"
}
  this.starsConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.1,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 60,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11,
    12
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var bam = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.bamConfig);
  var stars = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.starsConfig);
  group.addChild(bam);
  group.addChild(stars);

  return group;
}

/**
  * ParticlePack2 Shotgunflashpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Shotgunflashpurple = function (state,x,y) { 
   this.config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.4,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    4,
    16,
    17
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Sniperflashpurple Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Sniperflashpurple = function (state,x,y) { 
  this.flares1Config ={
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 200,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    12
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.3,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_128x128"
}
this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.07,
  "maxLifespan": 0.07,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 90,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    ".4",
    ".2",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    15
  ],
  "textureID": "_128x128"
}
  this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
  this.flares5Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": -100,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.996078431372549,
    0.788235294117647,
    0.984313725490196
  ],
  "colEnv1": [
    0.7647058823529411,
    0.4117647058823529,
    0.9921568627450981
  ],
  "colEnv2": [
    0.4823529411764706,
    0.21176470588235294,
    0.9921568627450981
  ],
  "colEnv3": [
    0.3686274509803922,
    0.24313725490196078,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  var flares5 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares5Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  group.addChild(flares5);
  return group;
}

/**
  * ParticlePack2 Explosiveflashred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Explosiveflashred = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 2,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 150,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
"colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}


  this.flares2Config = {
  "numParts": 9,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 100,
  "velOffsetY": 0,
  "velAngMin": -2,
  "velAngMax": 2,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
"colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Flamethrowerred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Flamethrowerred = function (state,x,y) { 
  this.config = {
  "numParts": 25,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 300,
  "velOffsetY": 0,
  "velAngMin": -6,
  "velAngMax": 6,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0.0004784919240787009,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.6,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 5,
  "endSize": 80,
  "loop": true,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
"colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Laserflashred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Laserflashred = function (state,x,y) { 

  this.flares1Config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 110.8,
  "posRadialStart": 0,
  "posRadialEnd": 3.1419999999999995,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 10,
  "velOffsetY": 0,
  "velAngMin": -20,
  "velAngMax": 21,
  "velRadius": 1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 10,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": true,
  "cells": [
    5,
    6
  ],
  "textureID": "_128x128"
}
  

  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv1": [
    0.4392156862745098,
    0.7450980392156863,
    0.9921568627450981
  ],
  "colEnv2": [
    0.10980392156862745,
    0.38823529411764707,
    0.9921568627450981
  ],
  "colEnv3": [
    0.06666666666666667,
    0.2549019607843137,
    0.9921568627450981
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}

/**
  * ParticlePack2 Machinegunflashred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Machinegunflashred = function (state,x,y) { 
 this.flares1Config ={
  "numParts": 6,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
"colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 50,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    3
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 15,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 50,
  "minVel": 50,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 50,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.08,
  "maxLifespan": 0.08,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 40,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.8"
  ],
  "additive": true,
  "cells": [
    15,
    17
  ],
  "textureID": "_128x128"
}



  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  return group;
}

/**
  * ParticlePack2 Pistolflashred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Pistolflashred = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": -10,
  "velAngMax": 10,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
"colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    13
  ],
  "textureID": "_128x128"
}
  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 20,
  "posOffsetY": 0,
  "posRadius": 3,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 5,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 80,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
"colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Rifleflashred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashred = function (state,x,y) { 
  this.bamConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 20,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
"colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    2,
    3,
    4
  ],
  "textureID": "_128x128"
}
  this.starsConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.1,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 60,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11,
    12
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var bam = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.bamConfig);
  var stars = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.starsConfig);
  group.addChild(bam);
  group.addChild(stars);

  return group;
}

/**
  * ParticlePack2 Shotgunflashred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Shotgunflashred = function (state,x,y) { 
   this.config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.4,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    4,
    16,
    17
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Sniperflashred Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Sniperflashred = function (state,x,y) { 
  this.flares1Config ={
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 200,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    12
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.3,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.07,
  "maxLifespan": 0.07,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 90,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    ".4",
    ".2",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    15
  ],
  "textureID": "_128x128"
}
  this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.611764705882353,
    0.9647058823529412,
    0.9921568627450981
  ],
  "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
  this.flares5Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": -100,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    1,
    0.592156862745098,
    0.4980392156862745
  ],
  "colEnv1": [
    1,
    0.15294117647058825,
    0.14901960784313725
  ],
  "colEnv2": [
    1,
    0.1607843137254902,
    0.08627450980392157
  ],
  "colEnv3": [
    1,
    0.16470588235294117,
    0
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  var flares5 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares5Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  group.addChild(flares5);
  return group;
}

/**
  * ParticlePack2 Explosiveflashyellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Explosiveflashyellow = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 2,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 150,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}


  this.flares2Config = {
  "numParts": 9,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 100,
  "velOffsetY": 0,
  "velAngMin": -2,
  "velAngMax": 2,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 1.4575697530163152e-7,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.3,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
 "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Flamethroweryellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Flamethroweryellow = function (state,x,y) { 
  this.config = {
  "numParts": 25,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": false,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": true,
  "velRandomRadial": true,
  "velShape": "point",
  "velOffsetX": 300,
  "velOffsetY": 0,
  "velAngMin": -6,
  "velAngMax": 6,
  "velRadius": 20,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0.0004784919240787009,
  "velLength": 200,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.6,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 5,
  "endSize": 80,
  "loop": true,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "0",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    "0.1",
    "0.5"
  ],
  "additive": true,
  "cells": [
    3,
    4
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Laserflashyellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Laserflashyellow = function (state,x,y) { 

  this.flares1Config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 110.8,
  "posRadialStart": 0,
  "posRadialEnd": 3.1419999999999995,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 10,
  "velOffsetY": 0,
  "velAngMin": -20,
  "velAngMax": 21,
  "velRadius": 1,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 10,
  "endSize": 100,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": 1,
   "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ],
  "additive": true,
  "cells": [
    5,
    6
  ],
  "textureID": "_128x128"
}
  

  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}

/**
  * ParticlePack2 Machinegunflashyellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Machinegunflashyellow = function (state,x,y) { 
 this.flares1Config ={
  "numParts": 6,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 50,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
 "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    3
  ],
  "textureID": "_128x128"
}
  this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.5,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
 this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 15,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 50,
  "minVel": 50,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 50,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.08,
  "maxLifespan": 0.08,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 40,
  "endSize": 70,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.8"
  ],
  "additive": true,
  "cells": [
    15,
    17
  ],
  "textureID": "_128x128"
}



  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  return group;
}

/**
  * ParticlePack2 Pistolflashyellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Pistolflashyellow = function (state,x,y) { 
  this.flares1Config = {
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": -10,
  "velAngMax": 10,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.7,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    13
  ],
  "textureID": "_128x128"
}
  this.flares2Config = {
  "numParts": 1,
  "posOffsetX": 20,
  "posOffsetY": 0,
  "posRadius": 3,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "center",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 5,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 20,
  "endSize": 80,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
 var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  group.addChild(flares1);
  group.addChild(flares2);

  return group;
}


/**
  * ParticlePack2 Rifleflashyellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashyellow = function (state,x,y) { 
  this.bamConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 20,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    0,
    1,
    2,
    3,
    4
  ],
  "textureID": "_128x128"
}
  this.starsConfig = {
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.1,
  "maxLifespan": 0.1,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 60,
  "endSize": 60,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    10,
    11,
    12
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var bam = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.bamConfig);
  var stars = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.starsConfig);
  group.addChild(bam);
  group.addChild(stars);

  return group;
}

/**
  * ParticlePack2 Shotgunflashyellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Shotgunflashyellow = function (state,x,y) { 
   this.config = {
  "numParts": 6,
  "posOffsetX": 0,
  "posOffsetY": 0,
  "posRadius": 5,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.4,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 1,
  "endSize": 200,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "0",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    4,
    16,
    17
  ],
  "textureID": "_128x128"
}
  
   return new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,x,y,this.config);
}

/**
  * ParticlePack2 Sniperflashyellow Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Sniperflashyellow = function (state,x,y) { 
  this.flares1Config ={
  "numParts": 1,
  "posOffsetX": 30,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 200,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 150,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    12
  ],
  "textureID": "_128x128"
}
  this.flares2Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 0.3,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    6
  ],
  "textureID": "_128x128"
}
this.flares3Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 400,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0.1,
  "minLifespan": 0.07,
  "maxLifespan": 0.07,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 90,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    ".4",
    ".2",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    15
  ],
  "textureID": "_128x128"
}
  this.flares4Config ={
  "numParts": 1,
  "posOffsetX": 10,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.5,
  "maxLifespan": 0.5,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 100,
  "endSize": 10,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
  "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    ".7",
    ".5",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    8
  ],
  "textureID": "_128x128"
}
  this.flares5Config ={
  "numParts": 1,
  "posOffsetX": 40,
  "posOffsetY": 0,
  "posRadius": 75.6,
  "posRadialStart": 0,
  "posRadialEnd": 6.283185307179586,
  "posWidth": 200,
  "posHeight": 200,
  "posConstrainRect": true,
  "posAngle": 0,
  "posLength": 200,
  "posRandomLine": true,
  "posConstrainRadial": true,
  "posRandomRadial": true,
  "posShape": "point",
  "maxVel": 100,
  "minVel": 70,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "point",
  "velOffsetX": -100,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": 0,
  "velRadius": 144,
  "velRadialStart": 0,
  "velRadialEnd": 6.283185307179586,
  "velWidth": 200,
  "velHeight": 200,
  "velAngle": 0,
  "velLength": 20,
  "velRandomLine": true,
  "minStartTime": 0,
  "maxStartTime": 0,
  "minLifespan": 0.2,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 70,
  "endSize": 1,
  "loop": false,
  "colEnvKeyframes": [
    "0.2",
    "0.3"
  ],
  "alpha": 1,
   "colEnv0": [
    0.9921568627450981,
    0.9764705882352941,
    0.8313725490196079
  ],
  "colEnv1": [
    0.9921568627450981,
    0.9176470588235294,
    0.5176470588235295
  ],
  "colEnv2": [
    0.9921568627450981,
    0.8588235294117647,
    0.2196078431372549
  ],
  "colEnv3": [
    0.996078431372549,
    0.8235294117647058,
    0.027450980392156862
  ],
  "alphaGradient": [
    "1",
    "1",
    "1",
    "0"
  ],
  "alphaStops": [
    0.3,
    "0.5"
  ],
  "additive": true,
  "cells": [
    3
  ],
  "textureID": "_128x128"
}

  
  var group = new Kiwi.Group(state)
  group.x = x;
  group.y = y;
  var flares1 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares1Config);
  var flares2 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares2Config);
  var flares3 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares3Config);
  var flares4 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares4Config);
  var flares5 = new Kiwi.GameObjects.StatelessParticles(state,state.textures.particlePack2SpriteSheet,0,0,this.flares5Config);
  group.addChild(flares1);
  group.addChild(flares2);
  group.addChild(flares3);
  group.addChild(flares4);
  group.addChild(flares5);
  return group;
}
