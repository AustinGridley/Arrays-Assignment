import Senators from './data/senators.json'

export const republicans = () => {
 const rep = Senators.filter (p => p.party == "Republican");
  return rep;
}

export const democrats = () => {
  const demo = Senators.filter (p => p.party == "Democrat");
  return demo;
}

export const independents = () => {
  const ind = Senators.filter (p => p.party == "Independent");
  return ind;
}

export const males = () => {
  const male = Senators.filter (p => p.person.gender == "male");
  return male;
}

export const females = () => {
  const female = Senators.filter (p => p.person.gender == "female");
  return female;
}

export const byState = () => {
  const state = Senators.filter (p => p.state == "UT");
  return state;
}

export const mapping = () => {
  var filteredSenators = Senators.map(myFunc);
  function myFunc(senator){
  let obj ={};

  obj.firstName = senator.person.firstname;
  obj.lastName = senator.person.lastname;
  obj.party = senator.pary;
  obj.gender = senator.person.gender;
  return obj;
}
  return filteredSenators;
}
export const reducedCount = () => {
  let z = Senators.reduce( (x, senator) => {
  x[senator.party.toLowerCase()] = (x[senator.party.toLowerCase()]||0) + 1;
  return x;
  },{})
  return z;
};


const REPLACE_ME_WITH_CODE = false
