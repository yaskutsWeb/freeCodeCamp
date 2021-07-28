const currency = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
};

function checkCashRegister(price, cash, cid) {
    const CHANGE_DIF_SUM = cash*100 - price*100;
    let changeSum = CHANGE_DIF_SUM;

    let status = "";
    let change = [];

    let cidSum = 0;
    let cidFiltered = cid.filter(item => {
        if (item[1] != 0) return item;
    }).reverse();

    cidFiltered.forEach(element => {
        let prop = element[0];
        let value = element[1] * 100;
        cidSum += value;

        let amount = 0;
        while (changeSum >= currency[prop] && value > 0) {
            amount+=currency[prop];
            changeSum -= currency[prop];
            value -= currency[prop];
        }
        if(amount) change.push([prop, amount/100]);
    });

    if (changeSum > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    }
    else if (changeSum == 0 && cidSum == CHANGE_DIF_SUM) {
        status = "CLOSED";
        change = [...cid];
    }
    else {
        status = "OPEN";
    }

    return { status, change };
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
