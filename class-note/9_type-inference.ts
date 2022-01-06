(() => {
  // 타입 추론 기본 1
  let a = 'sdf';

  function getB(b = 10): string {
    const c = 'hi';
    return b + c;
  }

  10 + '10'; //1010

  // 타입 추론 기본 2
  // interface Dropdown<T> {
  //   value: T;
  //   title: string;
  // }

  // let shoppingItem: Dropdown<string> = {
  //   value: 'abc',
  //   title: 'hello',
  // };

  // 타입 추론 기본 3
  interface Dropdown<T> {
    value: T;
    title: string;
  }

  interface DetailedDropdown<T> extends Dropdown<T> {
    description: string;
    tag: T;
  }

  let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a',
  };

  // Best Commmon Type
  const arr = [1, 2, 3];
})();
