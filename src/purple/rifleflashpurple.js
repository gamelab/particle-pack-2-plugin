/**
* ParticlePack2 Rifleflashpurple Effect.
* @method Rifleflashpurple
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack2.Rifleflashpurple = function( state, x, y ) {
	this.bamConfig = {
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
			0.2,
			0.3
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
			0.5
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
	};

	this.starsConfig = {
		"numParts": 1,
		"posOffsetX": 25,
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
			0.2,
			0.3
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
			0.5
		],
		"additive": true,
		"cells": [
			10,
			11,
			12
		],
		"textureID": "_128x128"
	};

	var group = new Kiwi.Group( state );
	group.x = x;
	group.y = y;
	var bam = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, 0, 0,
		this.bamConfig );
	var stars = new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, 0, 0,
		this.starsConfig );
	group.addChild( bam );
	group.addChild( stars );

	return group;
};
