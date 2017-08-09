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
        max: 1,
        step: .1,
        value: 1,
      },

      list: [
        {
          id: 'hor',
          valName: 'gradientTransform',
          transform: {
            name: 'scale'
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
