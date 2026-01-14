const arr= [1,2,3,4,5]

// console.log(arr[3]);

// array method

// arr.push(6)
// arr.push(12)
// arr.push(82)
// arr.pop()
// arr.unshift(99)  // add number at the beggining
// arr.shift()  // remove first element form arr
// console.log(arr.includes(76))   // to check it is present or not
console.log(arr);

const ny1 = arr.slice(1, 3)
console.log(ny1);           // index 1, 2 wala data print hoga sirf
console.log("B", arr);      // original arr same rhega

const ny2 = arr.splice(1, 3)
console.log(ny2);            // indxe 1,2, 3 wale print honge sath mai jp original arr diya h woh wha se gayab ho jainge
console.log("C",arr);