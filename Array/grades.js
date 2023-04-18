
//HW: write the code that will allow user to imput the three grades from using prompt() and check error ( range  1... 10 )
let grades = [ 0, 0, 0]
let avg_grade 

for(i = 0; i < 3; i++){
    grades[i] = +prompt(`Grades-${i + 1}: `)
}


    if(grades[0] <= 10 && grades[0] > 0 && grades[1] <= 10 && grades[1] > 0 && grades[2] <= 10 && grades[2] > 0){

        avg_grade = (grades[0] + grades[1] + grades [2]) / 3

        alert (`average grade = ${avg_grade.toFixed(2)}`)
    }else {
        alert("Please input grades range 1 - 10 ")
    }







