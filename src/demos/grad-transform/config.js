"use strict";

var $ = tinyLib;

var config = {
  demoContentLayout: 'top-range',
  targetElem: $.get( '#grad' ),

  inputs: {
    ranges: {
      // units: '',

      attrs: {
        type: 'range',
        min: 0,
        max: 360,
        step: 1,
        value: 180,
      },

      list: [
        {
          id: 'hor',
          valName: 'gradientTransform',
          transform: {
            name: 'rotate',
            origin: {
              'objectBoundingBox': ['.5','.5'],
              'userSpaceOnUse': ['250','150']
            }
          }
        }
      ]
    },

    buttons: {
      prop: 'gradientUnits',
      list: [ 'objectBoundingBox', 'userSpaceOnUse' ],
      default: 'userSpaceOnUse',
      current: null,
      currentClass: 'button--current',
      switchUnits: true
    }
  }
};

demosBuilder.create();
