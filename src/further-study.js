// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i]) && !result.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
    return result;
  }

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    let divs = [];
    for(let n = 1; n <= 100; n++) {
      if (n % a === 0) {
        divs.push(n);
      } else if (n % b === 0) {
        divs.push(n);
      } else if (n % c === 0) {
        divs.push(n);
      }
    }
    return divs
  }

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    let compressedString = '';
    let count = 1;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        count++;
      } else {
        compressedString += count + string[i];
        count = 1;
      }
    }
  
    return compressedString;
  }

export { commonStrings, compressString, divisibleByEither };
