function dwarfRollCall(dwarves) {
var list = "";
dwarves.forEach(function(name, idx) {
list += (idx+1 + ". " + name + " ");
});
return list;

}


function summonCaptainPlanet(planeteerCalls){
var newPlanet = [];
for(var i = 0; i < planeteerCalls.length; i++) {
  newPlanet.push(planeteerCalls[i].toUpperCase() + '!');
}
return newPlanet; 
}


function longPlaneteerCalls(words) {
for(var i =0; i < words.length; i++) {
  if(words[i].length > 4) {
    return true; 
  } 
}
return false; 
}

function findTheCheese (foods) {
for(var i =0; i < foods.length; i++) {
  if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert'|| foods[i] ===`swiss`) {
    return foods[i];
  } 
}
return "no cheese!"
} 

var [bob]
function starWithb(array){
for (var i=0; i<array.length;i++){
  if
}
  

  
}

“bob”.startsWith(“b”) 
