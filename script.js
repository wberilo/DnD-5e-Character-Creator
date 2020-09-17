let classes;
let proficiencyBonus = 2;
let level = 1;
//attributes and ability scores are calculated according to 5e rules
let attributes = {
strength : {
  value:0,
  bonus:0,
  set setValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#strength-bonus').innerText = this.bonus;
    skills.athletics.setValue();
  }
},
 dexterity : {
  value:0,
  bonus:-5,
  set setValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#dexterity-bonus').innerText = this.bonus;
    skills.acrobatics.setValue();
    skills.sleightofhand.setValue();
    skills.stealth.setValue();
  }
},
 constitution : {
  value:0,
  bonus:-5,
  set setValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#constitution-bonus').innerText = this.bonus;
  }
},
 intelligence : {
  value:0,
  bonus:-5,
  set setValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#intelligence-bonus').innerText = this.bonus;
    skills.arcana.setValue();
    skills.history.setValue();
    skills.investigation.setValue();
    skills.nature.setValue();
    skills.religion.setValue();
  }
},
 wisdom : {
  value:0,
  bonus:-5,
  set setValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#wisdom-bonus').innerText = this.bonus;
    skills.animalhandling.setValue();
    skills.insight.setValue();
    skills.medicine.setValue();
    skills.perception.setValue();
    skills.survival.setValue();
  }
},
 charisma : {
  value:0,
  bonus:-5,
  set setValue(value){
    this.value = value;
    this.bonus = Math.floor((value-10)/2);
    document.querySelector('#charisma-bonus').innerText = this.bonus;
    skills.deception.setValue();
    skills.intimidation.setValue();
    skills.performance.setValue();
    skills.persuasion.setValue();
  }
},
}
//skills are calculated according to 5e rules, object is mapped and skills are created with a loop
let skillMap = {
  "acrobatics":"dexterity",
  "animalhandling":"wisdom",
  "arcana":"intelligence",
  "athletics":"strength",
  "deception":"charisma",
  "history":"intelligence",
  "insight":"wisdom",
  "intimidation":"charisma",
  "investigation":"intelligence",
  "medicine":"wisdom",
  "nature":"intelligence",
  "perception":"wisdom",
  "performance":"charisma",
  "persuasion":"charisma",
  "religion":"intelligence",
  "sleightofhand":"dexterity",
  "stealth":"dexterity",
  "survival":"wisdom"
}
let skills = {}
for (i in skillMap){
  skills[i] = {
      name:i,
      skillAttribute:skillMap[i],
      value:5,
      otherModifiers:0,
      proficiency:false,
      get getValue(){
        if(this.proficiency===true){
          return attributes[this.skillAttribute].bonus + proficiencyBonus + this.otherModifiers;
        }
        else{
          return attributes[this.skillAttribute].bonus + this.otherModifiers;
        }
      },
      setValue(){
        document.querySelector('#'+this.name).innerText = this.getValue
      }
  }
  
}
console.log(skills)

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
}

const attrInput = document.querySelectorAll('.attributes input');
for (let i = 0; i < attrInput.length; i++) {
  attrInput[i].addEventListener('input', function(){
    attributes[attrInput[i].id].setValue = parseInt(attrInput[i].value);
  })
}

const skillsProficiencies = document.querySelectorAll('.skills p input')
for (let i = 0; i < skillsProficiencies.length; i++) {
  skillsProficiencies[i].addEventListener('input', function(){
    skills[skillsProficiencies[i].id.replace('bool-','')].proficiency = !skills[skillsProficiencies[i].id.replace('bool-','')].proficiency
    skills[skillsProficiencies[i].id.replace('bool-','')].setValue();
  })
}
