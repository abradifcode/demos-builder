"use strict";

if ( !window.$ ) {
  var $ = tinyLib;
}

var demo = $.get('.demo');

//------------------------------

var ranges = config.inputs.ranges;
var rangesHolder = $.get('.controls--ranges');

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

  this.input.elem.oninput = function () {
    that.setValue();
  };
};

//------------------------------

Range.prototype.setValue = function () {
  var value = this.input.elem.value + ranges.units;

  config.targetElem.attr( this.valName, value );
  this.title.html(this.valName + ': ' + value);
};

//------------------------------

for (var i = 0; i < ranges.list.length; i++) {
  var range = new Range( i );
  range.setValue();
}

//------------------------------

var buttons = config.inputs.buttons;
var buttonsHolder = $.get( '.controls--buttons' );

if ( buttons ) {
  addButtons();
  demo.addClass('demo--has-buttons')
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
