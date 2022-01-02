(() => {
  // JS 문자열 선언
  const str = 'hello';

  // TS 문자열 선언
  const _str = 'hello';

  // TS 숫자
  const number = 10;

  // TS 배열
  const arr: Array<number> = [1, 2, 3];
  const items: number[] = [1, 2, 3];

  // TS 튜플
  const address: [string, number] = ['g', 0];

  // TS 객체
  const obj: object = {};
  const person: { name: string; age: number } = {
    name: 'park',
    age: 3,
  };

  // TS 진위값
  const show = true;
})();
