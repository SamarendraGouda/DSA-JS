var Stack = function () {
  this.MAX_SIZE = 20; //The maximum size of the stack
  this.count = 0; //Keep's the track of the count.
  this.storage = {}; //The storage Object in which Stack elements are stored.

  //Underflow condition
  this.isEmpty = function () {
    if (this.count == 0) {
      return true;
    }
    return false;
  };

  //Overflow condition
  this.isFull = function () {
    if (this.count == this.MAX_SIZE) {
      return true;
    }
    return false;
  };

  //Adds a value onto the end of the stack
  this.push = function (value) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //Returns the length of the stack
  this.size = function () {
    return this.count;
  };

  //Returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };

  //Prints the contents of the stack
  this.print = function () {
    var str = "";
    for (var i = 0; i < this.count; i++) {
      str += this.storage[i] + " ";
    }
    return str;
  };
};
