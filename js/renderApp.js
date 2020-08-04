import { renderUI } from './renderUI.js';
import { renderParticles } from './renderParticles.js';

export const renderApp = (app) => {
  renderUI(app);
  renderParticles(app);
}
