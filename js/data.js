import { OBJECT_TYPES } from './constants.js';

export const data = [
  {
    type: OBJECT_TYPES.IMG,
    data: {
      path: 'assets/phone.png',
    },
    styles: {
      left: 20,
      top: 20
    }
  },
  {
    type: OBJECT_TYPES.IMG,
    data: {
      path: 'assets/mic.png',
    },
    styles: {
      bottom: 20,
      horizontalCenter: true
    }
  },
  {
    type: OBJECT_TYPES.IMG,
    data: {
      path: 'assets/userpic.png',
    },
    styles: {
      top: 20,
      right: 20
    }
  },
  {
    type: OBJECT_TYPES.TEXT,
    data: {
      text: 'Say:',
    },
    styles: {
      top: 150,
      horizontalCenter: true,
      textStyle: {
        fontFamily: 'Arial',
        fontSize: 16,
        fill: '#ffffff'
      }
    }
  }
];
