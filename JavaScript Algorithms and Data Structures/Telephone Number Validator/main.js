function telephoneCheck(str) {
    const regExp = /^(1)?[ -]?((\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$|d{10})/
    return regExp.test(str);
}

console.log(telephoneCheck("1-(525)"));
