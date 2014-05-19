'use strict';

module.exports = ( function() {
  function getAll( req, res ) {
    res.json([
      { skill: 'html5/css3' },
      { skill: 'php' }
    ]);
  };

  return {
    getAll: getAll
  };
})();
