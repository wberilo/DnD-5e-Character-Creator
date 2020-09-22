let rules;
let classes;
let proficiencyBonus = 2;
let level = 1;
//attributes and ability scores are calculated according to 5e rules
let attributes = {}
let skills = {};

//adds skills to skills object with gotRules loaded from json file
function populateRules(gotRules) {
  for (i in gotRules.skillMap) {
    skills[i] = {
      name: i,
      skillAttribute: gotRules.skillMap[i],
      value: 5,
      otherModifiers: 0,
      proficiency: false,
      get getValue() {
        if (this.proficiency === true) {
          return attributes[this.skillAttribute].bonus + proficiencyBonus + this.otherModifiers
        } else {
          return attributes[this.skillAttribute].bonus + this.otherModifiers;
        }
      },
      setValue() {
        document.querySelector('#' + this.name).innerText = this.getValue;
      },
    };
  }
  for (i in gotRules.attributes) {
    attributes[i] = {
      value: 0,
      bonus: -5,
      name: i,
      set setValue(value) {
        this.value = value;
        this.bonus = Math.floor((value - 10) / 2);
        for (skill in skills) {
          console.log(this.name)
          if (skills[skill].skillAttribute == this.name) {
            skills[skill].setValue();
          }
        }
      },
    };
  }
  linkHtml()
}
//Populate page with the attributes and skills from the current attributes and skills variables
function linkHtml(){
  document.querySelector('#attributes').innerHTML = '';
  for(atr in attributes) {
    htmlAttribute = document.createElement('div');
    let input = document.createElement('input');
    input.id = atr;
    input.type = 'number';
    let span = document.createElement('span');
    console.log(atr);
    let para = document.createElement('p');
    para.innerText = atr;
    input.addEventListener('input', function(){
      attributes[input.id].setValue = input.value;
    })
    htmlAttribute.appendChild(para);
    htmlAttribute.appendChild(input);
    htmlAttribute.appendChild(span);
    document.querySelector('#attributes').appendChild(htmlAttribute)
  }
  document.querySelector('#skills').innerHTML = '';
  for(skl in skills) {
    htmlSkill = document.createElement('div');
    let label = document.createElement('span');
    let span = document.createElement('span');
    span.id = skl;
    label.innerText = skl+' ';
    htmlSkill.appendChild(label);
    htmlSkill.appendChild(span);
    document.querySelector('#skills').appendChild(htmlSkill)
  }
}
// Load rules
function goLoadRules(url) {
  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      rules = data;
      populateRules(rules);
    });
}
goLoadRules('data/ruleset.json');
//classes are loaded from the classes.json data file, function can receive a similar json file as input
function goLoadClasses(url) {
  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      classes = data;
      populateClasses(classes);
      return classes;
    });
}
goLoadClasses('data/classes.json');

function populateClasses(classesGot) {
  let classnames = Object.keys(classesGot);
  for (let i = 0; i < classnames.length; i++) {
    const opt = document.createElement('option');
    opt.value = classnames[i];
    opt.innerText = classnames[i];
    document.querySelector('#class-select').appendChild(opt);
  }
}
