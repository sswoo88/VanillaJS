// quiz
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());
}

// Q2. make an array out of a string
{
  const fruits = '🍎,🥝,🍌,🍒';
  console.log(fruits.split(','));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
const array = [1, 2, 3, 4, 5];

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
{
  //   students.splice('0', '2');
  //   for (let i = 0; i < students.length; i++) {
  //     console.log(students[i]);
  //   }
  //   for (let student of students) {
  //     console.log(student);
  //   }
  //   students.forEach((student) => console.log(student));
}

// Q5. find a student with the score 90
{
  for (let i = 0; i < students.length; i++) {
    if (students[i].score === 90) {
      console.log(students[i]);
    }
  }
}

// Q6. make an array of enrolled students
{
  const enrolledCheck = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].enrolled === true) {
      enrolledCheck.push(students[i]);
    }
  }
  console.log(enrolledCheck);
}

// Q7. make an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoreCheck = [];
  for (let student of students) {
    scoreCheck.push(student.score);
  }
  console.log(scoreCheck);
}

// Q8. check if there is a student with the score lower than 50
{
  for (let student of students) {
    if (student.score < 50) {
      console.log(student);
    }
  }
}

// Q9. compute students' average score
{
  let aver = 0;
  let vari = 0;
  for (let student of students) {
    vari += student.score;
  }
  aver = vari / students.length;
  console.log(aver);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const conScore = [];
  for (let student of students) {
    conScore.push(student.score);
  }
  console.log(conScore.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const conScore = [];
  for (let student of students) {
    conScore.push(student.score);
  }
  console.log(conScore.sort().toString());
}
