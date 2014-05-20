'use strict';

module.exports = ( function() {
  function getAll( req, res ) {
    res.json([
      {
        id: 'html5-css3',
        skill: 'HTML5 and CSS3',
        desc: 'The backbone of this Backbone.js powered web app, HTML5 and CSS3 are not only ridiculously meta, but the most vital web development skill I possess.'
      },
      {
        id: 'cross-browser',
        skill: 'Cross-browser compatibility',
        desc: 'Enter Modernizr and jQuery, two libraries I make use of in many of the apps and websites I build. They help to blur the lines between browser vendors and editions.'
      },
      {
        id: 'js',
        skill: 'Javascript and jQuery',
        desc: 'Javascript is my weapon of choice when it comes to programming and development. Be it leveraging the power of Backbone, Underscore, and jQuery on the client-side or Node.js on the server.'
      },
      {
        id: 'php',
        skill: 'Working knowledge of OO PHP',
        desc: 'In 2012 I worked at IGN where we made heavy use of the Zend Framework. More recently I developed a few Wordpress plugins for BigFolio.'
      },
      {
        id: 'bootstrap',
        skill: 'Responsive design (Bootstrap 3 a plus)',
        desc: 'In the same vein as cross-browser compatibility, responsive design and the ability to render your app to different screen sizes / devices is the future of the web. And the future is now.'
      },
      {
        id: 'mysql',
        skill: 'MySQL (a plus)',
        desc: 'While I prefer the flexiblity of noSQL databases like MongoDB for many of my projects, it is tough to rival the power of mySQL.'
      },
      {
        id: 'git',
        skill: 'Version control (git, github)',
        desc: 'Sure thing. I can do that.'
      }
    ]);
  };

  return {
    getAll: getAll
  };
})();
