class Student{
constructor(name,id, courses = []){
 Object.defineProperty(this,'id',{
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
if(this.courses.length === 0){
return 0;
}
for(let i = 0; i< this.courses.length; i++){
total += this.courses[i].grade;
}
return total/this.courses.length;
}





}