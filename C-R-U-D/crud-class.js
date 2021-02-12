// Convert the CRUD Function --> CRUD Class

let data = [
    {
      company: "Amazon",
      position: "Senior Frontend Developer",
      posted: 1599715730,
      employment: "Fulltime",
      location: "USA",
      stack: ["frontend", "HTML", "CSS", "JS", "ReactJS"]
    },
    {
      company: "Paypal",
      position: "Junior FullStack Developer",
      posted: 1602318890,
      employment: "Fulltime",
      location: "Remote",
      stack: ["NodeJS", "HTML", "CSS", "JS", "ReactJS", "Firebase"]
    },
    {
      company: "Disney",
      position: "Software Developer",
      posted: 1596875690,
      employment: "Fulltime",
      location: "USA",
      stack: ["HTML", "CSS", "JS", "ReactJS"]
    }
  ];
  
  let newObj = 
    {
      company: "PWJ",
      position: "Full Stack Mastry",
      posted: 1599715730,
      employment: "Fulltime",
      location: "USA",
      stack: ["frontend", "HTML", "CSS", "JS", "ReactJS"]
    }
// ****************************************************************

class CRUD{
  constructor(data){
    this.DATA = data;
    
  }

  create(newCompany){
    return this.DATA.push(newCompany);
  }

  read(companyName){
    for (let company of this.DATA) {
    if (company.company == companyName) {
      return company;
     }
    }
  }

  update(companyName, key, value) {
    for (let company of this.DATA) {
      if (company.company == companyName) {
        company[key] = value;
        return company;
      }
    }
  }

  deleteData(companyName) {
    for (let i = 0; i < this.DATA.length; i++) {
      let company = this.DATA[i];
      if (company.company == companyName) {
        console.log('Object Deleted')
        return this.DATA.splice(i, 1);
        
      }
    }
  }

}

const crud = new CRUD(data);
console.log(crud)

console.log(crud.create(newObj));
console.log(crud);

console.log(crud.read("Disney"));

console.log(crud.update("Disney", 'position', 'Software Eng'))


console.log(crud);

console.log(crud.deleteData("PWJ"));
console.log(crud);