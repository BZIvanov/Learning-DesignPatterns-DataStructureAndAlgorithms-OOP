class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, toUser) {
    this.chatroom.send(message, this, toUser);
  }

  receive(message, fromUser) {
    console.log(`${fromUser.name} > ${this.name}:\n\t ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.usersList = {};
  }

  addUsers(users) {
    users.forEach((user) => {
      this.usersList[user.name] = user;
      user.chatroom = this;
    });
  }

  send(message, fromUser, toUser) {
    toUser.receive(message, fromUser);
  }
}

// the chatroom is our mediator
const chatroom = new Chatroom();

const iva = new User('Iva');
const toni = new User('Toni');
const kiril = new User('Kiril');

chatroom.addUsers([iva, toni, kiril]);

iva.send('Hi, Toni', toni);
toni.send('Hey, Iva', iva);
kiril.send('Toni, you coming?', toni);
toni.send('Yes, in a minute.', kiril);
iva.send('Hello there :)', kiril);
