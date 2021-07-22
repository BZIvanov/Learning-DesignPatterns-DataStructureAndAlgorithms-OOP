class Course {
  constructor(data) {
    this.title = data.title;
    this.flyweight = FlyweightFactory.get(data.user, data.completed);
  }
}

class Flyweight {
  constructor(user, completed) {
    this.user = user;
    this.completed = completed;
  }
}

const FlyweightFactory = (() => {
  const flyweights = {};

  const get = (user, completed) => {
    if (!flyweights[user + completed]) {
      flyweights[user + completed] = new Flyweight(user, completed);
    }

    return flyweights[user + completed];
  };

  const getCount = () => {
    let count = 0;
    for (f in flyweights) {
      count++;
    }
    return count;
  };

  return { get, getCount };
})();

const users = ['Iva', 'Kiril', 'Mira', 'Qna'];
const completed = [true, false];

const CourseMethods = function () {
  const courses = {};
  let count = 0;

  const add = (data) => {
    courses[data.title] = new Course(data);
    count++;
  };

  const get = (title) => {
    return courses[title];
  };

  const getCount = () => {
    return count;
  };

  return { add, get, getCount };
};

const courses = new CourseMethods();

const numCourses = 1_000_000;

const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < numCourses; i++) {
  courses.add({
    title: i + ' .course',
    user: users[Math.floor(Math.random() * 4)],
    completed: completed[Math.floor(Math.random() * 2)],
  });
}

const finalMemory = process.memoryUsage().heapUsed;

console.log(finalMemory - initialMemory);
