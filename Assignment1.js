// JS function filter,Map,reduce

var Data = [
    {
      id: 1,
      name: "student1",
      marks:65,
    },
    {
      id: 2,
      name: "student2",
      marks: 72,
    },
    {
      id: 3,
      name: "student3",
      marks: 80,
    },
    {
      id: 4,
      name: "student4",
      marks: 92,
    },
    {
      id: 5,
      name: "student5",
      marks: 95,
    }
  ];

//Reduce

  // var totalMarks = Data.reduce(function (accumulator, Data) {
  //   return accumulator + Data.marks;
  // }, 0);
  
  // using arrow function
  const totalMarks = Data.reduce((acc, Data) => acc + Data.marks,0);

  console.log("Use of Reduce : "+totalMarks);

//Filter

  var marksFilter = Data.filter(Data => Data.marks>=80)

  console.log("Use of Filter");
  console.log(marksFilter);
  
  
//Map


var DataId=Data.map(Data=>Data.id);
console.log("Use of Map : "+DataId);