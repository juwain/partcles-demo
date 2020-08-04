import { CANVAS_SIZE } from './constants.js';
import { data } from './data.js';
import { createRenderObjectFromData } from './render.js';

const renderData = () => {
  const objects = createRenderObjectFromData(data);
  objects.forEach(obj => app.stage.addChild(obj));
}

const app = new PIXI.Application(CANVAS_SIZE);
document.body.appendChild(app.view);

renderData();

const emitter = new PIXI.particles.Emitter(
	// The PIXI.Container to put the emitter in
	// if using blend modes, it's important to put this
	// on top of a bitmap, and not use the root stage Container
	app.stage,

	// The collection of particle images to use
	[PIXI.Texture.fromImage('assets/heart.png')],

	// Emitter configuration, edit this to change the look
	// of the emitter
	{
    alpha: {
      start: 1,
      end: 0
    },
    scale: {
      start: 0.6,
      end: 1,
      minimumScaleMultiplier: 0.7
    },
    color: {
      start: "#0069cc",
      end: "#ff00d5"
    },
    speed: {
      start: 220,
      end: 2500,
      minimumSpeedMultiplier: 0.7
    },
    acceleration: {
      x: -100,
      y: -50
    },
    maxSpeed: 1000,
    startRotation: {
      min: 300,
      max: 300
    },
    noRotation: true,
    rotationSpeed: {
      min: 0,
      max: 0
    },
    lifetime: {
      min: 2,
      max: 5
    },
    blendMode: "normal",
    frequency: 0.03,
    emitterLifetime: 1.5,
    maxParticles: 300,
    pos: {
      x: app.screen.width / 2,
      y: app.screen.height / 2
    },
    addAtBack: true,
    spawnType: "rect",
    spawnRect: {
      x: -75,
      y: 100,
      w: 150,
      h: 0
    }
  }
);

// Calculate the current time
var elapsed = Date.now();

// Update function every frame
var update = function(){

	// Update the next frame
	requestAnimationFrame(update);

	var now = Date.now();

	// The emitter requires the elapsed
	// number of seconds since the last update
	emitter.update((now - elapsed) * 0.001);
	elapsed = now;

	// Should re-render the PIXI Stage
	// renderer.render(stage);
};

// Start emitting
emitter.emit = true;

// Start the update
update();

export { app };