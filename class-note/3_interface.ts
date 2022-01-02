(() => {
  interface User {
    age: number;
    name: string;
  }

  // 변수에 인터페이스 활용
  const seho: User = {
    age: 33,
    name: '세호',
  };

  // 함수에 인터페이스 활용
  function getUser(user: User) {
    console.log(user);
  }

  const capt: User = {
    age: 13,
    name: '캡틴',
  };

  getUser(capt);

  // 함수의 스펙(구조)에 인터페이스를 활용
  interface SumFunction {
    (a: number, b: number): number;
    // (a: number, b: number): number;
  }

  const sum: SumFunction = function (a: number, b: number): number {
    return a + b;
  };

  // 인덱싱
  interface StringArray {
    [index: number]: string;
  }

  const arr: StringArray = ['a', 'b', 'c'];

  // 딕셔너리 패턴
  interface stringRegexDictionary {
    [key: string]: RegExp;
  }

  const obj: stringRegexDictionary = {
    sth: /aba/,
    cssFile: /css/,
  };

  // 인터페이스 확장
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    language: string;
  }

  const captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴',
  };
})();
