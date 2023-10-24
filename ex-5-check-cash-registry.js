/*
  Design a cash register compartment function checkCashRegister() that accepts purchase price 
  as the first argument (price), payment as the second argument (cash), and cash-in-compartment 
  (cid) as the third argument.

  'cid' is a 2D array listing available currency.

  The checkCashRegister() function should always return an object with a status key 
  and a change key.

  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-compartment is less than the 
  change due, or if you cannot return the exact change.

  Return {status: "CLOSED", change: [...]} with cash-in-compartment as the value for the 
  key change if it is equal to the change due.

  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
  sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  let status = 'OPEN';
  let change = [];
  const changeDue = +(cash - price).toFixed(2);
  
  let compartmentsChecked = 0;
  let flexChange = 0;
  let sumAllCompartments = 0;
  
  for (let compartment of cid.reverse()) {
    let changeDiff = +(changeDue - flexChange).toFixed(2);
    compartmentsChecked++;
    sumAllCompartments = +sumAllCompartments.toFixed(2) + +compartment[1].toFixed(2);
    
    while (compartment[1] > changeDiff) {
      switch (compartment[0]) {
        case 'ONE HUNDRED':
          compartment[1] -= 100;
          break;
        case 'TWENTY':
          compartment[1] -= 20;
          break;
        case 'TEN':
          compartment[1] -= 10;
          break;
        case 'FIVE':
          compartment[1] -= 5;
          break;
        case 'ONE':
          compartment[1] -= 1;
          break;
        case 'QUARTER':
          compartment[1] -= 0.25;
          break;
        case 'DIME':
          compartment[1] -= 0.1;
          compartment[1] = +compartment[1].toFixed(2);
          break;
        case 'NICKEL':
          compartment[1] -= 0.05;
          compartment[1] = +compartment[1].toFixed(2);
          break;
        case 'PENNY':
          compartment[1] -= 0.01;
          compartment[1] = +compartment[1].toFixed(2);
          break;
      }
    }
    
    if (compartment[1] < changeDiff && compartment[1] !== 0) {
      flexChange += compartment[1];
      change.push(compartment);
    } else if (compartment[1] === changeDiff) {
      change.push(compartment);
      break;
    }
    
    if (compartmentsChecked === 9 && compartment[1] !== changeDiff) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
      break;
    }
  }

  if (compartmentsChecked === 9 && sumAllCompartments === changeDue) {
    status = 'CLOSED';
    change = cid.reverse();
  }

  return {
    status: status,
    change: change
  };
};

console.log(checkCashRegister(2.75, 10, 
  [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ])
);

console.log(checkCashRegister(2.77, 3, 
  [
    ["PENNY", 0.23], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
  ])
);

console.log(checkCashRegister(2.75, 10, 
  [
    ["PENNY", 0], 
    ["NICKEL", 0], 
    ["DIME", 3.1], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ])
);