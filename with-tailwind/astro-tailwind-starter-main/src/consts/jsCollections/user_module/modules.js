// ================counter.js================

// import { createStore, getValue } from 'nanostores';

// const counter = createStore(() => {
//   counter.set(0);
// });

// function increaseCounter() {
//   counter.set(getValue(counter) + 1);
// }

// function decreaseCounter() {
//   counter.set(getValue(counter) - 1);
// }

// export { counter, increaseCounter, decreaseCounter };


// ================admin.js================

// import { createDerived } from 'nanostores';

// import { users } from './users.js';

// const admins = createDerived(users, (list) => list.filter((user) => user.isAdmin));

// export { admins };

// ==================user.js======================

// import { createStore, getValue } from 'nanostores';

// const users = createStore(() => {
//   users.set([
//     {
//       name: 'Imanadmin',
//       age: 2,
//       isAdmin: true,
//     },
//     {
//       name: 'Imnotadmin',
//       age: 35,
//       isAdmin: false,
//     },
//     {
//       name: 'Wowsomuchadmin',
//       age: 3634,
//       isAdmin: true,
//     },
//   ]);
// });

// const addUser = function addUser(user) {
//   users.set([...getValue(users), user]);
// };

// export { users, addUser };