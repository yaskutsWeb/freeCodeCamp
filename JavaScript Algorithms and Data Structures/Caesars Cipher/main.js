function rot13(str, change = 13) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let stroka = str.slice().split("");

    return stroka.map(item => {
        if (/[^\W_]/.test(item)) {
            const wordPosition = ALPHABET.indexOf(item);
            let newPosition = wordPosition + change;

            if (newPosition < -Math.abs(ALPHABET.length)) {
                while (true) {
                    newPosition += ALPHABET.length;
                    if (newPosition < -Math.abs(ALPHABET.length)) {
                        continue;
                    }
                    break;
                }
            }

            if (newPosition >= ALPHABET.length) {
                while (true) {
                    newPosition = newPosition-ALPHABET.length;
                    if (newPosition >= ALPHABET.length) {
                        continue;
                    }
                    break;
                }
            }

            return ALPHABET[newPosition];
        }
        return item;
    }).join("");
}

console.log(rot13("SERR PBQR PNZC"));
