const dispaly = document.getElementById("dispaly");


function appendToDisplay(input){
    dispaly.value += input;
}

function clearDisplay(){
    dispaly.value = "";
}

function Calculate(){
    try{
        dispaly.value = eval(dispaly.value);
    }
    catch(error){
        dispaly.value = "Error";
    }
    
}