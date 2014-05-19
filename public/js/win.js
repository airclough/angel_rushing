define(
  [ 'backbone',
    'jquery' ],
  function( Backbone, $ ) {
    'use strict';

    var Win = function() {
      this.$el    = $( window );
      this.height = this.$el.height();
      this.width  = this.$el.width();

      this.bindEventListeners();
    };

    Win.prototype = _.extend( {}, Backbone.Events );

    Win.prototype.bindEventListeners = function() {
      this.$el.on( 'scroll', this.onScroll.bind( this ) );
      this.$el.on( 'resize', this.onResize.bind( this ) );
    };

    Win.prototype.onScroll = function( e ) {
      this.scrollTop = this.$el.scrollTop();

      this.trigger( 'Win:scroll', this );
    };

    Win.prototype.onResize = function( e ) {
      this.trigger( 'Win:resize', e );
    };

    return Win;
  }
);
