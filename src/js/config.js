"use strict";

var $ = tinyLib;

var config = {
  demoContentLayout: 'both-ranges',
  targetElem: $.get( '#mask' ),

  inputs: {
    ranges: {
      units: '%',

      attrs: {
        type: 'range',
        min:0,
        max: 100,
        step:1,
        value: 75,
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
      prop: 'maskUnits',
      list: [ 'objectBoundingBox', 'userSpaceOnUse' ],
      current: null,
      currentClass: 'button--current'
    }
  }
};


