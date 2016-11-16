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
      if ($scope.validateForm(contact)) {
        $http.post(SERVER_URL, contact).then(function (response) {
        let contact = response.data;
        $scope.contacts.push(contact);
        console.log($scope.contacts);
        console.log(contact)
        $scope.contact = {}
        });
      } ;
  };

  $scope.validateName = function (name) {
    if (name === '' || name === undefined) {
      $scope.errors.name = "Must supply a name.";
      return false;
    } else {
      $scope.errors.name = ''
      return true;
    };
  };

  $scope.validateUrl = function (url) {
      if (url && (url === '' || !url.startsWith('http'))) {
        $scope.errors.website = "Must supply a valid URL starting with http:// or https://";
        return false;
      } else {
        $scope.errors.website = '';
        return true;
      };
  };

  $scope.validateEmail = function (email) {
    if (email && !email.includes('@')) {
      $scope.errors.email = 'Must supply a valid email address. (www.example@email.com)';
      return false;
    } else {
      $scope.errors.email = '';
      return true;
    };
  };

  $scope.validateMessage = function (message) {
    if (message === '' || message === undefined) {
      $scope.errors.message = 'Message cannot be empty.';
      return false;
    } else {
      $scope.errors.message = '';
      return true;
    };
  };


  $scope.validateForm = function (contact) {
    console.log(contact)
    if ($scope.validateMessage(contact.message) && $scope.validateEmail(contact.email) && $scope.validateUrl(contact.website) && $scope.validateName(contact.name)) {
      return true;
    } else {
      return false;
    }
  }

  ContactController.$inject = [$scope, $http];
}


export { ContactController };
