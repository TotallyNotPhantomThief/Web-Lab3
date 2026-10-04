import {Student, addCourse,getAvarage} from './models.js';
import {calculateClassAvarage, findTopStudents, filterStudents} from './analytics.js';
import {fetchStudents} from './database.js';
 fetchStudents((student)=>{
    console.log("Fetching data from database...");


    const Students = student.map(data => new Student(data.name, data.id, data.courses));

    Students[0].id = 67;
    console.log("Id after modification: ", Students[0].id);
    console.log("Avarage score for class 101: ", calculateClassAvarage(Students, 101));
    const topStudent = findTopStudents(Students);
    console.log("Top student: ", topStudent.name);
    const filteredStudents = filterStudents(Students, student => student.courses.some(course => course.courseId ===102));
    console.log("Filtered students with course 102: ", filteredStudents.map(student => student.name));

 })