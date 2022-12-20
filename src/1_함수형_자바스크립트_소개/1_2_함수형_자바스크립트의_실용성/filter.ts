interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

// for문으로 필터링
const temp_users: User[] = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
const ages: number[] = [];
for (let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
// filter로 필터링
// const users_under_30: User[] = filter(users, (user: User) => user.age < 30);
// const ages_filter: number[] = [];
// for (let i = 0; i < temp_users.length; i++) {
//   ages_filter.push(users_under_30[i].age);
// }

// for문으로 필터링
const temp_users2 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
const names: string[] = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
// filter로 필터링
// const users_over_30: User[] = filter(users, (user: User) => user.age >= 30);
// const names_filter: string[] = [];
// for (let i = 0; i < temp_users.length; i++) {
//   names_filter.push(users_over_30[i].name);
// }
/////// functional filter, predicate
type Predicate<T> = (x: T) => boolean;

function filter<T>(list: T[], predicate: Predicate<T>) {
  const new_list: T[] = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}
