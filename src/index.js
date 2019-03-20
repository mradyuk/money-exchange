// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    const H = 50, Q = 25, D = 10, N = 5, P = 1;

    let result = {};

    if (currency === 0) {
        return result;
    }

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    const CountH = divideOnCoins(currency, H, 0);
    currency = currency - H * CountH;

    if (CountH > 0) {
        result['H'] = CountH;
    }

    const CountQ = divideOnCoins(currency, Q, 0);
    currency = currency - Q * CountQ;
    if (CountQ > 0) {
        result['Q'] = CountQ;
    }

    const CountD = divideOnCoins(currency, D, 0);
    currency = currency - D * CountD;
    if (CountD > 0) {
        result['D'] = CountD;
    }

    const CountN = divideOnCoins(currency, N, 0);
    currency = currency - N * CountN;
    if (CountN > 0) {
        result['N'] = CountN;
    }

    const CountP = divideOnCoins(currency, P, 0);
    //currency =  currency - P*CountP;
    if (CountP > 0) {
        result['P'] = CountP;
    }
    return result;
}




function divideOnCoins(value, coin, counter) {
    counter =  Math.floor(value / coin);
    let res = value % coin;

     while (res > coin) {
         counter++;
         return divideOnCoins(value % coin, coin, counter);
     }
    
     return counter;
}




