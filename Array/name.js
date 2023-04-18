let names = [
    "John Doe",
    "Marry Poppins",
    "Pete Cork",
    "Jake Solomon",
    "Vasili Sviatoi"
]

// 1. print them using a loop in console

//HW: modify this loop so it prints all besides first and last names

// debugger
for(let i = 1 ; i < 4; i++){
    console.log(names[i])
}
// HW: modify this loop so it outputs names -> html <ol> list
list.innerHTML =`
        <ol id = "orderList"></ol>
    `
for(let i = 0 ; i < 5; i++){
    
    orderList.innerHTML += `
        <li>${names[i]}</li>
    `
}



//2. check name in list 

let nameToFind =  prompt(" Name to find: ")
for(let i = 0 ; i < 5; i++){
    if(names[i] == nameToFind){
        console.log(`${nameToFind} found!`)
    }
}