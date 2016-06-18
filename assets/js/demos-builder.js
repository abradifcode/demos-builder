"use strict";

if ( !window.$ ) {
  var $ = tinyLib;
}

var demoContentClasses = {
  'svg-only': 'svg-only',
  'left-range': 'left-range',
  'top-range': 'top-range',
  'both-ranges': 'both-ranges'
};

var demo = $.get('.demo');
var demoContent = $.get('.demo__content')
                   .addClass( 'demo__content--' +demoContentClasses[ config.demoContentLayout ] );

//------------------------------

var ranges = config.inputs.ranges;
var rangesHolder;

//------------------------------

function Range ( i ) {

  var item = ranges.list[i];
  var prefix = 'range--' + item.id;
  this.valName = item.valName;

  var rangeHolder = $.create( 'div' )
                     .addClass( ['range', 'range--' + item.id ] );

  this.title = $.create( 'div' )
                .addClass( ['range__title'] );

  this.input = $.create( 'input' )
                .attr( ranges.attrs )
                .addClass( ['range__input']);

  rangeHolder.append( this.title ).append( this.input );
  rangesHolder.append( rangeHolder );

  var that = this;

  console.log( this );

  this.input.elem.oninput = function () {
    that.setValue();
  };

  return this;
};

//------------------------------

Range.prototype.setValue = function () {
  var value = this.input.elem.value + ranges.units;

  config.targetElem.attr( this.valName, value );
  this.title.html(this.valName + ': ' + value);
};

//------------------------------

function addRanges () {
  for (var i = 0; i < ranges.list.length; i++) {
    var range = new Range( i );
    range.setValue();
  }
}

if ( ranges ) {

  rangesHolder = $.create('div')
                      .addClass( [ 'controls', 'controls--ranges'] );

  demoContent.prepend( rangesHolder );

  addRanges();
}

//------------------------------

var buttons = config.inputs.buttons;
var buttonsHolder;

if ( buttons ) {
  buttonsHolder = $.create('div')
                      .addClass( [ 'controls', 'controls--buttons'] );

  demo.prepend( buttonsHolder );

  addButtons();
}

function addButtons() {
  var buttonsTitle = $.create( 'h2' )
                      .addClass('controls__title' )
                      .html( buttons.prop );

  buttonsHolder.append( buttonsTitle );

  //------------------------------

  for ( var i = 0; i < buttons.list.length; i ++ ) {
    var button = new Button( i );
  }
}

function Button( i ) {

  var buttonValue = buttons.list[ i ];

  var item = $.create('button')
              .addClass( [ 'button' ] )
              .val( buttonValue )
              .html( buttonValue );

  if ( !buttons.current ) {
    buttons.current = item;

    item.addClass( buttons.currentClass );
  }

  buttonsHolder.append( item );

  item.elem.onclick = function () {
    if ( buttons.current ) {
      buttons.current.removeClass( buttons.currentClass );
    }

    item.addClass(buttons.currentClass);
    config.targetElem.attr( buttons.prop, this.value );

    buttons.current = item;
  }
}

