(() => {
  // function logText(text) {
  //   console.log(text);
  //   return text;
  // }
  // logText(10); // 숫자 10

  function logText<T>(text: T): T {
    console.log(text);
    return text;
  }

  logText<string>('하이');
})();
