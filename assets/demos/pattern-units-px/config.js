"use strict";

var $ = tinyLib;

var config = {
  demoContentLayout: 'both-ranges',
  targetElem: $.get( '#pattern' ),

  inputs: {
    ranges: {
      targetElem: $.get('#pattern'),
      isTied: true,
      keepViewBoxRatio: true,
      // units: '%',

      attrs: {
        type: 'range',
        min: 0,
        max: 300,
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
    }
  }
};

demosBuilder.create();
