function dwarfRollCall(dwarves) {
var newStr = "";
dwarves.forEach(function(name, idx) {
newStr += (idx+1 + ". " + name + " ");
});
return newStr;

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
  if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
    return foods[i];
  } 
}
return "no cheese!"
} 

