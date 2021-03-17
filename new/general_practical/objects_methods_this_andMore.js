// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.age);

user.age = 35;
console.log(user.age);

console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);


//object methods

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  //methods
  login() {
    console.log('the user logged in');
  },
  logout() {
    console.log("the user logged out");
  }
  // login: function() {
  //   console.log('the user logged in');
  // },
  // logout: function() {
  //   console.log("the user logged out");
  // }
};

user.login();
user.logout();

//another exemple of a method (string method)
const name = "mario";
name.toUpperCase();


//.this

// this used in a global environment refers to the blogal object (the window)
// this used inside a block scope refers to the object it's inside, in this case to the user object
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login() {
    console.log('the user logged in');
  },
  logout() {
    console.log("the user logged out");
  },
  //.this keyword
  logBlogs(){
    //console.log(this.blogs);
    console.log("This user has written the following blogs:");
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }
};

user.logBlogs();

//THIS AND ARROW FUNCTION DIFFERENCE
//in this case the thid keyword is used inside a regular function, so it's refering to the object (block scope)
//if this is used in an arrow function it will refer to the global window (it has a global scope)


//OBJECTS IN ARRAY

//Exemple
// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ]
// console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',

  //object
  blogs: [
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
  ],
   logBlogs(){
    console.log("This user has written the following blogs:");
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    })
  }
};