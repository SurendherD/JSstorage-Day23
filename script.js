//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

const userData = {
  firstName: 'Surendher',
  lastName: 'Reddy',
  age: 23,
  country: 'India',
  state: 'AndhraPradesh',
};

var jsonuser = JSON.stringify(userData);
localStorage.setItem(jsonuser);
console.log(jsonuser);

var UserDataJSON = localStorage.getItem('jsonuser');
var UserData = JSON.parse(UserDataJSON);
console.log(UserData);

localStorage.removeItem('userData.state');
console.log(localStorage.getItem(userData));

localStorage.clear();
console.log(localStorage.getItem(userData));

var USER = JSON.stringify(user);
console.log(USER);
