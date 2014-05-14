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
  "minLifespan": 0.1,
  "maxLifespan": 0.2,
  "gravityX": 0,
  "gravityY": 0,
  "startSize": 50,
  "endSize": 100,
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
