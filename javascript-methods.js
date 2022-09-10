/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  
  //returnable array
  const newArray = [];
  for(let i = 0; i < this.length; i++)
  {
    //callbackFn can take in (element,index,array)
    newArray[i] = callbackFn(this[i], i, this);
  }

  return newArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  const newArray = [];
  for(let i = 0; i < this.length; i++)
  {
    if(callbackFn(this[i]) === true)
    {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i]) === true){
      return true;
    }
  }//end for

  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  
  for(let i = 0; i< this.length; i++)
  {
    if(callbackFn(this[i]) === false){
      return false;
    }
  }//end for

  return true;
};

// REDUCE //
//reduce is called with an intitial value
Array.prototype.myReduce = function(callbackFn, runningValue) {
  for(let i = 0; i < this.length; i++){
    //call the callbackFn with the runningValue as the first parameter
    //this order matters for operations like subtraction to work properly
    runningValue = callbackFn(runningValue, this[i]);
  }
  return runningValue;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  
  for(let i = 0; i < this.length; i++) {
    if(this[i] === searchElement){
      return true;
    }
  }//end for

  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};