import { CANVAS_SIZE } from './constants.js';
import { renderApp } from './renderApp.js';

const app = new PIXI.Application(CANVAS_SIZE);
document.body.appendChild(app.view);

renderApp(app);
