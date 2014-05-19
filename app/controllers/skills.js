'use strict';

module.exports = ( function() {
  function getAll( req, res ) {
    res.json([
      { skill: 'HTML5 and CSS3' },
      { skill: 'Cross-browser compatibility' },
      { skill: 'Javascript and jQuery' },
      { skill: 'Working knowledge of OO PHP' },
      { skill: 'Responsive design (Bootstrap 3 a plus)' },
      { skill: 'MySQL (a plus)' },
      { skill: 'Version control (git, github)' }
    ]);
  };

  return {
    getAll: getAll
  };
})();
