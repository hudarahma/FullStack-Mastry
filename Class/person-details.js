

// Creating a Class for every person details

class GetDetail {
    constructor(firstName, fullName, age) {
      this.firstName = firstName;
      this.fullName = fullName;
      this.age = age;
    }
  
    details () {
      return ` My Name is ${this.firstName} ${this.fullName}, and I'm ${this.age} Years Old`;
    }
  
  } 
  
//   Test it out here
  let person1 = new GetDetail('Noora','Emadi','4')
  console.log(person1);
  console.log(person1.details());
  
  let person2 = new GetDetail('Shaylin','Emadi','7')
  console.log(person2);
  console.log(person2.details());