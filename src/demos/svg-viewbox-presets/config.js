// Required
// 1. tinyLib:
// https://codepen.io/yoksel/pen/KMgMvw
// 2. demosBuilder:
// https://codepen.io/yoksel/pen/JKRKyy

console.clear();

var $ = tinyLib;

var config = {
  demoLayout: 'buttons-left',
  demoContentLayout: 'square',
  targetElem: $.get( '.svg' ),

  inputs: {
    buttons: {
      prop: 'viewBox',
      list: [
          '0 0 180 180',
          '0 0 45 45',
          '60 60 120 120',
          '45 45 90 90',
      ],
      default: '0 0 180 180',
      current: null,
      currentClass: 'button--current'
    }
  }
};

demosBuilder.create();
