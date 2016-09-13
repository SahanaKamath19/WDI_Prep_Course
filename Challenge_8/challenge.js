//EXERCISE #1 : print 1 to 100 in console
for(var i=0;i<=100;i++){
    console.log(i);
}

//EXERCISE #2: Pattern triangle
for(var x="#";x.length<8;x=x+"#"){
    console.log(x);
}

//EXERCISE #3: Fizz Buzz
for (var i = 1; i <= 100; i++) {
  var result = "";
  if (i % 3 == 0)
    result = "Fizz";
  if (i % 5 == 0)
    result = result + "Buzz";
  console.log(result || i);
}

//EXERCISE #4: 8*8 Grid
var string = "";
for (var x = 0; x < 8; x++) {
  for (var y = 0; y < 8; y++) {
    if((x+y)%2==0){
      string += "#";
      }
  else{
      string += " ";
      }
  }
  string += "\n";
}
console.log(string);


