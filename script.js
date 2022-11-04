///////// DSA 1 ////////
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

convertCtoF(30);
///////// DSA 2 ////////
function reverseString(str) {
  const strArr = [...str];
  let reversedArr = [];

  for (let i = strArr.length; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }
  str = reversedArr.join("");
  return str;
}


reverseString("hello");

///////// DSA 3 /////////
function factorialize(num) {
  let factorial = 1;
  for(let i=2; i<=num; i++){
    factorial *= i;
  }
  return factorial;
}

factorialize(5);

/////////// DSA 4 /////////////
function findLongestWordLength(str) {
  const strArr = str.split(' ');
  let longestWord = ''; 

  for(let i=0; i<strArr.length; i++){
    if(strArr[i].length > longestWord.length){
      longestWord = strArr[i];
    }
  }
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/////////// DSA 5 /////////////
function largestOfFour(arr) {
  let bigFour = [];
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    bigFour.push(max);
    max = -Infinity;
  }
  return bigFour;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
/////////// DSA 6 /////////////
//SOLUTION 1
function confirmEnding(str, target) {
  if(str.substring(str.length - target.length) === target){
    return true;
  }else{
    return false;
  }
}

confirmEnding("Bastian", "n");

//SOLUTION 2 (This is cos substring method is not supported my modern browsers)
function confirmEnding(str, target) {
  let strEnd = '';
  for (let i = str.length - target.length; i < str.length; i++) {
    strEnd += str[i];
  }
  if (strEnd === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

/////////// DSA 7 /////////////
function repeatStringNumTimes(str, num) {
  let repeatedStr = "";

  for(let i=0; i<num; i++){
    repeatedStr += str;
  }
  return repeatedStr;
}
repeatStringNumTimes("abc", 3);

/////////// DSA 8 /////////////
function truncateString(str, num) {
  if(str.length > num){
    str = str.slice(0, num) + '...';
  }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

/////////// DSA 9 /////////////
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }else{
      num = undefined;
    }
  }
  return num;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

/////////// DSA 10 /////////////
function booWho(bool) {
  if(typeof bool  === 'boolean'){
    return true;
  }else{
    return false;
  }
}
booWho(null);

/////////// DSA 11 /////////////
function titleCase(str) {
  const strArr = str.toLowerCase().split(' ');

  for(let i=0; i<strArr.length; i++){
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  } 
  return strArr.join(' ');
}

titleCase("I'm a little tea pot");

/////////// DSA 12 /////////////
function frankenSplice(arr1, arr2, n) {
  let arr = [...arr2];
  
  for(let i=0; i<arr1.length; i++){
    arr.splice(n, 0, arr1[i]);
    n += 1;
  }
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/////////// DSA 13 /////////////
function bouncer(arr) {
  let truthy = [];
  let falsy = [false, null, 0, "", undefined, NaN];

  for(let i=0; i<arr.length; i++){
    if(!falsy.includes(arr[i])){
      truthy.push(arr[i]);
    }
}
  return truthy;
}
bouncer([7, "ate", "", false, 9]);

/////////// DSA 14 /////////////
function getIndexToIns(arr, num) {
  const compareNumbers = (a, b) => {
    return a - b;
  }

  let sortedArr = arr.sort(compareNumbers);
  let index = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) {
      index = i;
      break;
    }else{
      index = i+1
    }
  }
  return index;
}
getIndexToIns([40, 60], 50);

/////////// DSA 15 /////////////
function mutation(arr) {
  const firstEl = arr[0].toLowerCase();
  const secondEl = arr[1].toLowerCase();
  let booleanVal;

  for(let i=0; i<secondEl.length; i++){
    if(!firstEl.includes(secondEl[i])){
      booleanVal = false;
      break;
    }else{
      booleanVal = true;
    }
  }
  return booleanVal
}
mutation(["hello", "neo"]);

/////////// DSA 16 /////////////
function chunkArrayInGroups(arr, size) {

  let increaseSize = size;
  let groupArr = [];
  
    for (let i = 0; i < arr.length; i+=size) {
        groupArr.push(arr.slice(i, increaseSize))
        increaseSize+=size;
    }
    return groupArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

