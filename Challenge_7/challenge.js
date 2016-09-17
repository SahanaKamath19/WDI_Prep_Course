//magic eightball

var numberofreplys = 8;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
    if(choice == 1){
        console.log("It is certain");
    }
    else if(choice === 2){
        console.log("Yes, definitely");
    }
    else if(choice == 3){
        console.log("Ask again later");
    }
    else if(choice == 4) {
        console.log("My sources say no");
    }
    else if (choice == 5){
       console.log("Most likely"); 
    }
    else if (choice == 6){
        console.log("Cannot predict now"); 
    }
    else if (choice == 7){
        console.log("Signs point to yes"); 
    }
    else{
        console.log("You may rely on it");
    }
    /*
    write conditional logic here using if, else if, and else


    */

    console.log(choice);
}

ask();

