WebGL Particles Pack 2 - Gunflare Particles
=======================================
-------------------------------------

Name: ParticlesPack2

Version: 1.0.0

Type: GameObject Plugin

Author: Kiwi.js Team

Website: www.kiwijs.org

KiwiJS last version tested: 0.7.0

Tutorials for this plugin can be found on the Kiwi.JS website here:

[Using the ParticlesGL Plugin](UPDATE ME)


##Version Release Notes
--------------------------------------------------------------------------
1.0.0
  - First Release ready for Kiwi.js version 1.0.0


##Description:
----------------------------------------------------------------------------------------
The Gunflares Particle Pack plugin comes with a bunch of preconfigured particle effects to add to your game.
This plugin requires the ParticlesGL plugin, which is included with the pack. 
If you have any problems then feel free to contact us via the http://www.kiwijs.org/help


##Dependencies
----------------------------------------------------------------------------------------
- Kiwi.js version 1.0.0 or greater
- ParticlesGL version 1.0.0 or greater

##How to Include: 
----------------------------------------------------------------------------------------


Copy the files you need:
- Create a folder called "plugins" in your project folder.
- Copy particlesgl.js (or particlesgl.min.js) from the "lib" folder into your plugins folder.
- Copy particlepack2.js (or particlepack2.min.js) from the root folder to your plugins folder.
- Create a folder called "assets" in your project folder.
- Copy the two particle spritesheets from the repo assets folder assets folder into your project assets folder. 

Link the files:
- Link the JavaScript files particlesgl.js and particlepack1.js (or the min versions of the files) into your HTML file. Make sure you link them underneath the link to the main Kiwi.js file AND underneath the Cocoon files if you are using Cocoon.

    <script src="plugins/particlesgl-1.0.0.js"></script>
    <script src="plugins/particlepack2-1.0.0.js"></script>

This will add ALL the particle effects to your game. If you want to add them individually then add src/_particlepack2.js to your plugin folder instead and also include the config files that you want to use, eg.

    <script src="plugins/_particlesgl.js"></script>
    <script src="plugins/particlepack1-2.0.0.js"></script>
    <script src="plugins/particles/explosiveflashblue.js></script>

Register the plugins:
You'll need to tell you game that it intends to use the plugins by adding their names to the plugin config option. Also remember that the effects only work with the WebGL renderer. 
    
    var MyGame = new Kiwi.Game("exampleGameContainer",
    "testGame",MyState,{renderer:Kiwi.RENDERER_WEBGL,plugins:["ParticlePack2","ParticlesGL"]});

##How to use
--------------------------------------------------

Check out the example found in the "examples" folder of this repository.(You'll need a webserver to view the example - tip running 'grunt serve' in the root folder will bring up a webserver on localhost:9000)
Read tha API docs found in the "docs" folder of this repository.
[Look at the tutorials on the Kiwijs.org website.](Something)

The particle pack contains a number of game objects that you can add to a state.
You'll need to add the spritesheets to your preloader which will look something like this

	MyState.preload = function() {
		this.addSpriteSheet('particlePack2SpriteSheet', 'assets/particlepack2_128.png',128, 128, true, 8, 5, 5, 27, 27, 54, 54);
		this.addSpriteSheet('particlePack2SpriteSheet_16', 'assets/particlepack2_16.png', 16, 16, true, 8, 5, 5, 4, 4, 8, 8);
	};

To create a particle effect add the following to your create function (this would add the effect to x:400,y:400)

    MyState.create = function() {
    	this.explosiveflashblue = Kiwi.Plugins.ParticlePack2.Explosiveflashblue(this,400,300);
    }

Here is a list of all available effects and example lines to create them. (There are also green, orange,purple, red and yellow versions of the same effects, only the blue ones are shown here)

Single effects (These return a single particle gameobject)

    this.flamethrowerblue = Kiwi.Plugins.ParticlePack2.Flamethrowerblue(this,400,300);
    this.shotgunflashblue = Kiwi.Plugins.ParticlePack2.Shotgunflashblue(this,400,300);
	

Group effects (These return a group of gameobjects)

    this.explosiveflashblue = Kiwi.Plugins.ParticlePack2.Explosiveflashblue(this,400,300);
    
    this.laserflashblue = Kiwi.Plugins.ParticlePack2.Laserflashblue(this,400,300);
    this.machinegunflashblue = Kiwi.Plugins.ParticlePack2.Machinegunflashblue(this,400,300);
    this.pistolflashblue = Kiwi.Plugins.ParticlePack2.Pistolflashblue(this,400,300);
    this.rifleflashblue = Kiwi.Plugins.ParticlePack2.Rifleflashblue(this,400,300);
    
    this.sniperflashblue = Kiwi.Plugins.ParticlePack2.Sniperflashblue(this,400,300);
    		

Note that some of these functions return a group of gameobjects and others return a single gameobject. Regardless you can then add it to the state like so

	this.addChild(this.flamethrowerblue);

If the effect is a single effect you can start it emitting like this
    
    this.flamethrowerblue.startEmitting();

If it's a group you'll need to start each individually - for example

    for(var i = 0; i < this.rifleflashblue.members.length; i++) {
        this.rifleflashblue.members[i].startEmitting()
    }

To fully familiarize yourself with the API for controlling particle effects, you should see the [documentation](link) and [tutorials](link) for the ParticlesGL plugin.

