/**
* ParticlePack2 Flamethrowerpurple Effect.
* @method Flamethrowerpurple
* @param state {Kiwi.State} Current state
* @param x {Number} X position
* @param y {Number} Y position
* @return Kiwi.Group
* @public
* @static
*/

Kiwi.Plugins.ParticlePack2.Flamethrowerpurple = function( state, x, y ) {
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
			0.2,
			0.3
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
			0,
			1,
			1,
			0
		],
		"alphaStops": [
			0.1,
			0.5
		],
		"additive": true,
		"cells": [
			3,
			4
		],
		"textureID": "_128x128"
	};

	return new Kiwi.GameObjects.StatelessParticles(
		state, state.textures.particlePack2SpriteSheet, x, y,
		this.config );
};
