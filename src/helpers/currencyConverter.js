export default function (code = 'EUR', subunit = 0){
    code = code.toUpperCase();
    switch (code) {
        case "EUR": {
            let symbol = '€';
            let amount = subunit/100;
            return [symbol, amount];
        }
        //maybe future has more currency, but default is euro
        default: {
            return ['€', subunit/100];
        }
    }
};