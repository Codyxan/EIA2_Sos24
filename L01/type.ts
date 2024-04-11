namespace randomPoem {

let charakter : string [] =  ["Anakin ","Padme ","Obiwan "];
let action : string [] = ["hates ","loves ","wants "];
let things : string [] = ["sand","c3p0","lightsabers"];


for (let i: number = charakter.length ; i >= 1 ;i-- ){
    console.log (getVerse (charakter,action,things));
}
function getVerse (_charakter: string[], _action: string[], _things: string[]){
let randomCharakter: number = Math.floor(Math.random() * _charakter.length);
let randomAction: number = Math.floor(Math.floor(Math.random() *_action.length));
let randomThings: number = Math.floor(Math.random() *_things.length);

let removeCharakter: string = _charakter.splice(randomCharakter, 1) [0];
let removeAction: string = _action.splice(randomAction, 1) [0];
let removeThing: string = _things.splice(randomThings, 1) [0];

let verse: string = removeCharakter + removeAction + removeThing;

return (verse)

    }
}



