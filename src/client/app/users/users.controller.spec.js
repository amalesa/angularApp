/* jshint -W117, -W030 */
describe('UsersController', function () {
  var controller;
  var people = mockData.getMockPeople();

  beforeEach(function () {
    bard.appModule('app.users');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function () {
    sinon.stub(dataservice, 'getPeople').returns($q.when(people));
    controller = $controller('UsersController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Users controller', function () {

    it('should be created successfully', function () {
      expect(controller).to.be.defined;
    });

    describe('after activate', function () {

      it('should have title of Dashboard', function () {
        expect(controller.title).to.equal('Users');
      });

      it('should have logged "Activated"', function () {
        expect($log.info.logs).to.match(/Activated/);
      });

      it('should have at least 1 user', function () {
        expect(controller.userList).to.have.length.above(0);
      });

      it('should have at least 1 location', function () {
        expect(controller.locations).to.have.length.above(0);
      });

      it('should have at least 1 location', function () {
        expect(controller.locations).to.have.length.above(0);
      });

    });
  });
});
