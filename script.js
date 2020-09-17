let classes;
let proficiencyBonus = 2;
let level = 1;
//attributes and ability scores according to 5e rules
let strength = {
  value:0,
  bonus:0,
  set changeValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#strength-bonus').innerText = this.bonus;
  }
};
let dexterity = {
  value:0,
  bonus:-5,
  set changeValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#dexterity-bonus').innerText = this.bonus;
  }
};
let constitution = {
  value:0,
  bonus:-5,
  set changeValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#constitution-bonus').innerText = this.bonus;
  }
};
let intelligence = {
  value:0,
  bonus:-5,
  set changeValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#intelligence-bonus').innerText = this.bonus;
  }
};
let wisdom = {
  value:0,
  bonus:-5,
  set changeValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#wisdom-bonus').innerText = this.bonus;
  }
};
let charisma = {
  value:0,
  bonus:-5,
  set changeValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#charisma-bonus').innerText = this.bonus;
  }
};
//skills
let acrobatics = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return dexterity.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return dexterity.bonus + this.otherModifiers;
    }
  }
};
let animalhandling = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return wisdom.bonus + this.otherModifiers;
    }
  }
};
let arcana = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return intelligence.bonus + this.otherModifiers;
    }
  }
};
let athletics = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return strength.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return strength.bonus + this.otherModifiers;
    }
  }
};
let deception = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return charisma.bonus + this.otherModifiers;
    }
  }
};
let history = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return intelligence.bonus + this.otherModifiers;
    }
  }
};
let insight = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return wisdom.bonus + this.otherModifiers;
    }
  }
};
let intimidation = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return charisma.bonus + this.otherModifiers;
    }
  }
};
let investigation = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return intelligence.bonus + this.otherModifiers;
    }
  }
};
let medicine = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return wisdom.bonus + this.otherModifiers;
    }
  }
};
let nature = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return intelligence.bonus + this.otherModifiers;
    }
  }
};
let perception = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return wisdom.bonus + this.otherModifiers;
    }
  }
};
let performance = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return charisma.bonus + this.otherModifiers;
    }
  }
};
let persuasion = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return charisma.bonus + this.otherModifiers;
    }
  }
};
let religion = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return intelligence.bonus + this.otherModifiers;
    }
  }
};
let sleightofhand = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return dexterity.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return dexterity.bonus + this.otherModifiers;
    }
  }
};
let stealth = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return dexterity.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return dexterity.bonus + this.otherModifiers;
    }
  }
};
let survival = {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return wisdom.bonus + this.otherModifiers;
    }
  }
};

//classes are loaded from the classes.json data file, function can receive a similar json file as input
function goLoadClasses(url) {
  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      classes = data;
      populate(classes);
    });
}
goLoadClasses('data/classes.json');

function populate(classesgot) {
  let classnames = Object.keys(classesgot);
  for (let i = 0; i < classnames.length; i++) {
    const opt = document.createElement('option');
    opt.value = classnames[i];
    opt.innerText = classnames[i];
    document.querySelector('#class-select').appendChild(opt);
  }
  //console.log(eval('classes'));
}

document.querySelector('#strength').addEventListener('input',function(){
  strength.changeValue = document.querySelector('#strength').value
})

document.querySelector('#dexterity').addEventListener('input',function(){
  dexterity.changeValue = document.querySelector('#dexterity').value
})

document.querySelector('#constitution').addEventListener('input',function(){
  constitution.changeValue = document.querySelector('#constitution').value
})

document.querySelector('#intelligence').addEventListener('input',function(){
  intelligence.changeValue = document.querySelector('#intelligence').value
})

document.querySelector('#wisdom').addEventListener('input',function(){
  wisdom.changeValue = document.querySelector('#wisdom').value
})

document.querySelector('#charisma').addEventListener('input',function(){
  charisma.changeValue = document.querySelector('#charisma').value
})

console.log(acrobatics.getValue)