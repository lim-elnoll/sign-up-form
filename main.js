const myInputs = document.querySelectorAll('input');

const myPatterns = {
  fName:/^[a-z\s]+$/i,
  lName:/^[a-z]+$/i,
  email:/^([a-z\.\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  fon: /^\d{8}$/,
  pass:/^[\w@-]{10,25}$/,
  // confPass,
};

function validateAgainst(fld, exp){
  if (exp.test(fld.value)){
    fld.className = 'valid';
  } else {
    fld.className = 'invalid';
  }
}

myInputs.forEach((inp) => {
  inp.addEventListener('keyup', (e) => {
    validateAgainst(e.target, myPatterns[e.target.attributes.name.value]);
    
  });
});