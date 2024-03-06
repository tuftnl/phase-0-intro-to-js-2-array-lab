// Write your solution here!
let cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let catz = [...cats,name];
    return catz
}
function prependCat(name){
    let catz = [name,...cats];
    return catz
}
function removeLastCat(){
    let catz = cats.slice(0, cats.length-1);
    return catz
}
function removeFirstCat(){
    let catz = cats.slice(1);
    return catz
}