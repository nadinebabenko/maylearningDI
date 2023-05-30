function displayStudentInfo(objUser){
const {first , last} = objUser
return `Your 1st name is ${first} and you last name is ${last}`
}

const sentence = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(sentence)