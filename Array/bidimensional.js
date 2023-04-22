// bi dimensional Array

let grades_ = [
    [                         //  |    dimension 0: groups
        [9, 10, 9, 8, 10],    //  |
        [8,  8, 8, 8,  8]     //  |        | dimenison 1: students
    ],                        //  |        |
    [                         //  |        |
        [7, 10, 9, 8, 10],    //  |        v
        [8, 7, 8, 8, 6],      //  |
        [8, 8, 8, 6, 8]       //  |  
    ]                         //  v

]

//------------------------------>  dimension 2: lessons

let group_index = +prompt("Choose group index (0,1): ")
let student_index = +prompt("Choose student index: ")

for(let i = 0 ; i<5; i++){
    console.log(grades_[group_index][student_index][i])
}

//HW: using for() + prompt() enter 5 marks for 1 student from kb
let updateGrades
for(let i = 0; i<5; i++){
    grades_[group_index][student_index][i] = prompt(`Write the new value from ${i+1} grades`)
}