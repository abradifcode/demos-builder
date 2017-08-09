// Required
// 1. tinyLib:
// https://codepen.io/yoksel/pen/KMgMvw
// 2. demosBuilder:
// https://codepen.io/yoksel/pen/JKRKyy

console.clear();

var $ = tinyLib;

var config = {
  demoContentLayout: 'both-ranges',
  targetElem: $.get( '.svg' ),

  inputs: {
    ranges: {
      units: '',
      targetAttr: 'viewBox',
      prefix: 'viewBox',

      attrs: {
        type: 'range',
        min: 0,
        max: 500,
        step: 1,
        value: 180,
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
