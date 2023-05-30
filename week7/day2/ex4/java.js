const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
//Using the filter() method, create a new array, containing the students that passed the course.

const filter = students.filter(student => student.isPassed === true)
console.log(filter)

const congratius = filter.forEach(student => {
    console.log(` Congratulation, ${student.name} you have passed  course  ${student.course}`)


})
