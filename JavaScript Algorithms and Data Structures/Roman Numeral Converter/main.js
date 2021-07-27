function convertToRoman(num) {
    const thousands = Math.trunc(num / 1000);
    const hundreds = Math.trunc((num - thousands * 1000) / 100);
    const tens = Math.trunc((num - thousands * 1000 - hundreds * 100) / 10);
    const ones = Math.trunc((num - thousands * 1000 - hundreds * 100 - tens * 10));

    return "M".repeat(thousands) + basicCombinations[hundreds * 100] + basicCombinations[tens * 10] + basicCombinations[ones];
}


const basicCombinations = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM"
};

console.log(convertToRoman(2));
