const idGenerator = (function* () {
  let id = 1;
  while (true) {
    yield id;
    id += 1;
  }
})();

class User {
  constructor(firstName, lastName) {
    this.id = idGenerator.next().value;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${ this.firstName } ${ this.lastName }`;
  }
}

export const userList = [
  new User("John", "Doe"),
  new User("Jane", "Smith"),
  new User("James", "Johnson"),
];

export default User;
