const display = document.getElementById("dispaly");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}