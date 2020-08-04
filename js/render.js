import { OBJECT_TYPES } from './constants.js';
import { app } from './index.js';

const getObjectCoords = (params) => {
  const {
    horizontalCenter,
    verticalCenter,
    top,
    right,
    bottom,
    left
  } = params;

  let coords = {};

  if (horizontalCenter) {
    coords.x = app.screen.width / 2;
    coords.anchorX = 0.5;
  } else {
    if (left) {
      coords.x = left;
      coords.anchorX = 0;
    } else if (right) {
      coords.x = app.screen.width - right;
      coords.anchorX = 1;
    }
  }

  if (verticalCenter) {
    coords.y = app.screen.height / 2;
    coords.anchorY = 0.5;
  } else {
    if (top) {
      coords.y = top;
      coords.anchorY = 0;
    } else if (bottom) {
      coords.y = app.screen.height - bottom;
      coords.anchorY = 1;
    }
  }

  return coords;
}

const createObject = (item) => {
  switch (item.type) {
    case OBJECT_TYPES.TEXT:
      return new PIXI.Text(
        item.text,
        new PIXI.TextStyle(item.textStyle)
      );
    case OBJECT_TYPES.IMG:
      return PIXI.Sprite.from(item.path);
    default:
      throw `Undefined object type: ${item.type}`;
  }
}

export const createRenderObjectFromData = (data) => {
  return data.map(item => {
    let obj = createObject(item);
    const {x, y, anchorX, anchorY} = getObjectCoords(item);

    obj.x = x;
    obj.y = y;
    obj.anchor.set(anchorX, anchorY);

    return obj;
  });
}