let name = "Festus Ebin";
let courses = ["HTML", "CSS", "JavaScript", "Ruby", "Python", "C#", "Node JS", "PHP", "Flutter", "Kotlin"];
let numberOfCourses = courses.length;

        console.log(name);
        console.log(courses);

for (let numberDisplay = 1; numberDisplay <= 200; numberDisplay++) {
      if (numberOfCourses % 2 == 0){
        numberDisplay += 1;
           console.log(numberDisplay);
      }
      else {
        numberDisplay += 0;
        console.log(numberDisplay);
      }
}
