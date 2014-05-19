define(
  [ 'd3' ],
  function( d3 ) {
    'use strict';

    var svg, features, world, country, width, colorScale, latScale, projection, path;

    var countries = {};

    function setCountries() {
      features = topojson.feature( world, world.objects.countries ).features;

      var i = 0;
      var l = features.length;

      for( ; i < l; i++ ) {
        country = features[ i ];
        countries[ country.id ] = {};
        countries[ country.id ].lat = Infinity;

        traverse( country.geometry.coordinates );
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

    function setScales() {
      colorScale = d3.scale.linear()
        .domain( [ -180, 180 ] )
        .range( [ 'rgb(204,204,204)', 'rgb(220,20,60)' ] );

      latScale = d3.scale.linear()
        .domain( [ 0, width ] )
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

    /*
     * public
     */

    function init( el, win ) {
      width = win.width;

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
            .data( topojson.feature( world, world.objects.countries ).features )
          .enter()
            .append( 'path' )
              .attr( 'id', function( d ) { return 'id-' + d.id; } )
              .attr( 'class', 'country' )
              .attr( 'fill', function( d ) { return colorScale( countries[ d.id ].lat ) } )
              .attr( 'd', path );

        svg.insert( 'path' )
          .datum( topojson.mesh( world, world.objects.countries,
            function( a, b ) { return a !== b; } ) )
            .attr( 'fill', 'none' )
            .attr( 'stroke', '#fff' )
            .attr( 'stroke-width', '.5px' )
            .attr( 'd', path );
      });
    }

    return {
      init: init
    };
  }
);
