// quiz
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());
  console.log(fruits.join(','));
}

// Q2. make an array out of a string
{
  const fruits = '🍎,🥝,🍌,🍒';
  console.log(fruits.split(',', 2));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
  console.log(array); //change array
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
  // const result = array.splice('0', '2'); //change array
  // console.log(result);
  // console.log(array);

  const result = array.slice(2, 5); //don't change array
  console.log(array);
  console.log(result);

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

  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const enrolledCheck = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].enrolled === true) {
      enrolledCheck.push(students[i]);
    }
  }

  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoreCheck = [];
  for (let student of students) {
    scoreCheck.push(student.score);
  }
  console.log(scoreCheck);

  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  for (let student of students) {
    if (student.score < 50) {
      console.log(student);
    }
  }

  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  console.clear();
  let aver = 0;
  let vari = 0;
  for (let student of students) {
    vari += student.score;
  }
  aver = vari / students.length;
  console.log(aver);

  const result = students.reduce((prev, curr) => prev + curr.score, 0); //reduceRight: reverse reduce
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const conScore = [];
  for (let student of students) {
    conScore.push(student.score);
  }
  console.log(conScore.toString());

  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const conScore = [];
  for (let student of students) {
    conScore.push(student.score);
  }
  console.log(conScore.sort().toString());

  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
}
