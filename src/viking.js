// Soldier
function Soldier(health, strength) {

  this.health = health;
  this.strength = strength;
 
};

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
}



//---------------------------------------------

// class Soldier {constructor (healthArg, strengthArg){
//   this.health = healthArg;
//     this.strength = strengthArg;
// }
// attack () {
//   return this.strength;
// }

// receiveDamage (damage) {
//   this.health -= damage; 
// }
// }



// Viking
function Viking(name, health, strength) {
  Soldier.call (this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health>0) {
      return this.name + " has received " + damage + " points of damage";
  }
  else {
      return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

//------------------------------------------------------

// class Viking {
//   constructor (nameArg, healthArg, strengthArg){
//     super (healthArg, strengthArg)
//     this.name = nameArg;
// }

// receiveDamage (damage) {
//   this.health -= damage; 
//   if (this.health > 0 ){
//     return this.name + " has received " + damage + " points of damage";
//   }
//   else {
//     return this.name + " has died in act of combat";
//   }
// }

// battleCry() {
//   return "Odin Owns You All!";
// }
// }

//---------------------------------------------

// // Saxon

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage= function(damage){
  this.health -= damage;
  if (this.health>0) {
      return ("A Saxon has received " + damage + " points of damage");
  }
  else {
      return "A Saxon has died in combat";
  }
}


//-----------------------------------------------

// class Saxon {
//   constructor (healthArg, strengthArg){
//     super (healthArg, strengthArg)
//   }

//   receiveDamage (damage) {
//     this.health -= damage; 
//     if (this.health > 0 ){
//       return "A Saxon has received " + damage + " points of damage";
//     }
//     else {
//       return "A Saxon has died in combat";
//     }
//   }
// }




// War


function War() {
  this.vikingArmy = [] ; 
  this.saxonArmy = [] ;
}


War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
 
}


War.prototype.saxonAttack = function () {
  var sRandomSaxon = randomSoldier(this.saxonArmy)
  var vRandomViking = randomSoldier(this.vikingArmy)
  this.vikingArmy[vRandomViking].health -= this.saxonArmy[sRandomSaxon].strength
  var result = this.vikingArmy[vRandomViking].name + " has received " + this.saxonArmy[sRandomSaxon].strength + " points of damage"
  if(this.vikingArmy[vRandomViking].health <= 0) {
    this.vikingArmy.splice(0,1)
  }
  return result
}


War.prototype.showStatus = function () {
  if(this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}









// class War {}






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
