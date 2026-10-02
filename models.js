class Student{
constructor(name,id, courses = []){
 Obeject.defineProperty(this,id,{
    value: id,
    writable: false,
    enumerable: true,
    configurable: false}
);
this.name = name;
this.courses = courses;
}
addCourse(courseId, grade){
this.courses.push({courseId, grade});
}
getAvarage(){
let total = 0;
for(let i = 0; i< this.courses.length; i++){
total += this.courses[i].grade;
}
return Total/this.courses.length;
}





}