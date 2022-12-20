interface User {
  id: number;
  name: string;
  age: number;
}

const users_under_30 = filter(users, (user) => user.age < 30);
const ages_under_30 = map(users_under_30, (user) => user.age);

function map<T>(list: T[], iteratee: (value: T) => keyof T): keyof T[] {
  const new_list: T[] = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}
