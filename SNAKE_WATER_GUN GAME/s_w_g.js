let user=prompt("Enter S ,W OR G")
let cpuI=Math.floor(Math.random()*3)
let cpu=["S","W","G"][cpuI]
const match=(user,cpu)=>{
  if(cpu===user){
    return "MATCH DRAW!"
  }
  else if(cpu==="S" && user=="W"){
    return "CPU WON!"
  }
  else if(cpu==="S" && user=="G"){
    return "YOU WON!"
  }
  else if(cpu==="W" && user=="S"){
    return "YOU WON!"
  }
  else if(cpu==="W" && user=="G"){
    return "CPU WON!"
  }
  else if(cpu==="G" && user=="S"){
    return "CPU WON!"
  }
  else if(cpu==="G" && user=="W"){
    return "YOU WON!"
  }
}
let result=match(user,cpu);
document.write(`CPU : ${cpu} <br> USER :${user} <br> The Winner is : ${result}`)
