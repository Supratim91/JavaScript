let score = "100";
// From string to number conversion
// score = Number(score);
score = +score;
console.log(score + 1);
console.log(typeof score);

let result;
// result = Number("Hello");          // returns NaN, type 'number'
// result = String(50);               // returns "50", type 'string'
// result = `${score}`;
// result = Boolean(100);             // returns true, type 'boolean
// result = !!100;
// result = Boolean(0);              // return false, type 'boolean'
// result = Boolean('0');               // returns true, type 'boolean'
// result = Boolean('');             // returns false, type 'boolean'
// result = Boolean(undefined);        // returns false, type 'boolean'
result = Boolean(null);             // returns false, type 'boolean'
console.log(result, typeof result);