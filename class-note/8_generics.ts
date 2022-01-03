(() => {
  // function logText<T>(text: T): T {
  //   console.log(text);
  //   return text;
  // }
  // logText<string>('하이');

  // function logText(text: string) {
  //   console.log(text);
  //   return text;
  // }

  // function logNumber(num: number) {
  //   console.log(num);
  //   return num;
  // }

  function logText<T>(text: T): T {
    console.log(text);
    return text;
  }

  const str = logText<string>('abc');
  const bool = logText<boolean>(true);

  // 인터페이스에 제네릭을 선언하는 방법
  // interface Dropdown {
  //   value: string;
  //   selected: boolean;
  // }

  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }

  const obj: Dropdown<string> = {
    value: '10',
    selected: false,
  };

  // 제네릭의 타입 제한
  // function logTextLnegth<T>(text: T[]): T[] {
  //   console.log(text.length);
  //   text.forEach(text => console.log(text));
  //   return text;
  // }

  // 제네릭 타입 제한 2 - 정의된 타입 이용하기
  interface LengthType {
    length: number;
  }
  function logTextLength<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
  }

  logTextLength({ length: 3 });
  logTextLength('a');
  // logTextLength(3); // 오류

  // 제네릭의 타입 제한 3 - keyof
  interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
  }

  function getShoppingItemOption<T extends keyof ShoppingItem>(
    itemOption: T
  ): T {
    return itemOption;
  }

  getShoppingItemOption('price');
})();
