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
  "posOffsetX": 20,
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

