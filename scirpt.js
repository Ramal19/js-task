let str = 'TELET'
console.log(str);


let strArray = str.split('');
console.log(strArray);


let reverseArray = [];
for (let i = strArray.length - 1; i >= 0; i--) {
    reverseArray.push(strArray[i])
}

console.log(reverseArray);
let reverseStr = reverseArray.join('')
console.log(reverseStr);


if(strArray=reverseStr) {
    console.log('Polindrom ededdir')
}
else{
    console.log('Polindrom eded deyil')
}