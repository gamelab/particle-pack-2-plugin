/**
* For a walkthrough on setting up the particle pack plugin check the
* <a href="https://github.com/gamelab/particle-pack-2-plugin/blob/master/README.md">README.</a> 
* @module Kiwi
* @submodule Kiwi.Plugins
* @namespace Kiwi.Plugins
* @class ParticlePack2
* @main
*/
Kiwi.Plugins.ParticlePack2 = {

	/**
	* The name of this plugin.
	* @property name
	* @type String
	* @public
	*/
	name: "ParticlePack2",

	/**
	* The version of this plugin in semver (semantic versioning) format
	* @property version
	* @type String
	* @public
	*/
	version: "1.0.4",

	/**
	* The minimum version of Kiwi.js required to run this plugin
	*	in semver (semantic versioning) format
	* @property minimumKiwiVersion
	* @type String
	* @public
	*/
	minimumKiwiVersion: "1.1.0",

	/**
	* Other plugins required for this plugin to run. 
	* @property pluginDependencies
	* @type Array
	* @public
	*/
	pluginDependencies: [
		{
			name: "ParticlesGL",
			minimumVersion: "1.1.2"
		}

	]

};

/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register( Kiwi.Plugins.ParticlePack2 );
