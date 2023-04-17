//Settings
const MAP_W = 500
const MAP_H = 500

const BIRD_SIZE = 50

const randomValue = function(minV, maxV){
    return minV + Math.random() * (maxV - minV)
}

let birdLeft = randomValue(0 , 400) 
let birdTop = randomValue(0 , 400)  

let speedX = 1
let speedY = 1

let direction = "right"

let score = 0
let timerID 

//Logic
result.innerHTML = `
            <span>Score</span>
           
        `


const initGame = function(){
    map.style.width = `${MAP_W}px`
    map.style.height = `${MAP_H}px`
    map.style.margin = `auto`
}

const startBird = function(){
    bird.style.transition = `0s`

    birdLeft = randomValue(0, 400)
    birdTop = randomValue(0, 400)
     timerID = setInterval(moveBird, 1)

     updateStyleBird()

}

const moveBird = function(){
    birdLeft += speedX
    

    if(birdLeft >= MAP_W - BIRD_SIZE){
        speedX *= -1 
        direction = "left"

        //HW1 
        birdTop += randomValue(10, 30)
        speedX *= 1.08
    }

    if ( birdLeft <= 0 ){
        speedX *= -1 
        direction = " right"

        //HW1
        birdTop += randomValue(10, 30)
        speedX *= 1.08
    }


// HW3
//------------------------------------------
    if(birdTop > MAP_H - BIRD_SIZE + 5){
        clearInterval(timerID)
        result.innerHTML = `
            <p>GAME OVER</p>
            <button onclick="resetGame()">Play again</button>
        `}
        
    updateStyleBird()
}

const resetGame = function(){
    startBird()
    score = 0 
    speedX = 1
    direction = "right"
    
    result.innerHTML = `
            <span>Score</span>
            <p style="font-size: 30px">0</p>
        `
     updateStyleBird()
}
//--------------------------------------------
// HW3

const updateStyleBird = function(){  

    bird.style.transform = ` translateX(${birdLeft}px) 
                             scaleX(${direction == "left" ? -1 : 1})
                             translateY(${birdTop}px)
                            `
}

const shoot = function(){
    let cx = event.layerX + BIRD_SIZE/2
    let cy = event.layerY + BIRD_SIZE/2

    let bcx = birdLeft + BIRD_SIZE/2
    let bcy = birdTop + BIRD_SIZE/2

    if(Math.abs(cx- 10 -bcx) <= 10 && Math.abs(cy-10 - bcy) <= 10 ){

        clearInterval(timerID)

        //HW2
        score += 5
        result.innerHTML = `
            <span>Score</span>
            <p style="font-size: 30px">${score}</p>
        `
        bird.style.transition = `1s`
        bird.style.transform = ` 
                            translateX(${birdLeft}px) 
                            scaleX(${direction == "left" ? -1 : 1})
                            translateY(${MAP_H}px)
                            rotate(3.5turn)
       `

       setTimeout(startBird, 2000)
       
        
    }

    

    console.log(cx, cy)

}

startBird()
