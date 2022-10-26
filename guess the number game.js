let a=Math.random()*100;
a=Number.parseInt(a);
let inp;
let score=100;
while(inp!=a){
  score--;
inp=prompt("Guess a no!")
  
  if(inp==a){
    console.log("Woho! you guessed the right number")
    console.log(`You guessed the actual no in ${100-score}chances`)
   
  }
  else if(inp>a && inp<100){
   console.log("you guessed greater  number than actual number") 
  }
    else if(inp<a && inp>0){
   console.log("you guessed smaller  number than actual number")  
  }
  else{
    console.log("Guess a number between 1 to 100") 
  }
}
