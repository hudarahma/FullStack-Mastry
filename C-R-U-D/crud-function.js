
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
  
  // Goal: Add Company to an Arry of Obects
  function create(newCompany) {
    // Add a company information to the DATA array
    DATA.push(newCompany);
  }
  // Goal: Get Company based on name
  function read(companyName) {
    for (let company of DATA) {
      if (company.company == companyName) {
        return company;
      }
    }
  }
  // Goal: Update the company
  function update(companyName, key, value) {
    for (let company of DATA) {
      if (company.company == companyName) {
        company[key] = value;
        return company;
      }
    }
  }
  // Goal: Delete the company
  function deleteData(companyName) {
    for (let i = 0; i < DATA.length; i++) {
      let company = DATA[i];
      if (company.company == companyName) {
        DATA.splice(i, 1);
      }
    }
  }