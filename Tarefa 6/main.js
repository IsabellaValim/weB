const display = document.getElementById('display');

function aparece(input){
    display.value += input;
}

function limpa(){
    display.value = '';
}

function resultado(){
    try{
        display.value = eval(display.value);
    } 
    catch{
        display.value = "Error";
    }
}