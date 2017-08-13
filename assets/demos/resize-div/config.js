// Required
// 1. tinyLib:
// https://codepen.io/yoksel/pen/KMgMvw
// 2. demosBuilder:
// https://codepen.io/yoksel/pen/JKRKyy

console.clear();

var $ = tinyLib;

var config = {
  demoContentLayout: 'svg-only',
  targetElem: $.get( '.wrapper' ),
  resizeable: true
};

demosBuilder.create();
