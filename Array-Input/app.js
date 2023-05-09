function filterInput(){

    let value = phoneInput.value.split('')
    filteredValue = [] 
    for( let i = 0; i < value.length; i++){
        if( value[i] >= "0" && value[i] <= "9" && pattern[i] == "#") {
            filteredValue.push(value[i])
        }else if (value[i] == pattern[i] && pattern[i] != "#") {
            filteredValue.push(value[i])
        } else {
            break
        }
    }
    // console.log(filteredValue)
    phoneInput.value = filteredValue.join('')

// HW1: collect clean Number without the separators - as Array
    cleanNumber = [ ]     
    for(let i = 0 ; i < filteredValue.length; i++) {
        if(filteredValue[i] >= '0' && filteredValue[i] <= '9'){
            cleanNumber.push(filteredValue[i])
        }
    }
    console.log(cleanNumber)
// HW1: collect clean Number without the separators - as Array
    
}
let pattern = ["#", "#", "#", "/", "2", "#", "#", "#", "-", "#", "#", "#", "-", "#", "#", ]
let filteredValue = [ ]
let cleanNumber = [ ]     

