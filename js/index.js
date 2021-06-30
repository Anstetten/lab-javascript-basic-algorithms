
// Iteration 1: Names and Input

let hacker1 = "Amanda";
console.log(`The driver name is ${hacker1}`);

let hacker2 = "Zsolt";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
//We decide who has longer names
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

else if(hacker1.length<hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}

else{
    console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops

//3.1
//Declare empty string
let hacker1New = "";

//For each letter of the string
for (let i=0; i < hacker1.length; i++){
    //We add the letter in Upper Case + 1 space to the previously declared string
hacker1New= hacker1New + hacker1[i].toUpperCase() + " "; 
} 

//We have one extra space at the end, so we cut it off
hacker1New= hacker1New.slice(0,hacker1New.length-1);

//We have the results
console.log(hacker1New);

//3.2
//Again empty string to fill up
let hacker2New = "";

//We loop backwards through the letters of the string and add it to the empty string
for (let i=hacker2.length -1; i>=0; i--){
    hacker2New = hacker2New + hacker2[i];
}
//We print the result
console.log(hacker2New);

//3.3
//We decide who has the shorter name and get the length
//It is important because we only want to loop until the end of the shorter name
let ShorterLenght = (hacker1.length <= hacker2.length) ? hacker1.length : hacker2.length;

//We loop through the names (amount of loop is equal to the shorter name)
for (let i=0; i<ShorterLenght; i++){
    //If one letter has a smaller value that means it is ahead in the alphabet
    //So if one is lower then it is before the other
    //If it is the case we break the loop
    if (hacker1[i]<hacker2[i]) {
        console.log("The driver's name goes first."); break;
    }
     else if (hacker1[i]>hacker2[i])
     { console.log("Yo, the navigator goes first definitely."); break;}
    
     //Except, if they are equal, we have to move on to the next letter
     else{

        //And if we arrived to the last digit of the shorter name and it is still equal, we finish the loop with this message
        if (i==ShorterLenght-1){
            console.log("What?! You both have the same name?");
        }

     }
     
}


//Bonust Time - Bonus 1

let lorumString ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut. Tincidunt arcu non sodales neque sodales ut etiam. Est ullamcorper eget nulla facilisi. Viverra nam libero justo laoreet sit amet. Velit euismod in pellentesque massa. Sed ullamcorper morbi tincidunt ornare massa eget. Eu consequat ac felis donec. Eu ultrices vitae auctor eu augue ut lectus. Interdum velit euismod in pellentesque massa. Commodo nulla facilisi nullam vehicula ipsum. Mauris augue neque gravida in fermentum et sollicitudin. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Consequat nisl vel pretium lectus quam id leo in. At varius vel pharetra vel turpis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Viverra accumsan in nisl nisi scelerisque. Odio pellentesque diam volutpat commodo. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Nunc mattis enim ut tellus. Augue eget arcu dictum varius duis at consectetur lorem. Felis eget nunc lobortis mattis aliquam faucibus purus in. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Aliquam faucibus purus in massa tempor nec. Bibendum arcu vitae elementum curabitur vitae nunc. Et sollicitudin ac orci phasellus egestas tellus rutrum. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Orci porta non pulvinar neque laoreet suspendisse interdum. Consectetur lorem donec massa sapien faucibus. Eu tincidunt tortor aliquam nulla facilisi. Maecenas accumsan lacus vel facilisis volutpat. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum morbi blandit cursus risus at ultrices mi. Sapien eget mi proin sed libero. Sit amet justo donec enim diam vulputate ut. Dapibus ultrices in iaculis nunc. Imperdiet proin fermentum leo vel orci porta non. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sed cras ornare arcu dui vivamus arcu. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Id aliquet risus feugiat in ante metus. In hendrerit gravida rutrum quisque non tellus orci ac. Varius duis at consectetur lorem donec massa sapien. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Convallis aenean et tortor at risus viverra adipiscing. Eu lobortis elementum nibh tellus molestie. Ornare massa eget egestas purus. Risus nec feugiat in fermentum posuere urna nec tincidunt.";

//Number of word = number of spaces +1

//We transform the string into an array in which, each member is a letter.
let arrayOfString=[...lorumString];

//we filter out all the spaces in the array and stroe it in a new array
let arrayOfSpaces=arrayOfString.filter(letter => letter ===" ");

console.log('');

//Get the number of spaces
let numberOfSpaces = arrayOfSpaces.length;

//Get the number of words
let numberOfWords= numberOfSpaces+1;

console.log(`The number of word in the string is ${numberOfWords}`);

console.log('');
//Bonus 2

//Declare sentence
let sentence = "Amor, Roma";

//Change it to lower case for easier comparison
let sentenceLower = sentence.toLowerCase();

//Create an array of the characters of the string
let ArraySentence =[... sentenceLower];


//Create two empty strings for the direct and reverse version of the string
let stringRaw = ""; 

let stringRawReverse = "";

//For each member of the array we decide if it is a letter or other character
//If letter we add it to the end of the normal stringRaw and to the beiginning of the reverse one
ArraySentence.forEach(letter => {
    if (!/[^a-zA-Z]/.test(letter)) { 
        stringRaw = stringRaw + letter;
        stringRawReverse=letter+stringRawReverse; 

    }
}); 
console.log(`The examined string is:  ${sentence}`);
console.log(`The string in normal order without special characters: ${stringRaw}`);
console.log(`The string in reverse order without special characters: ${stringRawReverse}`);

//Decide if it is a polindrom or not
if(stringRaw===stringRawReverse){
    console.log(`The string: '${sentence}' is a polindrom`);}
else{
    console.log(`The string: '${sentence}' is not a polindrom`); }



