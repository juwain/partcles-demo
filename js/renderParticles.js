export const renderParticles = (app) => {
  const emitter = new PIXI.particles.Emitter(
    // The PIXI.Container to put the emitter in
    app.stage,

    // The collection of particle images to use
    [PIXI.Texture.fromImage('assets/heart.png')],

    // Emitter configuration
    {
      alpha: {
        start: 1,
        end: 0.2
      },
      scale: {
        start: 0.6,
        end: 1,
        minimumScaleMultiplier: 0.7
      },
      color: {
        start: '#0069cc',
        end: '#ff00d5'
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
        min: 3,
        max: 5
      },
      blendMode: 'normal',
      frequency: 0.03,
      emitterLifetime: 1.5,
      maxParticles: 300,
      pos: {
        x: app.screen.width / 2,
        y: app.screen.height / 2
      },
      addAtBack: true,
      spawnType: 'rect',
      spawnRect: {
        x: -75,
        y: 150,
        w: 150,
        h: 0
      }
    }
  );

  // Calculate the current time
  let elapsed = Date.now();

  // Update function every frame
  const update = () => {
    // Update the next frame
    requestAnimationFrame(update);

    const now = Date.now();

    // The emitter requires the elapsed
    // number of seconds since the last update
    emitter.update((now - elapsed) * 0.001);
    elapsed = now;
  };

  // Start emitting
  emitter.emit = true;

  // Start the update
  update();
}
