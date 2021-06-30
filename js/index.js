
// Iteration 1: Names and Input

let hacker1 = "Amanda";
console.log(`The driver name is ${hacker1}`);

let hacker2 = "Zsolt";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals

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

let hacker1New = "";


for (let i=0; i < hacker1.length; i++){
hacker1New= hacker1New + hacker1[i].toUpperCase() + " "; 
} 
hacker1New= hacker1New.slice(0,hacker1New.length-1);

console.log(hacker1New);

let hacker2New = "";
for (let i=hacker2.length -1; i>=0; i--){
    hacker2New = hacker2New + hacker2[i];
}
console.log(hacker2New);

let ShorterLenght = (hacker1.length <= hacker2.length) ? hacker1.length : hacker2.length;
console.log(ShorterLenght);

for (let i=0; i<ShorterLenght; i++){
    if (hacker1[i]<hacker2[i]) {
        console.log("The driver's name goes first."); break;
    }
     else if (hacker1[i]>hacker2[i])
     { console.log("Yo, the navigator goes first definitely."); break;}
    
     
     else{

        if (i==ShorterLenght-1){
            console.log("What?! You both have the same name?");
        }

     }
     
}

//Bonust Time - Bonus 1

let lorumString ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut. Tincidunt arcu non sodales neque sodales ut etiam. Est ullamcorper eget nulla facilisi. Viverra nam libero justo laoreet sit amet. Velit euismod in pellentesque massa. Sed ullamcorper morbi tincidunt ornare massa eget. Eu consequat ac felis donec. Eu ultrices vitae auctor eu augue ut lectus. Interdum velit euismod in pellentesque massa. Commodo nulla facilisi nullam vehicula ipsum. Mauris augue neque gravida in fermentum et sollicitudin. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Consequat nisl vel pretium lectus quam id leo in. At varius vel pharetra vel turpis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Viverra accumsan in nisl nisi scelerisque. Odio pellentesque diam volutpat commodo. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Nunc mattis enim ut tellus. Augue eget arcu dictum varius duis at consectetur lorem. Felis eget nunc lobortis mattis aliquam faucibus purus in. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Aliquam faucibus purus in massa tempor nec. Bibendum arcu vitae elementum curabitur vitae nunc. Et sollicitudin ac orci phasellus egestas tellus rutrum. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Orci porta non pulvinar neque laoreet suspendisse interdum. Consectetur lorem donec massa sapien faucibus. Eu tincidunt tortor aliquam nulla facilisi. Maecenas accumsan lacus vel facilisis volutpat. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum morbi blandit cursus risus at ultrices mi. Sapien eget mi proin sed libero. Sit amet justo donec enim diam vulputate ut. Dapibus ultrices in iaculis nunc. Imperdiet proin fermentum leo vel orci porta non. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sed cras ornare arcu dui vivamus arcu. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Id aliquet risus feugiat in ante metus. In hendrerit gravida rutrum quisque non tellus orci ac. Varius duis at consectetur lorem donec massa sapien. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Convallis aenean et tortor at risus viverra adipiscing. Eu lobortis elementum nibh tellus molestie. Ornare massa eget egestas purus. Risus nec feugiat in fermentum posuere urna nec tincidunt.";

//Number of word = number of spaces +1

let arrayOfString=[...lorumString];

let arrayOfSpaces=arrayOfString.filter(letter => letter ===" ");

console.log(arrayOfSpaces);

let numberOfSpaces = arrayOfSpaces.length;

let numberOfWords= numberOfSpaces+1;

console.log(numberOfWords);


