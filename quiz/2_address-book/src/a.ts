// function fetchItems(): string[] {
//   const items = ['a', 'b', 'c'];
//   return items;
// }

function fetchItems(): Promise<string[]> {
  const items: string[] = ['a', 'b', 'c'];

  return new Promise(resolve => {
    resolve(items);
  });
}

const result = fetchItems();
