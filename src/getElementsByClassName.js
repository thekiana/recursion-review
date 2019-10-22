// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var body = document.body;
  var elementList = [];

  var classCheck = function (element) {

    if (element.classList && element.classList.contains(className)) {
      elementList.push(element);
    }
    var children = element.childNodes;

    for (var i = 0; i < children.length; i++) {
      classCheck(children[i]);
    }

    return elementList;
  }


  classCheck(body);
  return elementList;

};