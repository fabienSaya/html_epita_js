/*
    Les variables / les types
*/
// EN ES5, on utilise var
// Une variable déclarée avec var a une portée, soit globale, soit de function
var nombre = 2;
console.log(nombre); // affiche 2 dans la console

function test() {
	console.log(nombre);
    var nombre2 = 5;
    console.log('nombre2 dans la fonction', nombre2);
}
test();

//console.log('nombre2 en dehors la fonction', nombre2); -> échoue car déclaré dans test donc non accessible

// EN ES6, on utilise let
// une variable déclarée avec let a une portée de bloc
// ** Une variable déclarée dans un bloc parent, le/les bloc(s) enfant(s) y ont accès
// ** Une variable déclarée dans un bloc enfant, le/les bloc(s) parent(s) n'y ont pas accès
let nombre5 = 200;
if(true) {
	let nombre3 = 12;
    if(true) {
    	console.log(nombre3); // affiche 12, car nombre3 est déclaré dans un bloc parent
        let nombre4 = 27;
    }    
    console.log(nombre5); // affiche 200, car nombre5 est déclaré dans un bloc parent
    console.log(nombre4); // affiche une erreur, car nombre4 est déclaré dans un bloc enfant(le bloc parent n'y a pas accès)
}
