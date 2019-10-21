// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {

  if (typeof obj === "number") {
    return "" + obj;
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (typeof obj === "boolean") {
    return "" + obj;
  } else if (obj === null) {
    return "" + null;
  }

  if (Array.isArray(obj)) {
    var result = [];

    if (obj.length === 0) {
      return "[]";
    }

    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }

    return '[' + result + ']';
  }
};
