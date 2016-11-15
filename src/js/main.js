import angular from 'angular';

import { ContactController } from './controllers/contact';

angular
  .module('app', [])
  .controller('ContactController', ContactController);
