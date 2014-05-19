define(
  [ 'd3' ],
  function( d3 ) {
    'use strict';

    var svg, features, world, country, height, width, viewport, colorScale, latScale, projection, path;

    var countries = {};

    function setCountries() {
      features = topojson.feature( world, world.objects.countries ).features;

      var i = 0;
      var l = features.length;

      for( ; i < l; i++ ) {
        country = features[ i ];

        if( countries[ country.id ] ||
            country.id === -99 )
          country.id = ~country.id * l + i;

        countries[ country.id ] = {};
        countries[ country.id ].lat = Infinity;

        // u-s-a! u-s-a! u-s-a!
        643 === country.id
          ? countries[ country.id ].lat = 180
          : traverse( country.geometry.coordinates );
      }
    }

    function traverse( o ) {
      for( var i in o ) {
        process( i, o[ i ] );
        if( null !== o[ i ] &&
            'object' === typeof o[ i ] )
          traverse( o[ i ] );
      }
    }

    function process( i, o ) {
      if( '0' === i &&
          'number' === typeof o )
        countries[ country.id ].lat = countries[ country.id ].lat < o
          ? countries[ country.id ].lat
          : o;
    }

    function cacheCountries() {
      for( var prop in countries )
        countries[ prop ].$el = d3.select( '#country-id-' + prop );
    }

    function setScales() {
      colorScale = d3.scale.linear()
        .domain( [ -180, 180 ] )
        .range( [ 'rgb(204,204,204)', 'rgb(220,20,60)' ] );

      latScale = d3.scale.linear()
        .domain( [ 0, height - viewport ] )
        .range( [ -180, 180 ] );
    }

    function setGeo() {
      projection = d3.geo.mercator()
        .scale( width / 2 / Math.PI )
        .translate( [ width / 2, width / 2 ] )
        .precision( 0.1 );

      path = d3.geo.path()
        .projection( projection );
    }

    // win response listener
    function onScroll( win ) {
      for( var prop in countries ) {
        var bool = countries[ prop ].lat >= latScale( win.scrollTop );

        countries[ prop ].$el.classed( 'fade', bool );
      }
    }

    /*
     * public
     */

    function init( el, win ) {
      height   = win.height
      width    = win.width;
      viewport = win.viewport

      setScales();
      setGeo();

      d3.json( 'world.json', function( err, w ) {
        if( err ) return console.log( 'error' );

        world = w;
        setCountries();

        svg = d3.select( el )
          .append( 'svg' )
            .attr({
              height: width,
              width : width
            });

        svg.append( 'g' )
          .selectAll( 'path' )
            .data( features )
          .enter()
            .append( 'path' )
              .attr( 'id', function( d ) { return 'country-id-' + d.id; } )
              .attr( 'class', function( d ) { if( d.id !== 840 ) return 'fade'; } )
              .attr( 'fill', function( d ) { return colorScale( countries[ d.id ].lat ) } )
              .attr( 'd', path );

        svg.insert( 'path' )
          .datum( topojson.mesh( world, world.objects.countries,
            function( a, b ) { return a !== b; } ) )
            .attr( 'fill', 'none' )
            .attr( 'stroke', '#fff' )
            .attr( 'stroke-width', '.5px' )
            .attr( 'd', path );

        cacheCountries();

        // win bus
        win.on( 'Win:scroll', onScroll );
      });
    }

    return {
      init: init
    };
  }
);
