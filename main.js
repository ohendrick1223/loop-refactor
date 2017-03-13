'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions:
 map,
 filter,
 reduce,
 every, (returns true only when all elements being tested return true otherwise false, takes predicate function that takes in array element)

 some (returns true if it finds at least one element that returns true; otherwise false, takes predicate function that takes in array element)

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {
//reduce
  sum: function sum(arr, base) {
    return arr.reduce(function(a, b) {
   return a += b;
}, base);
  },
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;



//some
  someObjsContainProp: (arr, prop) => {
    return arr.some(function(object) {
      return object.hasOwnProperty(prop);
    });
  },
  //   for(var i = 0; i < arr.length; i++){
  //     if(arr[i].hasOwnProperty(prop)){
  //       return true;
  //     }
  //   }
  //   return false;

//map
  convertNameArrayToObject: (arr) => {
    return arr.map(function(element) {
      var newObject = {};
      newObject.first = element[0];
      newObject.last = element[1];
      return newObject;
    });
  },
  //   let nameObj = [];
  //   for(var i = 0; i < arr.length; i++){
  //     let obj = {};
  //     obj.first = arr[i][0];
  //     obj.last = arr[i][1];
  //     nameObj.push(obj);
  //   }
  //   return nameObj;

//every
  objContainsProp: (arr, prop) => {
    return arr.every(function(object) {
      return object.hasOwnProperty(prop);
    });
  },
  //   for (var i = 0; i < arr.length; i++){
  //     if(!arr[i].hasOwnProperty(prop)){
  //       return false;
  //     }
  //   }
  //   return true;


//filter
  stringMatch: function stringMatch(arr, str) {
    return arr.filter(function(element) {
      return element.includes(str);
  });
  },

  // stringMatch: (arr, str) => {
  //   let matches = [];
  //   for(var i = 0; i < arr.length; i++){
  //     if (arr[i].includes(str)){
  //       matches.push(arr[i]);
  //     }
  //   }
  //   return matches;
  // },

};
