((): void => {
  // 인터페이스
  interface Developer {
    name: string;
    skill: string;
  }

  class Person {
    name: string;
  }

  let developer: Developer;
  let person: Person;
  // developer = person; // 오류

  // 함수
  let add = function (a: number) {
    //
  };

  let sum = function (a: number, b: number) {
    //
  };

  sum = add;
  // add = sum; // 오류

  // 제네릭
  interface Empty<T> {
    //
  }

  let empty: Empty<string>;
  let empty2: Empty<number>;

  empty = empty2;
  empty2 = empty;

  interface NotEmpty<T> {
    data: T;
  }
  let notEmpty1: NotEmpty<string>;
  let notEmpty2: NotEmpty<number>;

  // notEmpty1 = notEmpty2; //오류
  // notEmpty2 = notEmpty1; //오류
})();
