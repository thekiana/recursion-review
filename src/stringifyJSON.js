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

  if (typeof obj === "object") {
    debugger;
    var result = "";

    if (Object.keys(obj).length === 0) {
      return "{}";
    }

    for (var key in obj) {
      var value = obj[key];

      if (Object.keys(obj).length === 1) {
        result += `"${key}":${stringifyJSON(value)}`;
      }

      result += `"${key}":${stringifyJSON(value)}, `;
    }

    return "{" + result + "}";
  }
};

// ideas to fix line 47
// var keyArr = Object.keys(obj);
// var lastEle = keyArr[keyArr.length - 1];