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








}