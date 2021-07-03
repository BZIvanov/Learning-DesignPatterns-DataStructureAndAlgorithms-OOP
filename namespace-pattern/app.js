const APP = {};

(function (namespace) {
  let counter = 0;
  const userNames = [];

  namespace.greeting = function (userName) {
    const prompt = 'Welcome,';
    const prompt2 = 'Glad to have you!';
    const prompt3 = 'Good to see you again.';

    let greeting = prompt + ' ';
    if (newUser(userName)) {
      greeting += prompt2;
    } else {
      greeting += prompt3;
    }
    console.log(greeting);
    counter++;
  };

  const newUser = function (userName) {
    for (let i = 0; i < userNames.length; i++) {
      if (userNames[i].toLowerCase() === userName.toLowerCase()) {
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
