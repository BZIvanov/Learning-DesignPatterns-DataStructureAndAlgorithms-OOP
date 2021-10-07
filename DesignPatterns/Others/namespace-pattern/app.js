const APP = {};

(function (namespace) {
  let counter = 0;
  const userNames = [];

  namespace.greeting = function (userName) {
    const welcomeText = 'Welcome,';
    const textNewUser = 'Glad to have you!';
    const textExistingUser = 'Good to see you again.';

    let greeting = welcomeText + ' ';
    if (newUser(userName)) {
      greeting += textNewUser;
    } else {
      greeting += textExistingUser;
    }
    console.log(greeting);
    counter++;
  };

  const newUser = function (userName) {
    for (const name of userNames) {
      if (name.toLowerCase() === userName.toLowerCase()) {
        return false;
      }
    }
    namespace.addUser(userName);
    return true;
  };

  namespace.addUser = function (userName) {
    userNames.push(userName);
  };

  namespace.numberOfGreetings = function () {
    console.log('Total number of greetings: ' + counter);
  };
})(APP);

APP.addUser('Iva');
APP.greeting('Iva'); // Welcome, Good to see you again.
APP.greeting('Kiro'); // Welcome, Glad to have you!
APP.greeting('Kiro'); // Welcome, Good to see you again.
APP.numberOfGreetings(); // 3
