/**
* ParticlePack2 Sniperflashpurple Effect.
* @method Sniperflashpurple
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack2.Sniperflashpurple = function( state, x, y ) {
	this.flares1Config = {
		"numParts": 1,
		"posOffsetX": 20,
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
	};

	this.flares2Config = {
		"numParts": 1,
		"posOffsetX": 5,
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
	};

	this.flares3Config = {
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
	};

	this.flares4Config = {
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
	};

	this.flares5Config = {
		"numParts": 1,
		"posOffsetX": 35,
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
	};

	var group = new Kiwi.Group( state );
	group.x = x;
	group.y = y;
	var flares1 = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, 0, 0,
		this.flares1Config );
	var flares2 = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, 0, 0,
		this.flares2Config );
	var flares3 = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, 0, 0,
		this.flares3Config );
	var flares4 = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, 0, 0,
		this.flares4Config );
	var flares5 = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, 0, 0,
		this.flares5Config );
	group.addChild( flares1 );
	group.addChild( flares2 );
	group.addChild( flares3 );
	group.addChild( flares4 );
	group.addChild( flares5 );
	return group;
};
