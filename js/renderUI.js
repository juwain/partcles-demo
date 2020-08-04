import { OBJECT_TYPES } from './constants.js';
import { data } from './data.js';

export const renderUI = (app) => {
  const getObjectCoords = (styles) => {
    const {
      horizontalCenter,
      verticalCenter,
      top,
      right,
      bottom,
      left
    } = styles;

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

  const createObject = ({type, data, styles}) => {
    switch (type) {
      case OBJECT_TYPES.TEXT:
        return new PIXI.Text(
          data.text,
          new PIXI.TextStyle(styles.textStyle)
        );
      case OBJECT_TYPES.IMG:
        return PIXI.Sprite.from(data.path);
      default:
        throw `Undefined object type: ${type}`;
    }
  }

  const createRenderObjectsFromData = (data) => {
    return data.map(item => {
      let obj = createObject(item);
      const {x, y, anchorX, anchorY} = getObjectCoords(item.styles);

      obj.x = x;
      obj.y = y;
      obj.anchor.set(anchorX, anchorY);

      return obj;
    });
  }

  const objects = createRenderObjectsFromData(data);
  objects.forEach(obj => app.stage.addChild(obj));
}
