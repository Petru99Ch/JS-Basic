const STEP_VERTICAL = 64
let robotUp = 1


function renderVertical(){
gameVertical.innerHTML = `
        <div class="robot" 
        style = " transform: translateY(${robotUp * STEP_VERTICAL}px)">
        </div>

`}
renderVertical()