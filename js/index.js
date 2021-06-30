
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


console.log(hacker1[0] > hacker2);



let ShorterLenght = (hacker1.length <= hacker2.length) ? hacker1.length : hacker2.length;
console.log(ShorterLenght);

for (let i=0; i<ShorterLenght; i++){
    if (hacker1[i]<hacker2[i]) {
        console.log("the driver goes first"); break;
    }
     else if (hacker1[i]>hacker2[i])
     { console.log("the navigator goes first"); break;}
    
     
     else{

        if (i==ShorterLenght-1){
            console.log("What?! You both have the same name?");
        }

     }
     
     

    
}
