function bottlesFalling(x){
    while(x>0){
        console.log("" + x + " пляшок стоїть на стіні, одна упала і залишилось"); 
        x-=1;
    }
    console.log("Жодної!");
}

bottlesFalling(50);