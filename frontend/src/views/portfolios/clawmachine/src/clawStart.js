////////////////////////////////////////////////////////////////////////////////

/* COMP 3490 A1 Skeleton for Claw Machine (Barebones Edition)
* Note that you may make use of the skeleton provided, or start from scratch.
* The choice is up to you.
* Read the assignment directions carefully
* Your claw mechanism should be created such that it is represented hierarchically
* You might consider looking at THREE.Group and THREE.Object3D for reference
* If you want to play around with the canvas position, or other HTML/JS level constructs
* you are welcome to do so.


/*global variables, coordinates, clock etc.  */
var camera, scene, renderer;
var cameraControls;
var view = "generic";

var keyboard = new KeyboardState();
var loader = new THREE.FontLoader();

var joystickG = new THREE.Object3D();
var buttonG = new THREE.Object3D();

var frameStructG = new THREE.Object3D();
var bottomStructG = new THREE.Object3D();
var wireObject = new THREE.Object3D();
var clawBallObject = new THREE.Object3D();

var clawLegG1 = new THREE.Object3D();
var clawLegG2 = new THREE.Object3D();
var clawLegG3 = new THREE.Object3D();
var clawLegG4 = new THREE.Object3D();
var clawLegsG = new THREE.Object3D();

var clawMovingDown = false;
var hitsBottom = false;
var motionDone = false;

var physicsWorld;

var clock = new THREE.Clock();

// 'user strict';
//
// Physijs.scripts.worker = 'js/physijs_worker.js';
// Physijs.scripts.ammo = 'js/ammo.js';

function fillScene()
{
	scene = new THREE.Scene();
	// scene = new Physijs.Scene();
	scene.fog = new THREE.Fog( 0x808080, 2000, 4000 );

	// Some basic default lighting - in A2 complexity will be added

	scene.add( new THREE.AmbientLight(0x222222) );

	var light = new THREE.DirectionalLight( 0xffffff, 0.7 );
	light.position.set( 200, 500, 500 );

	scene.add( light );

	light = new THREE.DirectionalLight( 0xffffff, 0.9 );
	light.position.set( -200, -100, -400 );

	scene.add( light );

	//-------------------------------spot light-------------------------------//

	// first light in the claw machine
	light = new THREE.SpotLight( 0xffffff, 1.5, 800, 0.3, 0.25, 1.5 );
	light.position.set( -140, 800, -140 );

	light.castShadow = true;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;

	light.shadow.camera.near = 500;
	light.shadow.camera.far = 4000;
	light.shadow.camera.fov = 30;

	scene.add( light );

	// second light in the claw machine
	light = new THREE.SpotLight( 0xffffff, 1.5, 800, 0.3, 0.25, 1.5 );
	light.position.set( 140, 800, -140 );

	light.castShadow = true;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;

	light.shadow.camera.near = 500;
	light.shadow.camera.far = 4000;
	light.shadow.camera.fov = 30;

	scene.add( light );

	// fancier lighting
	light = new THREE.SpotLight( 0xffffff, 1.7, 1500, 0.5, 0.55, 1.7 );
	light.position.set( 450, 800, 450 );

	light.castShadow = true;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;

	light.shadow.camera.near = 500;
	light.shadow.camera.far = 4000;
	light.shadow.camera.fov = 30;

	scene.add( light );

	//------------------------------------------------------------------------//

	// A simple grid floor, the variables hint at the plane that this lies within
	// Later on we might install new flooring.
	var gridXZ = new THREE.GridHelper( 1000, 100, new THREE.Color(0xCCCCCC), new THREE.Color(0x888888) );
	scene.add(gridXZ);

	var glossyMaterial = new THREE.MeshStandardMaterial({
		color: 0x6d6b6b,
		emissive: 0x727272
	});

	var glossyFloor = new THREE.Mesh( new THREE.PlaneGeometry(2000, 2000, 32), glossyMaterial );
	glossyFloor.rotateX( -Math.PI/2 );
	scene.add( glossyFloor );

	var wallMaterial = new THREE.MeshLambertMaterial({
		color: 0x89e3ff
	});

	var wall = new THREE.Mesh( new THREE.PlaneGeometry(2000, 1000, 32), wallMaterial );
	wall.rotateX( Math.PI );
	wall.position.set(0, 500, 1000);
	scene.add( wall );

	var wall = new THREE.Mesh( new THREE.PlaneGeometry(2000, 1000, 32), wallMaterial );
	wall.rotateY( -Math.PI/2 );
	wall.position.set(1000, 500, 0);
	scene.add( wall );

	var wall = new THREE.Mesh( new THREE.PlaneGeometry(2000, 1000, 32), wallMaterial );
	wall.rotateY( Math.PI/2 );
	wall.position.set(-1000, 500, 0);
	scene.add( wall );

	//Visualize the Axes - Useful for debugging, can turn this off if desired
	var axes = new THREE.AxisHelper(150);
	axes.position.y = 1;
	scene.add(axes);

	drawClawMachine();
}

function drawClawMachine()
{
	// This is where the model gets created. Add the appropriate geometry to create your machine
	// You are not limited to using BoxGeometry, and likely want to use other types of geometry for pieces of your submission
	// Note that the actual shape, size and other factors are up to you, provided constraints listed in the assignment description are met

	drawMachineBody();
	drawClaw();
	// drawObjects();
}

function drawMachineBody()
{
	var base, bump, roof, stand, coinSlot, glass, sign;
	var consoleTable, stick, topBall, botBall, button, ring;
	var bodyG = new THREE.Group();

	// texture
	var bodyTexture = new THREE.ImageUtils.loadTexture( "textures/Christmas_wallpapers_in_red_2_s.jpg" );
	bodyTexture.wrapS = THREE.RepeatWrapping;
	bodyTexture.wrapT = THREE.RepeatWrapping;
	bodyTexture.repeat.set( 1.2, 2 );

	var bodyMaterial = new THREE.MeshPhongMaterial({
		map: bodyTexture
	});
	bodyMaterial.color.setRGB(0.5, 0.5, 0.5);

	var glassMaterial = new THREE.MeshLambertMaterial({
		color: 0xfcceff,
		// envMap: refractionCube,
		refractionRatio: 0.5,
		opacity: 0.3,
		transparent: true
	});

	var glowMaterial_silver = new THREE.MeshStandardMaterial({
		color: 0x353638,
		emissive: 0x919499
	})

	var bodyMaterial_red = new THREE.MeshLambertMaterial();
	bodyMaterial_red.color.set(0xef0b0b);

	var bodyMaterial_yellow = new THREE.MeshLambertMaterial();
	bodyMaterial_yellow.color.set(0xf4fc0f);

	var glowMaterial_red = new THREE.MeshStandardMaterial({
		color: 0xff0000,
		emissive: 0xff1900
	});

	base = new THREE.Mesh( new THREE.BoxGeometry(300, 400, 200), bodyMaterial );
	base.position.set(0, 200, 50);
	bodyG.add(base);

	base = new THREE.Mesh( new THREE.BoxGeometry(200, 400, 100), bodyMaterial );
	base.position.set(-50, 200, -100);
	bodyG.add(base);

	base = new THREE.Mesh( new THREE.BoxGeometry(25, 400, 100), bodyMaterial );
	base.position.set(137.5, 200, -100);
	bodyG.add(base);

	base = new THREE.Mesh( new THREE.BoxGeometry(75, 200, 100), bodyMaterial );
	base.position.set(87.5, 100, -100);
	bodyG.add(base);

	base = new THREE.Mesh( new THREE.BoxGeometry(75, 100, 25), bodyMaterial );
	base.position.set(87.5, 350, -137.5);
	bodyG.add(base);

	//--------------------------------- bump ----------------------------------//
	bump = new THREE.Mesh( new THREE.BoxGeometry(75, 10, 5), bodyMaterial );
	bump.position.set(87.5, 205, -147.5);
	bodyG.add(bump);

	bump = new THREE.Mesh( new THREE.BoxGeometry(5, 10, 75), bodyMaterial );
	bump.position.set(47.5, 405, -87.5);
	bodyG.add(bump);

	bump = new THREE.Mesh( new THREE.BoxGeometry(5, 10, 75), bodyMaterial );
	bump.position.set(127.5, 405, -87.5);
	bodyG.add(bump);

	bump = new THREE.Mesh( new THREE.BoxGeometry(80, 10, 5), bodyMaterial );
	bump.position.set(85, 405, -127.5);
	bodyG.add(bump);

	base = new THREE.Mesh( new THREE.BoxGeometry(85, 10, 5), bodyMaterial );
	base.position.set(87.5, 405, -47.5);
	bodyG.add(base);

	//--------------------------------- stand ---------------------------------//
	stand = new THREE.Mesh( new THREE.BoxGeometry(25, 400, 25), bodyMaterial );
	stand.position.set(-137.5, 600, -137.5);
	bodyG.add(stand);

	stand = new THREE.Mesh( new THREE.BoxGeometry(25, 400, 25), bodyMaterial );
	stand.position.set(137.5, 600, 137.5);
	bodyG.add(stand);

	stand = new THREE.Mesh( new THREE.BoxGeometry(25, 400, 25), bodyMaterial );
	stand.position.set(137.5, 600, -137.5);
	bodyG.add(stand);

	stand = new THREE.Mesh( new THREE.BoxGeometry(25, 400, 25), bodyMaterial );
	stand.position.set(-137.5, 600, 137.5);
	bodyG.add(stand);

	//--------------------------------- glass ---------------------------------//
	glass = new THREE.Mesh( new THREE.BoxGeometry(250, 400, 5), glassMaterial );
	glass.position.set(0, 600, -147.5);
	bodyG.add(glass);

	glass = new THREE.Mesh( new THREE.BoxGeometry(250, 400, 5), glassMaterial );
	glass.position.set(0, 600, 147.5);
	bodyG.add(glass);

	glass = new THREE.Mesh( new THREE.BoxGeometry(5, 400, 250), glassMaterial );
	glass.position.set(147.5, 600, 0);
	bodyG.add(glass);

	glass = new THREE.Mesh( new THREE.BoxGeometry(5, 400, 250), glassMaterial );
	glass.position.set(-147.5, 600, 0);
	bodyG.add(glass);

	roof = new THREE.Mesh( new THREE.BoxGeometry(300, 50, 300), bodyMaterial );
	roof.position.set(0, 825, 0);
	bodyG.add(roof);

	coinSlot = new THREE.Mesh( new THREE.BoxGeometry(6,3,2), glowMaterial_silver );
	coinSlot.position.set(-80, 300, -152);
	bodyG.add(coinSlot);

	coinSlot = new THREE.Mesh( new THREE.BoxGeometry(6,3,2), glowMaterial_silver );
	coinSlot.position.set(-80, 280, -152);
	bodyG.add(coinSlot);

	coinSlot = new THREE.Mesh( new THREE.BoxGeometry(3,23,2), glowMaterial_silver );
	coinSlot.position.set(-76, 290, -152);
	bodyG.add(coinSlot);

	coinSlot = new THREE.Mesh( new THREE.BoxGeometry(3,23,2), glowMaterial_silver );
	coinSlot.position.set(-84, 290, -152);
	bodyG.add(coinSlot);

	//--------------------------------- sign ----------------------------------//

	var loader = new THREE.FontLoader();

	loader.load( 'fonts/helvetiker_bold.typeface.json', function( font ) {

		var textGeometry = new THREE.TextGeometry( "Santa Claw", {
			font: font,
			size: 40,
			height: 5,
			curveSegments: 12,
			bevelThickness: 10,
			bevelSize: 8,
			bevelSegments: 5,
			bevelEnabled: true
		});
		textGeometry.computeBoundingBox();
		textGeometry.computeVertexNormals();

		var textMaterial = new THREE.MeshPhongMaterial({
			color: 0xb2c7e8,
			specular: 0xffffff,
			shininess: 80,
			emissive: 0x870064
		})
		var textMesh = new THREE.Mesh( textGeometry, textMaterial );
		textMesh.rotation.y = Math.PI;
		textMesh.position.set( 150, 820, -160 );
		scene.add(textMesh);
	});

	//-------------------------------------------------------------------------//

	scene.add(bodyG);

	//------------------------------- console ---------------------------------//

	consoleTable = new THREE.Mesh( new THREE.BoxGeometry(100, 20, 50), bodyMaterial );
	consoleTable.position.set(-50, 350, -175);
	scene.add(consoleTable);

	botBall = new THREE.Mesh( new THREE.SphereGeometry( 7.5, 32, 32 ), bodyMaterial_red );
	botBall.position.y = 4;
	joystickG.add(botBall);

	stick = new THREE.Mesh( new THREE.CylinderGeometry( 4, 4, 23, 16 ), bodyMaterial_yellow );
	stick.position.y = botBall.position.y+15;
	joystickG.add(stick);

	topBall = new THREE.Mesh( new THREE.SphereGeometry( 7, 32, 32 ), bodyMaterial_red );
	topBall.position.y = stick.position.y+15;
	joystickG.add(topBall);

	joystickG.position.set( -30, 353.5, -175);

	scene.add(joystickG);

	button = new THREE.Mesh( new THREE.SphereGeometry(13, 32, 32), glowMaterial_red );
	buttonG.add(button);

	ring = new THREE.Mesh( new THREE.CylinderGeometry(11.5, 11.5, 3, 32), bodyMaterial );
	ring.position.y = button.position.y + 8;
	buttonG.add(ring);

	buttonG.position.set(-70, 353.5, -175);
	scene.add(buttonG);
}

function drawClaw()
{
	// Some simple material definitions - This may become more complex in A2
	var bodyMaterial = new THREE.MeshPhongMaterial();
	bodyMaterial.color.setRGB(0.5, 0.5, 0.5);

	var clawLegMaterial_red = new THREE.MeshPhongMaterial();
	clawLegMaterial_red.color.set(0xef0b0b);

	var clawLegMaterial_orange = new THREE.MeshPhongMaterial();
	clawLegMaterial_orange.color.set(0xed7728);

	var railFrame, barZ, unitBox, clawBall;
	var wire, clawLeg, clawJoint;

	//------------------------------ rail frame -------------------------------//

	railframe = new THREE.Mesh( new THREE.BoxGeometry(5, 5, 230), bodyMaterial );
	railframe.position.set(117.5, 797.5, 0);
	scene.add(railframe);

	railframe = new THREE.Mesh( new THREE.BoxGeometry(5, 5, 230), bodyMaterial );
	railframe.position.set(-117.5, 797.5, 0);
	scene.add(railframe);var wire, clawLeg, clawJoint;

	railframe = new THREE.Mesh( new THREE.BoxGeometry(230, 5, 5), bodyMaterial );
	railframe.position.set(0, 797.5, 117.5);
	scene.add(railframe);

	railframe = new THREE.Mesh( new THREE.BoxGeometry(230, 5, 5), bodyMaterial );
	railframe.position.set(0, 797.5, -117.5);
	scene.add(railframe);

	//----------------------------- fram structure ----------------------------//

	barZ = new THREE.Mesh( new THREE.BoxGeometry(240, 5, 5), bodyMaterial );
	barZ.position.set(0, 792.5, 0);
	frameStructG.add(barZ);

	unitBox = new THREE.Mesh( new THREE.BoxGeometry(40, 7, 7), bodyMaterial );
	unitBox.position.set(0, 792.5, 0);
	bottomStructG.add(unitBox);

	wire = new THREE.Mesh( new THREE.CylinderGeometry(0.7, 0.7, 200, 32), bodyMaterial );
	wireObject.add(wire);

	wireObject.position.set(0, 690, 0);

	clawBall = new THREE.Mesh( new THREE.SphereGeometry(7, 32, 32), clawLegMaterial_red );
	clawBall.position.y = wireObject.position.y - 100;
	clawBallObject.add(clawBall);

	bottomStructG.add(clawBallObject);
	bottomStructG.add(wireObject);

	//----------------------------- claw structure ----------------------------//

	var legPartsG1 = new THREE.Object3D();
	var legPartsG2 = new THREE.Object3D();
	var legPartsG3 = new THREE.Object3D();
	var legPartsG4 = new THREE.Object3D();

	var legG1 = new THREE.Object3D();
	var legG2 = new THREE.Object3D();
	var legG3 = new THREE.Object3D();
	var legG4 = new THREE.Object3D();

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(2.5, 2.5, 23, 16), clawLegMaterial_orange );
	legPartsG1.add(clawLeg);

	clawJoint = new THREE.Mesh( new THREE.SphereGeometry(5, 32, 32), clawLegMaterial_red );
	clawJoint.position.y = -15;
	legPartsG1.add(clawJoint);

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(3, 0.5, 23, 16), clawLegMaterial_orange );
	clawLeg.position.y = -20;
	clawLeg.position.z = clawJoint.position.z + 10;
	clawLeg.rotation.x = -Math.PI/3;
	legPartsG1.add(clawLeg);

	legPartsG1.position.z = -10;
	legPartsG1.rotation.x = Math.PI/5;
	legG1.add(legPartsG1);

	clawLegG1.position.y = 580;
	clawLegG1.add(legG1);
	clawLegsG.add(clawLegG1);

	/////////////////

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(2.5, 2.5, 23, 16), clawLegMaterial_orange );
	legPartsG2.add(clawLeg);

	clawJoint = new THREE.Mesh( new THREE.SphereGeometry(5, 32, 32), clawLegMaterial_red );
	clawJoint.position.y = -15;
	legPartsG2.add(clawJoint);

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(3, 0.5, 23, 16), clawLegMaterial_orange );
	clawLeg.position.y = -20;
	clawLeg.position.z = clawJoint.position.z + 10;
	clawLeg.rotation.x = -Math.PI/3;
	legPartsG2.add(clawLeg);

	legPartsG2.position.z = -10;
	legPartsG2.rotation.x = Math.PI/5;
	legG2.add(legPartsG2);

	legG2.rotation.y = Math.PI/2 * 3;

	clawLegG2.position.y = 580;
	clawLegG2.add(legG2);
	clawLegsG.add(clawLegG2);

	///////////////////

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(2.5, 2.5, 23, 16), clawLegMaterial_orange );
	legPartsG3.add(clawLeg);

	clawJoint = new THREE.Mesh( new THREE.SphereGeometry(5, 32, 32), clawLegMaterial_red );
	clawJoint.position.y = -15;
	legPartsG3.add(clawJoint);

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(3, 0.5, 23, 16), clawLegMaterial_orange );
	clawLeg.position.y = -20;
	clawLeg.position.z = clawJoint.position.z + 10;
	clawLeg.rotation.x = -Math.PI/3;
	legPartsG3.add(clawLeg);

	legPartsG3.position.z = -10;
	legPartsG3.rotation.x = Math.PI/5;
	legG3.add(legPartsG3);

	legG3.rotation.y = Math.PI/2;

	clawLegG3.position.y = 580;
	clawLegG3.add(legG3);
	clawLegsG.add(clawLegG3);

	///////////////////

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(2.5, 2.5, 23, 16), clawLegMaterial_orange );
	legPartsG4.add(clawLeg);

	clawJoint = new THREE.Mesh( new THREE.SphereGeometry(5, 32, 32), clawLegMaterial_red );
	clawJoint.position.y = -15;
	legPartsG4.add(clawJoint);

	clawLeg = new THREE.Mesh( new THREE.CylinderGeometry(3, 0.5, 23, 16), clawLegMaterial_orange );
	clawLeg.position.y = -20;
	clawLeg.position.z = clawJoint.position.z + 10;
	clawLeg.rotation.x = -Math.PI/3;
	legPartsG4.add(clawLeg);

	legPartsG4.position.z = -10;
	legPartsG4.rotation.x = Math.PI/5;
	legG4.add(legPartsG4);

	legG4.rotation.y = Math.PI;

	clawLegG4.position.y = 580;
	clawLegG4.add(legG4);
	clawLegsG.add(clawLegG4);

	//-------------------------------------------------------------------------//

	bottomStructG.add(clawLegsG);
	frameStructG.add(bottomStructG);

	scene.add(frameStructG);
}

function drawObjects()
{

}

function keyState()
{
	keyboard.update();

	if ( keyboard.down("V") )
	{
		if ( view == "generic" )
		{
			camera.position.set( 0, 530, -400 );
			cameraControls.target.set( 0, 350, 150 );
			view = "egocentric"
		}
		else if ( view == "egocentric")
		{
			camera.position.set( -800, 600, -500 );
			cameraControls.target.set( 4, 301, 92 );
			view = "generic";
		}
	}

	//-------------------space--------------------//
	if ( keyboard.pressed("space") )
	{
		buttonG.position.y = 352;
	}

	if ( keyboard.down("space") )
		clawMovingDown = true;

	if ( keyboard.up("space") )
		buttonG.position.y = 353.5;

	if ( clawMovingDown == true )
	{
		if (wireObject.position.y > 620)
		{
			wireObject.scale.y += 0.01;
			wireObject.translateY(-1);
			clawBallObject.translateY(-2);
			clawLegsG.translateY(-2);
		}
		else if ( wireObject.position.y == 620 )
		{
			clawMovingDown = false;
			hitsBottom = true;

			clawLegG1.rotation.x -= 0.3;
			clawLegG2.rotation.z -= 0.3;
			clawLegG3.rotation.z += 0.3;
			clawLegG4.rotation.x += 0.3;
		}
	}

	if ( hitsBottom == true )
	{
		if (wireObject.position.y < 690)
		{
			wireObject.scale.y -= 0.01;
			wireObject.translateY(+1);
			clawBallObject.translateY(+2);
			clawLegsG.translateY(+2);
		}
		else if ( wireObject.position.y == 690)
		{
			hitsBottom = false;

			clawLegG1.rotation.x += 0.3;
			clawLegG2.rotation.z += 0.3;
			clawLegG3.rotation.z -= 0.3;
			clawLegG4.rotation.x -= 0.3;
		}
	}
	//--------------------left--------------------//
	if ( keyboard.pressed("left") )
	{
		if ( bottomStructG.position.x < 100 )
			bottomStructG.translateX(1);
	}
	if ( keyboard.down("left") )
		joystickG.rotateZ( -Math.PI/6 );

	if ( keyboard.up("left") )
		joystickG.rotateZ( +Math.PI/6 );

	//-------------------right--------------------//
	if ( keyboard.pressed("right") )
	{
		if ( bottomStructG.position.x > -100 )
			bottomStructG.translateX(-1);
	}
	if ( keyboard.down("right") )
		joystickG.rotateZ( +Math.PI/6 );
	if ( keyboard.up("right") )
		joystickG.rotateZ( -Math.PI/6 );

	//---------------------up---------------------//
	if ( keyboard.pressed("up") )
	{
		if ( frameStructG.position.z < 115 )
			frameStructG.translateZ(1);
	}
	if ( keyboard.down("up") )
		joystickG.rotateX( Math.PI/6 );
	if ( keyboard.up("up") )
		joystickG.rotateX( -Math.PI/6 );

	//--------------------down--------------------//
	if ( keyboard.pressed("down") )
	{
		if ( frameStructG.position.z > -115 )
			frameStructG.translateZ(-1);
	}
	if ( keyboard.down("down") )
		joystickG.rotateX( -Math.PI/6 );
	if ( keyboard.up("down") )
		joystickG.rotateX( Math.PI/6 );
	//--------------------------------------------//
}

// Initialization. Define the size of the canvas and store the aspect ratio
// You can change these as well

function init()
{
	var canvasWidth = 1280;
	var canvasHeight = 720;
	var canvasRatio = canvasWidth / canvasHeight;

	// Set up a renderer. This will allow WebGL to make your scene appear
	renderer = new THREE.WebGLRenderer( { antialias: true } );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	// You also want a camera. The camera has a default position, but you most likely want to change this.
	// You'll also want to allow a viewpoint that is reminiscent of using the machine as described in the pdf
	// This might include a different position and/or a different field of view etc.
	camera = new THREE.PerspectiveCamera( 45, canvasRatio, 1, 4000 );
	// Moving the camera with the mouse is simple enough - so this is provided. However, note that by default,
	// the keyboard moves the viewpoint as well
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	camera.position.set( -800, 600, -500 );
	cameraControls.target.set( 4, 301, 92 );

	cameraControls.keys = false;

	window.addEventListener("keydown", function(e) {
		// space and arrow keys
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);

}

// We want our document object model (a javascript / HTML construct) to include our canvas
// These allow for easy integration of webGL and HTML
function addToDOM()
{
	var canvas = document.getElementById('canvas');
	canvas.appendChild(renderer.domElement);
}

// This is a browser callback for repainting
// Since you might change view, or move things
// We cant to update what appears
function animate()
{
	window.requestAnimationFrame(animate);
	render();
}

// getDelta comes from THREE.js - this tells how much time passed since this was last called
// This might be useful if time is needed to make things appear smooth, in any animation, or calculation
// The following function stores this, and also renders the scene based on the defined scene and camera
function render()
{
	var delta = clock.getDelta();
	cameraControls.update(delta);

	keyState();
	// scene.simulate();

	renderer.render( scene, camera );
}

// Since we're such talented programmers, we include some exception handeling in case we break something
// a try and catch accomplished this as it often does
// The sequence below includes initialization, filling up the scene, adding this to the DOM, and animating (updating what appears)
try {
	init();
	fillScene();
	addToDOM();
	animate();
} catch(error) {
	console.log("You did something bordering on utter madness. Error was:");
	console.log(error);
}
