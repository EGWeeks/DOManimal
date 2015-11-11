var animals = {
	Lion : 'amigo',
	Gerbil : 'crips',
	Koala : 'bloods',
	Pig : 'bang',
	Chipmunk : 'gangsta'
};

var table = document.createElement('table');
var tCreate = document.body.appendChild(table);
// creating tr & td for name
var tRow = document.createElement('tr');
tCreate.appendChild(tRow);
var animalLength = Object.keys(animals).length;
//loop creates td tags by length of obj
var i = 0
while (i < animalLength) {
	var td = document.createElement('td');
	var tdCreate = tRow.appendChild(td);
	i++;
}

// creating tr & td for sounds
var tRow2 = document.createElement('tr');
tCreate.appendChild(tRow2);
var animalLength2 = Object.keys(animals).length;
var num = 0
while (num < animalLength2) {
	var td2 = document.createElement('td');
	var tdCreate2 = tRow2.appendChild(td2);
	num++;
}
var names = Object.keys(animals);

//Grab table first child
for(var x=0; x < 5; x++){
	var firstTR = tCreate.childNodes[0].childNodes[x];
	firstTR.innerHTML = names[x];
}

//Grab table second child 
for(var v=0; v < 5; v++){
	var secondTR = tCreate.childNodes[1].childNodes[v];
	secondTR.innerHTML = animals[names[v]];
}

NodeList.prototype['forEach'] = Array.prototype['forEach'];
var tdArray = document.querySelectorAll('td');

tdArray.forEach(function(curr) {
	curr.style['border'] = '1px solid #000';
	curr.style['padding'] = '2em';
});




// tdStyle['border'] = '1px solid #000';
