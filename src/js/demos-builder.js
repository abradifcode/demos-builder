(function( window ) {

  'use strict';

  function define_library () {

    var demosBuilder = {};
    var demo;
    var demoContent;
    var ranges;
    var rangesHolder;

    var buttons;
    var buttonsHolder;

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

      rangesHolder = $.create('div')
                          .addClass( [ 'controls', 'controls--ranges'] );

      demoContent.prepend( rangesHolder );

      for (var i = 0; i < ranges.list.length; i++) {
        var range = new Range( i );
        range.setValue();
      }
    }

    //------------------------------

    function addButtons() {
      buttonsHolder = $.create('div')
                          .addClass( [ 'controls', 'controls--buttons'] );

      demo.prepend( buttonsHolder );

      var buttonsTitle = $.create( 'h2' )
                          .addClass('controls__title' )
                          .html( buttons.prop );

      buttonsHolder.append( buttonsTitle );

      for ( var i = 0; i < buttons.list.length; i ++ ) {
        var button = new Button( i );
      }
    }

    //------------------------------

    function Button ( i ) {

      this.value = buttons.list[ i ];

      var item = $.create('button')
                  .addClass( [ 'button' ] )
                  .val( this.value )
                  .html( this.value );

      this.item = item;

      this.checkIsCurrent();

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

    //------------------------------

    Button.prototype.checkIsCurrent = function () {

      if ( !buttons.current ) {

        if ( buttons.default ) {
            if ( this.value === buttons.default ) {
              buttons.current = this.item;
            }
        }
        else {
          buttons.current = this.item;
        }

        if ( buttons.current ) {
          buttons.current.addClass( buttons.currentClass );
          config.targetElem.attr( buttons.prop, this.value );
        }
      }
    }

    //------------------------------

    demosBuilder.create = function () {

      if ( !window.$ ) {
        window.$ = tinyLib;
      }

      if ( !window.config ) {
        console.log( 'Config not found' );
        return;
      }

      var demoContentClasses = {
        'svg-only': 'svg-only',
        'left-range': 'left-range',
        'top-range': 'top-range',
        'both-ranges': 'both-ranges'
      };

      demo = $.get('.demo');
      demoContent = $.get('.demo__content')
                         .addClass( 'demo__content--' +demoContentClasses[ config.demoContentLayout ] );

      //------------------------------

      ranges = config.inputs.ranges;
      rangesHolder;

      buttons = config.inputs.buttons;
      buttonsHolder;

      if ( ranges ) {
        addRanges();
      }

      if ( buttons ) {
        addButtons();
      }
    };

    //------------------------------

    return demosBuilder;
  }

  if( !window.demosBuilder ){
    window.demosBuilder = define_library();
  }

})( window )
