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

  inputs: {
    buttons: {
      prop: 'preserveAspectRatio',
      list: [
          'xMinYMin meet',
          'xMidYMid meet',
          'xMaxYMax meet',
          'xMinYMin slice',
          'xMidYMid slice',
          'xMaxYMax slice',
      ],
      default: 'xMinYMin meet',
      current: null,
      currentClass: 'button--current'
    }
  }
};

demosBuilder.create();
