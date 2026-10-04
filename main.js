import {Student} from './models.js';
import {calculateClassAvarage, findTopStudents, filterStudents} from './analytics.js';
import {fetchStudents} from './database.js';
 fetchStudents((student)=>{
    console.log("Fetching data from database...");


    const students = student.map(data => new Student(data.name, data.id, data.courses));
    try{
    students[0].id = 67;
    }
    catch(error){
        console.log("Error: ", error.message);
    }
    console.log("Id after modification: ", students[0].id);
    console.log("Avarage score for class 101: ", calculateClassAvarage(students, 101));
    const topStudent = findTopStudents(students);
    console.log("Top student: ", topStudent ? topStudent.name : "There is no top student.");
    const filteredStudents = filterStudents(students, student => student.courses.some(course => course.courseId ===102));
    console.log("Filtered students with course 102: ", filteredStudents.map(student => student.name));

 })