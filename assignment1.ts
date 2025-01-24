type Student = {
    name:string;
    scores:Scores;
    percentage?:number;
    grade?:string;
};

type Scores = {
    math:number;
    english:number;
    science:number;
};

const students: Student[] =[
  { name: "Alice", scores: { math: 95, english: 88, science: 92 } },
  { name: "Bob", scores: { math: 78, english: 82, science: 85 } },
  { name: "Charlie", scores: { math: 85, english: 90, science: 87 } },
  { name: "Daisy", scores: { math: 65, english: 70, science: 72 } },
  { name: "Eve", scores: { math: 98, english: 94, science: 96 } },

];


//function to calculate the percentage
const assignPercentage = (scores:Scores) :number =>{
    let totalmarks:number=scores.math+scores.english+scores.science;
    let subtotal:number=300;
    let studentPercentage:number = ((totalmarks/subtotal)*100);
    return studentPercentage;
};


//function to assign grades based on the percentage
const assignGrades = (percentage:number): string => {
    if(percentage>=90){
        return 'A';
    }else if(percentage>=80){
        return 'B';
    }else if(percentage >=70){
        return 'C';
    }else if(percentage>=60){
        return 'D';
    }else if(percentage<50){
        return 'E';
    }else{
        return 'F';
    }
}  

//here i have iterated over each record and assigned its percentage and grade
students.forEach(student => {
    student.percentage = assignPercentage(student.scores); 
    student.grade = assignGrades(student.percentage);
});


//sorted the array based on percentage ( descending order)
students.sort((a,b)=>{
    return b.percentage!-a.percentage!;
})

//function to display all the data of students
const displayAll = ():void => {
    students.forEach(student =>{
        console.log(`name: ${student.name}, percentage: ${student.percentage?.toFixed(2)}, grade:${student.grade}`);
    });
}
displayAll();