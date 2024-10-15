"use strict";
var randomPoem;
(function (randomPoem) {
    let person = ["Anakin", "Yoda", "Obiwan"];
    let action = ["loves", "hates", "needs"];
    let objects = ["sand", "school", "bluemilk"];
    console.log(getVerse(person, action, objects));
    function getVerse(_person, _action, _objects) {
        let randomPerson = Math.floor(Math.random() * _person.length);
        let randomAction = Math.floor(Math.random() * _action.length);
        let randomObjects = Math.floor(Math.random() * _objects.length);
        let verse = _person[randomPerson] + " " + _action[randomAction] + " " + _objects[randomObjects];
        return verse;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=type.js.map