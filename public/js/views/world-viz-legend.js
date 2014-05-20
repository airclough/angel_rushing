define(
  [ 'd3' ],
  function( d3 ) {
    'use strict';

    var svg, rect, height, width, noPressure, pressure;

    var data = [ 180, 90, 0, -90, -180 ];

    var colorScale = d3.scale.linear()
      .domain( [ -180, -90, 0, 90, 180 ] )
      .range( [ 'rgb(254,229,217)', 'rgb(252,174,145)', 'rgb(251,106,74)',
                'rgb(222,45,38)', 'rgb(165,15,21)' ] );

    function init( el ) {
      height = 32;
      width  = 200;

      svg = d3.select( el )
        .append( 'svg' )
          .attr({
            id    : 'legend',
            height: height,
            width : width
          });

      rect = svg.selectAll( 'rect' )
        .data( data )
      .enter()
        .append( 'rect' )
          .attr( 'y', height / 2 )
          .attr( 'height', height / 2 )
          .attr( 'width', function( d, i ) { return width / ( i + 1 ) } )
          .attr( 'fill', function( d ) { return colorScale( d ) } );

      noPressure = svg.append( 'text' )
        .text( 'you know, no pressure' )
          .attr( 'x', 0 )
          .attr( 'y', 8 )
          .attr( 'text-anchor', 'start' )
          .attr( 'fill', 'rgb(254,229,217)' );

      pressure = svg.append( 'text' )
        .text( 'pressure' )
          .attr( 'x', width )
          .attr( 'y', 8 )
          .attr( 'text-anchor', 'end' )
          .attr( 'fill', 'rgb(165,15,21)' );
    }

    return {
      init: init
    };
  }
);
