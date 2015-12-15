function getParameterByName( name ) {
	name = name.replace( /[\[]/, "\\[" ).replace( /[\]]/, "\\]" );
	var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)" ),
		results = regex.exec( location.search );
	return results == null ?
		"" :
		decodeURIComponent( results[ 1 ].replace( /\+/g, " " ) );
}

var selectEffect = document.getElementById( "selectEffect" );
selectEffect.value = getParameterByName( "name" ) || "explosiveflashblue";

var looping = document.getElementById( "looping" );
looping.value = getParameterByName( "looping" ) || "loopAndPause";

var go = document.getElementById( "go" );
go.onclick = function( e ) {
	console.log( selectEffect.value );
	console.log( looping.value );
	window.location = window.location.origin +
		window.location.pathname + "?name=" + selectEffect.value +
		"&looping=" + looping.value;
};

var MyState = new Kiwi.State( "myState" );

var MyGame = new Kiwi.Game( "exampleGameContainer", "testGame", MyState,
	{ renderer: Kiwi.RENDERER_WEBGL,
	plugins: [ "ParticlePack2", "ParticlesGL" ] } );

MyState.preload = function() {
	this.game.stage.color = "000000";
	this.addSpriteSheet(
		"particlePack2SpriteSheet",
		"../assets/particlepack2_128.png",
		128, 128, false, 24, 5, 5, 27, 27, 54, 54 );
};

MyState.create = function() {
	this.explosiveflashblue =
		Kiwi.Plugins.ParticlePack2.Explosiveflashblue( this, 400, 300 );
	this.flamethrowerblue =
		Kiwi.Plugins.ParticlePack2.Flamethrowerblue( this, 400, 300 );
	this.laserflashblue =
		Kiwi.Plugins.ParticlePack2.Laserflashblue( this, 400, 300 );
	this.machinegunflashblue =
		Kiwi.Plugins.ParticlePack2.Machinegunflashblue( this, 400, 300 );
	this.pistolflashblue =
		Kiwi.Plugins.ParticlePack2.Pistolflashblue( this, 400, 300 );
	this.rifleflashblue =
		Kiwi.Plugins.ParticlePack2.Rifleflashblue( this, 400, 300 );
	this.shotgunflashblue =
		Kiwi.Plugins.ParticlePack2.Shotgunflashblue( this, 400, 300 );
	this.sniperflashblue =
		Kiwi.Plugins.ParticlePack2.Sniperflashblue( this, 400, 300 );

	this.explosiveflashgreen =
		Kiwi.Plugins.ParticlePack2.Explosiveflashgreen( this, 400, 300 );
	this.flamethrowergreen =
		Kiwi.Plugins.ParticlePack2.Flamethrowergreen( this, 400, 300 );
	this.laserflashgreen =
		Kiwi.Plugins.ParticlePack2.Laserflashgreen( this, 400, 300 );
	this.machinegunflashgreen =
		Kiwi.Plugins.ParticlePack2.Machinegunflashgreen( this, 400, 300 );
	this.pistolflashgreen =
		Kiwi.Plugins.ParticlePack2.Pistolflashgreen( this, 400, 300 );
	this.rifleflashgreen =
		Kiwi.Plugins.ParticlePack2.Rifleflashgreen( this, 400, 300 );
	this.shotgunflashgreen =
		Kiwi.Plugins.ParticlePack2.Shotgunflashgreen( this, 400, 300 );
	this.sniperflashgreen =
		Kiwi.Plugins.ParticlePack2.Sniperflashgreen( this, 400, 300 );

	this.explosiveflashorange =
		Kiwi.Plugins.ParticlePack2.Explosiveflashorange( this, 400, 300 );
	this.flamethrowerorange =
		Kiwi.Plugins.ParticlePack2.Flamethrowerorange( this, 400, 300 );
	this.laserflashorange =
		Kiwi.Plugins.ParticlePack2.Laserflashorange( this, 400, 300 );
	this.machinegunflashorange =
		Kiwi.Plugins.ParticlePack2.Machinegunflashorange( this, 400, 300 );
	this.pistolflashorange =
		Kiwi.Plugins.ParticlePack2.Pistolflashorange( this, 400, 300 );
	this.rifleflashorange =
		Kiwi.Plugins.ParticlePack2.Rifleflashorange( this, 400, 300 );
	this.shotgunflashorange =
		Kiwi.Plugins.ParticlePack2.Shotgunflashorange( this, 400, 300 );
	this.sniperflashorange =
		Kiwi.Plugins.ParticlePack2.Sniperflashorange( this, 400, 300 );

	this.explosiveflashpurple =
		Kiwi.Plugins.ParticlePack2.Explosiveflashpurple( this, 400, 300 );
	this.flamethrowerpurple =
		Kiwi.Plugins.ParticlePack2.Flamethrowerpurple( this, 400, 300 );
	this.laserflashpurple =
		Kiwi.Plugins.ParticlePack2.Laserflashpurple( this, 400, 300 );
	this.machinegunflashpurple =
		Kiwi.Plugins.ParticlePack2.Machinegunflashpurple( this, 400, 300 );
	this.pistolflashpurple =
		Kiwi.Plugins.ParticlePack2.Pistolflashpurple( this, 400, 300 );
	this.rifleflashpurple =
		Kiwi.Plugins.ParticlePack2.Rifleflashpurple( this, 400, 300 );
	this.shotgunflashpurple =
		Kiwi.Plugins.ParticlePack2.Shotgunflashpurple( this, 400, 300 );
	this.sniperflashpurple =
		Kiwi.Plugins.ParticlePack2.Sniperflashpurple( this, 400, 300 );

	this.explosiveflashred =
		Kiwi.Plugins.ParticlePack2.Explosiveflashred( this, 400, 300 );
	this.flamethrowerred =
		Kiwi.Plugins.ParticlePack2.Flamethrowerred( this, 400, 300 );
	this.laserflashred =
		Kiwi.Plugins.ParticlePack2.Laserflashred( this, 400, 300 );
	this.machinegunflashred =
		Kiwi.Plugins.ParticlePack2.Machinegunflashred( this, 400, 300 );
	this.pistolflashred =
		Kiwi.Plugins.ParticlePack2.Pistolflashred( this, 400, 300 );
	this.rifleflashred =
		Kiwi.Plugins.ParticlePack2.Rifleflashred( this, 400, 300 );
	this.shotgunflashred =
		Kiwi.Plugins.ParticlePack2.Shotgunflashred( this, 400, 300 );
	this.sniperflashred =
		Kiwi.Plugins.ParticlePack2.Sniperflashred( this, 400, 300 );

	this.explosiveflashyellow =
		Kiwi.Plugins.ParticlePack2.Explosiveflashyellow( this, 400, 300 );
	this.flamethroweryellow =
		Kiwi.Plugins.ParticlePack2.Flamethroweryellow( this, 400, 300 );
	this.laserflashyellow =
		Kiwi.Plugins.ParticlePack2.Laserflashyellow( this, 400, 300 );
	this.machinegunflashyellow =
		Kiwi.Plugins.ParticlePack2.Machinegunflashyellow( this, 400, 300 );
	this.pistolflashyellow =
		Kiwi.Plugins.ParticlePack2.Pistolflashyellow( this, 400, 300 );
	this.rifleflashyellow =
		Kiwi.Plugins.ParticlePack2.Rifleflashyellow( this, 400, 300 );
	this.shotgunflashyellow =
		Kiwi.Plugins.ParticlePack2.Shotgunflashyellow( this, 400, 300 );
	this.sniperflashyellow =
		Kiwi.Plugins.ParticlePack2.Sniperflashyellow( this, 400, 300 );


	var effectName = getParameterByName( "name" ) || "explosiveflashblue";
	var effect = this[ effectName ];
	var looping = getParameterByName( "looping" ) || "loopAndPause";

	this.addChild( effect );


	function start() {

		if ( effect.childType() === Kiwi.GROUP ) {
			for ( var i = 0; i < effect.members.length; i++ ) {
				console.log( i );
				switch ( looping ) {
					case "once" :
						effect.members[ i ].startEmitting( false );
						break;
					case "continuous" :
						effect.members[ i ].startEmitting();
						break;
					case "loopAndPause" :
						effect.members[ i ].startEmitting( false, false );
						break;
				}
			}

		} else {
			switch ( looping ) {
				case "once" :
					effect.startEmitting( false );
					break;
				case "continuous" :
					effect.startEmitting();
					break;
				case "loopAndPause" :
					effect.startEmitting( false, false );
					break;
			}
		}
	}

	start();
	if ( looping === "loopAndPause" ) {
		setInterval( start, 400 );
	}
};
