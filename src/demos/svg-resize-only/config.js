// Required
// 1. tinyLib:
// https://codepen.io/yoksel/pen/KMgMvw
// 2. demosBuilder:
// https://codepen.io/yoksel/pen/JKRKyy

console.clear();

var $ = tinyLib;

var config = {
  demoContentLayout: 'svg-only',
  targetElem: $.get( '.svg' ),
  resizeable: true,

  _inputs: {
    ranges: {
      units: '',
      resizeable: true,

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
