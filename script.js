const affich1 = document.querySelector(".display-1");
const affich2 = document.querySelector(".display-2");
const affichResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let num1 = "";
let num2 = "";
let result = null;
let lastOperation = "";
let virguleFlott = false;
let moin=false

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
     if (e.target.innerText ==="0"  && !num2) 
      return;
      else if (e.target.innerText === "-" && !moin) 
        moin=true
   else if (e.target.innerText === "." && !virguleFlott) {
      virguleFlott = true;
    }
      
    else if (e.target.innerText ==="-" && moin || e.target.innerText ==="." && virguleFlott  )
    return
    num2 += e.target.innerText;
    affich2.innerText = num2;
    // console.log();
   
    
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!num2) return;
    virguleFlott = false;
    moin=false
    const operationName = e.target.innerText;
    if (num1 && num2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(num2);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  num1 += num2 + " " + name + " ";
  affich1.innerText = num1;
  affich2.innerText = "";
  num2 = "";
  affichResult.innerText = result;
}

function mathOperation() {
    switch(lastOperation){
        case 'x':{
            result = multiplier(parseFloat(result), parseFloat(num2));
            break;
        }
        case '+':{
            result = additionner(parseFloat(result), parseFloat(num2));
            break;
        }
        case '-':{
            result = soustraire(parseFloat(result), parseFloat(num2));
            break;
        }
        case '%':{
            result = modulo(parseFloat(result), parseFloat(num2));
            break;
        }
        case '/':{
            result = diviser(parseFloat(result), parseFloat(num2));
            break;
        }
    }
}

const additionner = (nbr1, nbr2) => nbr1 + nbr2;
const soustraire = (nbr1, nbr2) => nbr1 - nbr2;
const multiplier = (nbr1, nbr2) => nbr1 * nbr2;
const diviser = (nbr1, nbr2) => {
    if(nbr2 == 0) return ;
    return nbr1 / nbr2;
};
const modulo = (nbr1, nbr2) => {
    if(nbr2 == 0) return ;
    return nbr1 % nbr2;
};
// operation();


equal.addEventListener("click", () => {
  if (!num2 || !num1) return;
  virguleFlott = false;
  moin=false
  mathOperation();
  clearVar();
  affich2.innerText = result;
  affichResult.innerText = "";
  num2 = result;
  num1 = "";
});

clearAllEl.addEventListener("click", () => {
  virguleFlott = false;
  moin=false
  num1 = "";
  num2 = "";
  affich1.innerText = "0";
  affich2.innerText = "0";
  result = "";
  affichResult.innerText = "0";
});

clearLastEl.addEventListener("click", () => {
  affich2.innerText = "";
  num2 = "";
});
