//mapData
//Legend
// 0 - empty
// 1 - pac
// 2 - coin
// 3 - heart
// 4 - bomb

let pr = 4
let pc = 4
let coins = 0 
let hp = 100
let replay

let mapData = [   
    [0,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,0,0,3,0,0,0],
    [0,4,0,0,0,0,2,4,0,0],
    [0,3,0,0,1,0,0,0,0,0],
    [0,4,2,0,2,0,0,0,0,0],
    [0,4,0,0,0,0,0,3,0,0],
    [0,4,4,0,0,4,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,0,4,0,0,0,0]

]

function render(){
    map.innerHTML = ''
    for(row = 0 ; row < 10; row++ ){
        for(col=0 ; col < 10; col++){
            if(mapData[row][col] == 0){
                map.innerHTML += `<div></div>`
            } else if (mapData[row][col] == 1){
                map.innerHTML += `<div class = "pac"></div>`
            } else if (mapData[row][col] == 2){
                map.innerHTML += `<div class = "coin"></div>`
            } else if (mapData[row][col] == 3){
                map.innerHTML += '<div class = "heart"></div>' // HW: Add Heart
            }else if (mapData[row][col] == 4){
                map.innerHTML += '<div class = "bomb"></div>' // HW: Add bomb
            }

        }
    }
    result.innerHTML = `<h2>Coins: ${coins}</h2> <h2>HP : ${hp}</h2>`
   
    
}

//RENDER 
render()

// TEST Random Value for ARRAY 
function randomValue() {
    
    mapData[Math.floor(Math.random() * 10) ][Math.floor(Math.random() * 10)] = Math.floor(Math.random() * 4) + 2
   

}     

// TEST Random Value for ARRAY 


function movePac() {
    mapData[pr][pc] = 0
    switch(event.code){
        case 'ArrowRight' : pc < 9 ? pc++ : pc = 0 ; break // HW * : teleportation + Finish limits
        case 'ArrowLeft' : pc > 0 ? pc--: pc = 9 ; break   
        case 'ArrowUp' : pr > 0 ?  pr-- : pr = 9 ;  break
        case 'ArrowDown' : pr < 9 ?  pr++ : pr = 0 ;  break
    }

    if(mapData[pr][pc] == 2){
        coins += 5
        
    }

    if(mapData[pr][pc] == 3){
        hp <= 90 ? hp += 10 : 0
    }

    if(mapData[pr][pc] == 4){
        if(hp >=20 ){
            hp -= 20
            
        }  else if(hp == 10) {
            hp -=10
           
        } 
    }

    if (hp == 0 ){
       replay = confirm("Game Over \n Play Again ?")
        if(replay) {
            coins = 0
            hp = 100
            
        }

    }

    mapData[pr][pc] = 1
    render()
} 


        

    
   





/* Check PAC in Matrix
 for(row = 0; row < 10; row++){
            for(col = 0 ; col < 10; col++){
                if(mapData[row][col] == 1){
                    mapData[row][col] = 0
                    mapData[row + 1][col] = 1
                }

            }

        }
    } 
*/