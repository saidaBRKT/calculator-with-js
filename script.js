
const affich1 = document.querySelector(".display-1");
const affich2 = document.querySelector(".display-2");
const affichResult = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    affich2.innerText = dis2Num;
    // console.log();
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  affich1.innerText = dis1Num;
  affich2.innerText = "";
  dis2Num = "";
  affichResult.innerText = result;
}

function mathOperation() {
    switch(lastOperation){
        case 'x':{
            result = multiplier(parseFloat(result), parseFloat(dis2Num));
            break;
        }
        case '+':{
            result = additionner(parseFloat(result), parseFloat(dis2Num));
            break;
        }
        case '-':{
            result = soustraire(parseFloat(result), parseFloat(dis2Num));
            break;
        }
        case '%':{
            result = modulo(parseFloat(result), parseFloat(dis2Num));
            break;
        }
        case '/':{
            result = diviser(parseFloat(result), parseFloat(dis2Num));
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


equalEl.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  affich2.innerText = result;
  affichResult.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

clearAllEl.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  affich1.innerText = "";
  affich2.innerText = "";
  result = "";
  affichResult.innerText = "";
});

clearLastEl.addEventListener("click", () => {
  affich2.innerText = "";
  dis2Num = "";
});
