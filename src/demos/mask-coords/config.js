"use strict";

var $ = tinyLib;

var config = {
  demoContentLayout: 'both-ranges',
  targetElem: $.get( '#mask' ),

  inputs: {
    ranges: {
      targetElem: $.get('#circle'),
      units: '%',

      attrs: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
        value: 50,
      },

      list: [
        {
          id: 'hor',
          valName: 'cx'
        },
        {
          id: 'vert',
          valName: 'cy'
        }
      ]
    },

    buttons: {
      prop: 'maskContentUnits',
      list: [ 'objectBoundingBox', 'userSpaceOnUse' ],
      default: 'userSpaceOnUse',
      current: null,
      currentClass: 'button--current',
      switchUnits: true
    }
  }
};

demosBuilder.create();
