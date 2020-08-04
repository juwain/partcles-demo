import { OBJECT_TYPES } from './constants.js';

export const data = [
  {
    type: OBJECT_TYPES.IMG,
    path: 'assets/phone.png',
    left: 10,
    top: 10
  },
  {
    type: OBJECT_TYPES.IMG,
    path: 'assets/mic.png',
    bottom: 20,
    horizontalCenter: true
  },
  {
    type: OBJECT_TYPES.IMG,
    path: 'assets/userpic.png',
    top: 10,
    right: 10
  },
  {
    type: OBJECT_TYPES.TEXT,
    text: 'Say:',
    top: 120,
    horizontalCenter: true,
    textStyle: {
      fontFamily: 'Arial',
      fontSize: 16,
      fill: '#ffffff'
    }
  }
];