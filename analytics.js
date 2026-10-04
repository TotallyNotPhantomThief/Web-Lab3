export function calculateClassAvarage(students,courseId){
let totalAvg = 0;
for(let i=0; i<students.length; i++){
totalAvg += students[i].getAvarage(courseId);
}
return totalAvg/students.length;
 
}

export function findTopStudents(students){
 const topStudent = students.reduce((highestStu, curStu) => {
    return (curStu.getAvarage() > highestStu.getAvarage() ? curStu : highestStu);
 }) 

}


export function filterStudents(students, criteriaFn){
    return students.filter(criteriaFn);
}
