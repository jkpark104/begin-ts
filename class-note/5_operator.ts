(() => {
  function logMessage(value: string | number): void {
    if (typeof value === 'string') {
    } else {
    }

    throw new TypeError('value must be string or number');
  }

  logMessage('hello');
  logMessage(100);

  let seho: string | number | boolean;

  interface Developer {
    name: string;
    skill: string;
  }

  interface Person {
    name: string;
    age: number;
  }

  function askSomeone(someone: Developer | Person) {
    someone.name = 'park';
    // someone.age = 3;
    // someone.skill = 'cs';
  }
  // // 보장된 속성만 기능을 제공함
  askSomeone({ name: '디벨로퍼', skill: '웹개발' });
  askSomeone({ name: '캡틴', age: 100 });

  // function askSomeone(someone: Developer & Person) {
  //   someone.name = 'park';
  //   someone.age = 3;
  //   someone.skill = 'cs';
  // }
})();
