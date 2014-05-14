/**
  * ParticlePack2 Rifleflashblue Effect.
  * @property Bam
  * @type Kiwi.Group
  * @public
  * @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashblue = function (state,x,y) { 
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
