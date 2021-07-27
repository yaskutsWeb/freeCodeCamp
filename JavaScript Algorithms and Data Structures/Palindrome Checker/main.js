function palindrome(str) {
    const currentStr = str.slice().replace(/[\W_]/gi, "").toLowerCase().split("");
    console.log(currentStr);
    const reverseStr = str.slice().replace(/[\W_]/gi, "").toLowerCase().split("").reverse();
    for (let i = 0; i < currentStr.length / 2; i++){
        if (currentStr[i] != reverseStr[i]) return false;
    }
    return true;
}



console.log(palindrome("My age is 0, 0 si ega ym."));
