var num,sum,win=0,loss=0;
var type;
async function loadList(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=809&offset=0");
    let pkmndata = await response.json();
  
  console.log(pkmndata.count);
  let count = pkmndata.count;
  sum=randNo(count);
  num=sum-1;
  picBack();
console.log(pkmndata.results[num].name);
  
}
  loadList();
  

function randNo(count){
return Math.floor(Math.random() * 809);}

 async function guess(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=809&offset=0");
    let pkmndata = await response.json();
var guess;
guess = prompt("Who's that Pokemon");
  console.log("Its: " +guess);

if (guess == pkmndata.results[num].name){
  window.alert ("you win");
  picFront();
win=win+1}
  else{
    picFront();
    window.alert ("you Lose")
  loss=loss+1}
     correct.innerHTML = `<div>Its ${pkmndata.results[num].name}</div>`
   ash();
   ash2();
   brock();
   losses();
   losses1();
   losses2();
   updateScore();
   setTimeout(loadList,3000);
}
async function picFront(){
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${num+1}`);
    let pkmnid = await response.json();
  console.log(pkmnid.sprites.front_default);
    image.innerHTML = `<img src=${pkmnid.sprites.front_default} >`
    
  
            
  }
async function picBack(){
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${num+1}`);
    let pkmnid = await response.json();
  console.log(pkmnid.sprites.front_default);
    image.innerHTML =
      `<img id="back" src=${pkmnid.sprites.front_default}>`
    clue.innerHTML = `<div></div>`
    correct.innerHTML = `<div></div>`
  }

function updateScore(){
  score.innerHTML = `<div>Win=${win}</div> 
<div>Loss=${loss}</div>`
}



async function hint(){
  const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${num+1}`);
    let pkmnid = await response.json();
  console.log(pkmnid.stats[1].base_stat);
  type=pkmnid.types[0].type.name;
  if (type=="normal"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="normal">normal</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="fire"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="fire">fire</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="water"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="water">water</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="grass"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>One of the Type = <button id="grass">grass</button> </div>
                  <div>One of the Abilities = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
else if (type=="electric"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="electric">electric</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="ice"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="ice">ice</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="fighting"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="fighting">fighting</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="poison"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="poison">poison</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="ground"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="ground">ground</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
else if (type=="flying"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="flying">flying</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="psychic"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="psychic">psychic</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="bug"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="bug">bug</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="rock"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="rock">rock</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="ghost"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="ghost">ghost</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="dark"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="dark">dark</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="dragon"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="dragon">dragon</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="steel"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="steel">steel</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}
  else if (type=="fairy"){
  clue.innerHTML =`<div>Hp = ${pkmnid.stats[0].base_stat}</div>
                  <div>Attack = ${pkmnid.stats[1].base_stat}</div>
                  <div>Defense = ${pkmnid.stats[2].base_stat}</div>
                  <div>Special attack = ${pkmnid.stats[3].base_stat}</div>
                  <div>Special defense = ${pkmnid.stats[4].base_stat}</div>
                  <div>Speed = ${pkmnid.stats[5].base_stat}</div>
                  <div>Type1 = <button id="fairy">fairy</button> </div>
                  <div>Ability = ${pkmnid.abilities[0].ability.name} </div>`
                  console.log(pkmnid.types[0].type.name);
             setTimeout(clearclue,10000);
}



}
function skip(){
  loadList();  
  loss=loss+1;
  updateScore();
  ash();
  ash2();
  brock();
  losses();
  losses1();
  losses2();
  
}
 function clearclue(){
   clue.innerHTML = `<div></div>`
 }
function ash(){
  if(win>4){
    streak.innerHTML = `<img src="infopics/wins1.png">`
  }
}

function ash2(){
  if(win>9){
    streak.innerHTML = `<img src="infopics/wins2.png">`
  }
}

function brock(){
  if (win>49){
    streak.innerHTML = `<img src= "infopics/wins3.png">`
}
}

function losses(){
  if(loss>4){
    lossStreak.innerHTML = `<img src="infopics/losses1.png">`
  }
}

function losses1(){
  if (loss>9){
    lossStreak.innerHTML = '<img src ="infopics/losses2.png">'
  }
}

function losses2(){
  if (loss>49){
    lossStreak.innerHTML = '<img src ="infopics/losses3.png">'
  }
}

// <button id="normal">Normal</button>

// https://cdn.discordapp.com/attachments/231910902784458752/965088625706541076/20180805_095110.png
// https://cdn.discordapp.com/attachments/963159714756186172/965079406236295229/unknown.png