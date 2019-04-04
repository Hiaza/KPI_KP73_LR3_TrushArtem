function check_gameType(x){    
    if(parseInt(x)==1 || parseInt(x)==2)
        return true;
    else return false;
}

function validate(x){
    let flag = true;
    let value;
    while (flag){
        value = prompt(x);
        if(value!='' && typeof(value)!=undefined) flag = false;
        else alert("Field is empty! Write something..");
    }
    return value;
}

function love_prediction(){
    let name = validate("Введіть ім'я:");
    let amountOfChildren = validate("Введіть кількість дітей:");
    alert("Ви укладете шлюб з " + name + " і у вас буде " + amountOfChildren + " дітей!");
}

function job_prediction(){
    let city = validate("Введіть місто:");
    let amountOfChildren = validate("Введіть посаду:");
    alert("Ви переїдете у місто " + city + " на посаду " + amountOfChildren);
}


let x = true;

while(x){
    let gameType = prompt("Оберіть тип передбачення(1 - особисте життя, 2 - кар'єра)","");
    if(check_gameType(gameType)){
        if(parseInt(gameType)==1) love_prediction();
        else job_prediction();
        x = confirm("Спробувати ще раз?");
    }
    else {
        alert("Incorrect value! Try 1 for love and 2 for job");
    }  
}