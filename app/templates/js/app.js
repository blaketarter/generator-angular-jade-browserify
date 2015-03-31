let angular = require('angular');

let app = angular
   .module('app', [
     require('angular-route')
   ]);

   require('./config/config');

  //  require('./filter/yourFilter');

  //  require('./factory/yourFactory');

   require('./controller/index');
   require('./controller/404');
