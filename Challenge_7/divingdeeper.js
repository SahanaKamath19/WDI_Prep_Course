var numberofreplys = 8;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else';
    switch(choice){
        case 1: 
            console.log("It is certain");
            break;
        case 2:
            console.log("Yes, definitely");
            break;
        case 3:
            console.log("Ask again later");
            break;
        case 4:
            console.log("My sources say no");
            break;
        case 5:
        console.log("Most likely"); 
        break;
        case 6:
            console.log("Cannot predict now"); 
        break;
        case 7:
            console.log("Signs point to yes"); 
        break;
        default:
            console.log("You may rely on it");
        }
        console.log(choice);
    }
ask();