(function () {
  'use strict';

  angular
    .module('app.users')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function UsersController($q, dataservice, logger) {

    var vm = this;
    vm.title = 'Users';
    vm.userList = [];
    vm.locations = [];
    vm.seletedLocation = '';
    vm.getElementValue = getElementValue;
    vm.clearSelectedLocation = clearSelectedLocation;
    vm.editFirstName = editFirstName;

    activate();

    function activate() {
      var promises = [getPeople(), getLocations()];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard View');
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function (data) {
        vm.userList = data;
        return vm.userList;
      });
    }

    function getElementValue(arg) {
      vm.seletedLocation = arg;
    }

    function clearSelectedLocation() {
      vm.seletedLocation = '';
    }

    function getLocation(item, index) {
      return item.location;
    }

    function checkForDuplicatesInArray(array) {
      var result = array.filter(function (item, pos) {
        return array.indexOf(item) === pos;
      });

      return result;
    }

    function getLocations() {
      return dataservice.getPeople().then(function (data) {
        var locations = data.map(getLocation);
        vm.locations = checkForDuplicatesInArray(locations);
        return vm.locations;
      });
    }

    function editFirstName($index){
      console.log($index);
    }

  }
})();
