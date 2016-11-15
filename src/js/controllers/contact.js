const SERVER_URL = 'https://class-server.herokuapp.com/collections/jacks-contact-form/';

function ContactController ($scope, $http) {
  $scope.contacts = [];
  $scope.errors = {};

  function init() {
    $http.get(SERVER_URL).then(function (response) {
      console.log(response);
      $scope.contacts = response.data;
    });
  }

  init();

  $scope.addContact = function (contact) {
    $http.post(SERVER_URL).then(function (response) {
      let contact = response.data;
      $scope.contacts.push(contact);
      console.log($scope.contacts);
    })
  }

}

ContactController.$inject = [$scope, $http];

export { ContactController };
