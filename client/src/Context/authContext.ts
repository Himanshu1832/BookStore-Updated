//@ts-ignore
 export const user = JSON.parse(localStorage.getItem('user'));

 //@ts-ignore
 export const token = localStorage.getItem('token')||null;

 
 export const editions = [
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
    { label: "2015", value: "2015" },
    { label: "2014", value: "2014" },
    { label: "2013", value: "2013" },
  ];


  export const sem = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
  ];


  export const branchs = [
    { label: "Computer Science Engineering", value: "Computer Science Engineering" },
    { label: "Information Technology", value: "Information Technology" },
    { label: "Electronics Communication Engineering", value: "Electronics Communication Engineering" },
    { label: "Mechanical Engineering Engineering", value: "Mechanical Engineering Engineering" },
    { label: "Civil Engineering", value: "Civil Engineering" },
  ];

  
  export const colleges = [
    { label: "SKIT", value: "SKIT" },
    { label: "JECRC", value: "JECRC" },
    { label: "PCE", value: "PCE" },
  ];