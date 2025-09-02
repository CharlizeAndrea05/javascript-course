// // console.log("Part 2 functions is ready. ");

// // // Functions - Declarations and Expressions
// // function logger() {
// //     console.log("My name is Charlize");
// // }

// // logger ();
// // logger ();
// // logger ();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// //     return juice;
// // }

// // console.log(fruitProcessor(5, 3));

// // const juice1 = fruitProcessor(5, 0);
// // const juice2 = fruitProcessor(2, 4);
// // const juice3 = fruitProcessor(3, 2);

// // // Function expression
// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // };

// // const age1 = calcAge(2004);
// // console.log(age1);

// // console.log(calcAge(2004));

// // function introduce(firstName, lastName, age) {
// //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`; 
// //     return introduction;
// // };

// // console.log(introduce("Charlize", "Jaromay", 21));
// // console.log(introduce("John"));

// // function yearsUntilRetirement(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years`;
// //     } else {
// //         return `${fisrtName} has already retired`;
// //     }
// // };

// // console.log(yearsUntilRetirement(2004, "Charlize"));

// // // function scope
// // const globalVar = "I am global";

// // function testScope () {
// //     const localVar = "I am global";
// //     console.log(globalVar);
// //     console.log(localVar);
// // };

// // testScope();
// // console.log(globalVar);


// // ////////////////////////////////////
// // // Coding Challenge #1

// // // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) { 
// //     return (score1 + score2 + score3) /3 ;
// // };

// // // Function to check winner
// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     return `Dolphins win ${avgKoalas} vs. ${avgDolphins}`; 
// //     } else {

// //     }
// //   }


// // // Test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = [""];
// console.log(friends);

// const mixed =["Jonas", 40, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1994, 2008, 2020);
// console.log(years);

// //Accessing Arrays
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// // access the length
// console.log(friends.length);

// friends[0] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2025 -  birthYear;
// }

// const ages = [calcAge(2000), calcAge(1940, calcAge(1991))];
// console.log(ages);

// const newLength = friends.push("John");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Mark");
// console.log(friends);

// //removing elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // finding an element
// console.log(friends.indexOf("Jay"));
// console.log(friends.indexOf("Mark"));

// // includes
// console.log(friends.includes("Peter"));
// console.log(friends.includes("John"));

// //Array Iterations
// for (let i = 0; 1 < friends.length; index++) {
//    console.log(friends[i]);
// }

// friends.forEach( 
//     function(friend, index) {
//         console.log(`${index + 1}: ${friends} `);
//     }
// );

// friends.forEach(
//     (friends, index) => {
//         console.log(`${index + 1}: ${friends}`);
//     }
// );

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; index++) {
//     total += grades2[i]
// }

// const average = total / grades2.length;
// console.log(`Average grades: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grade) => {
//      if (grade >= 70) passedCount++;
//     }
// );

// console.log(`${passedCount} out of ${grades.length} students passed`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   // Your code here
//   // Hint: Sum all grades, divide by length
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   // Your code here
//   // Hint: Similar to highest, but use < comparison
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);


////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    // Calculate age if not already calculated
    if (!this.age) {
      this.calcAge();
    }
    
    const activeFriends = this.getActiveFriends();
    const totalFriends = this.friends.length;
    const statusText = this.isActive ? "Active" : "Inactive";
    
    return `
PROFILE SUMMARY
---------------
Name: ${this.firstName} ${this.lastName}
Age: ${this.age} years old
Location: ${this.location}
Status: ${statusText}

Friends: ${activeFriends} active out of ${totalFriends} total
Interests: ${this.interests.join(", ")}

Bio: ${this.firstName} is a ${this.age}-year-old from ${this.location} 
who enjoys ${this.interests.slice(0, -1).join(", ")} and ${this.interests.slice(-1)}.
    `.trim();
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());

