console.log("Linked.");

// Dramatis Personae
// hobbits array
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];
//buddies array
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];  //put these lands in a land array
var body = document.querySelector('body'); // grab the body tag from the doc and put it in the body array



// Part 1  


function makeMiddleEarth() {
  // create a section html tag with an id of middle-earth
  var middleEarth = document.createElement('section');
  middleEarth.setAttribute('id', "middle-earth");
  console.log(middleEarth);
  // inside, add each land as an article tag
  for(var i = 0; i<lands.length; i++){
    //add each land as an article tag
    var article = document.createElement('article');
    
    var h1 = document.createElement('h1');
    
    // inside each article tag include an h1 with the name of the land
    h1.innerHTML = lands[i];
    // append middle-earth to your document body
    middleEarth.appendChild(article);
    //add h1 to article
    article.appendChild(h1);
  }
  //append middleEarth to your document body
  body.appendChild(middleEarth);
  
}

makeMiddleEarth();


// Part 2
//select each article we just created and create a var
var shire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var list = document.createElement('ul'); //create ul list named list
  for(var i = 0; i < hobbits.length; i++){ 
    //go through hobbits array and use them to make the li's
    
    var eachHobbit = document.createElement('li'); //store the li's in eachHobbit var
  // give each hobbit a class of hobbit
  eachHobbit.className = 'hobbit'; // assign a class of 'hobbit' to eachHobbit li's 
  //make the html-text of each hobbit the hobbit names from the array
  eachHobbit.innerText = hobbits[i]; //make the text inside the eachHobbit lis the names from the array
  //add the hobbits to the ....
  list.appendChild(eachHobbit); // add eachHobbit to list
  }
  shire.appendChild(list); // add list to shire parent

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
 var theRing = document.createElement('div');
 //the div we just made is stored in the theRing var
  theRing.setAttribute('id','the-ring'); //add id to theRing
   // give the div a class of 'magic-imbued-jewelry'
   theRing.setAttribute('class','magic-imbued-jewelry');//add class
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click", nazgulScreech);
  //run the nazgul screech when the ring is clicked
  console.log(theRing);

//declare frodo within the function
var frodo = document.getElementsByTagName("li")[0];
//grab the first list item and store it in frodo var
console.log(frodo);
  //add the ring as a child of frodo
  frodo.appendChild(theRing);

}

keepItSecretKeepItSafe(); //dont forget to call your shit!!!
console.log(keepItSecretKeepItSafe);
// Part 4


function makeBuddies() {
// create an aside tag(html) put it in a variable
  var aside = document.createElement('aside');
  var buddiesList = document.createElement('ul');
  for(i = 0; i < buddies.length; i++){
    var eachBuddy = document.createElement('li');
    eachBuddy.innerText = buddies[i];

    buddiesList.appendChild(eachBuddy); // put each li in ul

  }
  // attach an unordered list of the 'buddies' in the aside
  aside.appendChild(buddiesList); //put list in aside
  console.log(buddiesList); //
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

  //*** grab the buddies ul which is [2]
  var secondList = document.getElementsByTagName("ul")[1]; //grabs the 2nd Ul from the doc
  console.log(secondList);
  var nameChange = secondList.getElementsByTagName('li')[3]; //grabs the 4th li from the ul named 2ndlist
  //strider is buddies[4], grab it and change its text
  console.log(nameChange);
  

}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}