/*
  Design a cash register drawer function checkCashRegister() that accepts purchase price 
  as the first argument (price), payment as the second argument (cash), and cash-in-drawer 
  (cid) as the third argument.

  'cid' is a 2D array listing available currency.

  The checkCashRegister() function should always return an object with a status key 
  and a change key.

  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the 
  change due, or if you cannot return the exact change.

  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the 
  key change if it is equal to the change due.

  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
  sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  let status = 'OPEN';
  let change = [];
  const changeDue = +(cash - price).toFixed(2);
  
  let drawersChecked = 0;
  let flexChange = 0;
  let sumAllDrawers = 0;
  
  for (let drawer of cid.reverse()) {
    let changeDiff = +(changeDue - flexChange).toFixed(2);
    drawersChecked++;
    sumAllDrawers = +sumAllDrawers.toFixed(2) + +drawer[1].toFixed(2);
    
    while (drawer[1] > changeDiff) {
      switch (drawer[0]) {
        case 'ONE HUNDRED':
          drawer[1] -= 100;
          break;
        case 'TWENTY':
          drawer[1] -= 20;
          break;
        case 'TEN':
          drawer[1] -= 10;
          break;
        case 'FIVE':
          drawer[1] -= 5;
          break;
        case 'ONE':
          drawer[1] -= 1;
          break;
        case 'QUARTER':
          drawer[1] -= 0.25;
          break;
        case 'DIME':
          drawer[1] -= 0.1;
          drawer[1] = +drawer[1].toFixed(2);
          break;
        case 'NICKEL':
          drawer[1] -= 0.05;
          drawer[1] = +drawer[1].toFixed(2);
          break;
        case 'PENNY':
          drawer[1] -= 0.01;
          drawer[1] = +drawer[1].toFixed(2);
          break;
      }
    }
    
    if (drawer[1] < changeDiff && drawer[1] !== 0) {
      flexChange += drawer[1];
      change.push(drawer);
    } else if (drawer[1] === changeDiff) {
      change.push(drawer);
      break;
    }
    
    if (drawersChecked === 9 && drawer[1] !== changeDiff) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
      break;
    }
  }

  if (drawersChecked === 9 && sumAllDrawers === changeDue) {
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