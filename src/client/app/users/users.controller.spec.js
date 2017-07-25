/* jshint -W117, -W030 */
describe('UsersController', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('app.users');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function () {
    controller = $controller('UsersController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Users controller', function () {

    it('should be created successfully', function () {
      expect(controller).to.be.defined;
    });
    /*
    describe('after activate', function () {
      it('should have title of Admin', function () {
        expect(controller.title).to.equal('Users');
      });

      it('should have logged "Activated"', function () {
        expect($log.info.logs).to.match(/Activated/);
      });
    });

    it('should have at least 1 user', function () {
      expect(controller.userList).to.have.length.above(0);
    });

    it('should have at least 1 country', function () {
      expect(controller.locations).to.have.length.above(0);
    });*/
  });
});
