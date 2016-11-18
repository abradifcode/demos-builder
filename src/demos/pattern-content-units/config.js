"use strict";

var $ = tinyLib;

var config = {
  demoContentLayout: 'both-ranges',
  targetElem: $.get( '#pattern' ),

  inputs: {
    ranges: {
      targetElem: $.get('#shape'),
      units: '%',

      attrs: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
        value: 150,
      },

      list: [
        {
          id: 'hor',
          valName: 'width'
        },
        {
          id: 'vert',
          valName: 'height'
        }
      ]
    },

    buttons: {
      prop: 'patternContentUnits',
      list: [ 'objectBoundingBox', 'userSpaceOnUse' ],
      default: 'userSpaceOnUse',
      current: null,
      currentClass: 'button--current',
      // switchUnits: true
    }
  }
};

demosBuilder.create();
