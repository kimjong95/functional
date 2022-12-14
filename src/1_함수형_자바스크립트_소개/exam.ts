export function exam() {
  // closure
  function addMaker(a: number) {
    return (b: number) => {
      console.log(a + b);
      return a + b;
    };
  }

  const add5 = addMaker(5);

  add5(4); // 9
  add5(10); // 15

  addMaker(6)(10); // 16
  addMaker(21)(10); // 31
}
