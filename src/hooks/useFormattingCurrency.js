import {useState, useEffect} from 'react';
import currencyConverter from "../helpers/currencyConverter";

const useFormattingCurrency = (currencyType, amount) => {
    const [symbol, setSymbol] = useState('');
    const [formattedAmount, setFormattedAmount] = useState('');
    // let [symbol, formattedAmount] = currencyConverter(
    //     currencyType,
    //     amount
    // );
    useEffect(() => {
        setPrice(currencyType, amount)
    },[]);

    const setPrice = (newCurrencyType, newAmount) => {
        const [symbol, formattedAmount] = currencyConverter(
            newCurrencyType,
            newAmount
        );
        setSymbol(symbol);
        setFormattedAmount(formattedAmount);
    };
    return [symbol, formattedAmount, setPrice];
};

export default useFormattingCurrency