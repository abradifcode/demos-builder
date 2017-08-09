// Required
// 1. tinyLib:
// http://codepen.io/yoksel/pen/KMgMvw
// 2. demosBuilder:
// http://codepen.io/yoksel/pen/JKRKyy

console.clear();

var $ = tinyLib;

var config = {
  demoContentLayout: 'both-ranges',
  targetElem: $.get( '#grad' ),

  inputs: {
    ranges: {
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
          valName: 'r'
        },
          {
          id: 'vert',
          valName: 'cy'
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
