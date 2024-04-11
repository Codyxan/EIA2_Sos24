"use strict";
var randomPoem;
(function (randomPoem) {
    let charakter = ["Anakin ", "Padme ", "Obiwan "];
    let action = ["hates ", "loves ", "wants "];
    let things = ["sand", "c3p0", "lightsabers"];
    for (let i = charakter.length; i >= 1; i--) {
        console.log(getVerse(charakter, action, things));
    }
    function getVerse(_charakter, _action, _things) {
        let randomCharakter = Math.floor(Math.random() * _charakter.length);
        let randomAction = Math.floor(Math.floor(Math.random() * _action.length));
        let randomThings = Math.floor(Math.random() * _things.length);
        let removeCharakter = _charakter.splice(randomCharakter, 1)[0];
        let removeAction = _action.splice(randomAction, 1)[0];
        let removeThing = _things.splice(randomThings, 1)[0];
        let verse = removeCharakter + removeAction + removeThing;
        return (verse);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=type.js.map