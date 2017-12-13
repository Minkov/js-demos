const reverseString = (str) => {
    if (str.length === 0 || str.length === 1) {
        return str;
    }

    // const [firstChar, ...rest] = str;
    const firstChar = str[0];
    const rest = str.substr(1);

    const reversed = reverseString(rest) + firstChar;
    return reversed;
};

console.log(reverseString(1 + '-'.repeat(1 << 10) + 2));
console.log(reverseString('ala bala nica'));
console.log(reverseString('a'));
console.log(reverseString(''));

// (console)
// (onsole)c
// ((nsole)o)c
// (((sole)n)o)c
// ((((ole)s)n)o)c
// (((((le)o)s)n)o)c
// ((((((e)l)o)s)n)o)c
// (((((el)o)s)n)o)c
// ((((elo)s)n)o)c

// (ala bala nica)

// (la bala nica)a
// ((a bala nica)l)a
// ((( bala nica)a)l)a
// ((((bala nica) )a)l)a
// ...
//