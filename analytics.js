 function calculateClassAvarage(students,courseId){
let totalAvg = 0;
for(let i=0; i<students.length; i++){
totalAvg += students[i].getAvarage(courseId);
}
return totalAvg/students.length;
 
}

function findTopStudents(students){
 const topStudent = students.reduce((highestStu, curStu) => {
    return (curStu.getAvarage() > highestStu.getAvarage() ? curStu : highestStu);
 }) 

}


filterStudents(students, criteriaFn){
    
}
