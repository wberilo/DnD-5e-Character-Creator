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
    console.log('aaa')
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
//skills are calculated according to 5e rules
let skills = {
 acrobatics : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.dexterity.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.dexterity.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#acrobatics').innerText = this.getValue
  }
},
 animalhandling : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.wisdom.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#animalhandling').innerText = this.getValue
  }
},
 arcana : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.intelligence.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#arcana').innerText = this.getValue
  }
},
 athletics : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.strength.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.strength.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#athletics').innerText = this.getValue
  }
},
 deception : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.charisma.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#deception').innerText = this.getValue
  }
},
 history : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.intelligence.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#history').innerText = this.getValue
  }
},
 insight : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.wisdom.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#insight').innerText = this.getValue
  }
},
 intimidation : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.charisma.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#intimidation').innerText = this.getValue
  }
},
 investigation : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.intelligence.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#investigation').innerText = this.getValue
  }
},
 medicine : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.wisdom.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#medicine').innerText = this.getValue
  }
},
 nature : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.intelligence.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#nature').innerText = this.getValue
  }
},
 perception : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.wisdom.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#perception').innerText = this.getValue
  }
},
 performance : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.charisma.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#performance').innerText = this.getValue
  }
},
 persuasion : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.charisma.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.charisma.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#persuasion').innerText = this.getValue
  }
},
 religion : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.intelligence.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.intelligence.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#religion').innerText = this.getValue
  }
},
 sleightofhand : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.dexterity.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.dexterity.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#sleightofhand').innerText = this.getValue
  }
},
 stealth : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.dexterity.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.dexterity.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#stealth').innerText = this.getValue
  }
},
 survival : {
  proficiency:false,
  otherModifiers:0,
  get getValue(){
    if(this.proficiency===true){
      return attributes.wisdom.bonus + proficiencyBonus + this.otherModifiers;
    }
    else{
      return attributes.wisdom.bonus + this.otherModifiers;
    }
  },
  setValue(){
    document.querySelector('#survival').innerText = this.getValue
  }
},
}

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

console.log(attributes['charisma'])